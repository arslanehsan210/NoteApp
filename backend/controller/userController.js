const  User  = require("../models/userModel");

const asyncHandler = require('express-async-handler');
const generateToken = require("../token/genToken");
const bcrypt = require('bcrypt');


const registerUser = asyncHandler (async (req,res) =>{

    const {name, email, password} = req.body;


const userExists = await User.findOne({email})

if(userExists){
    res.status(400);
    throw new Error("user is already existed");
}

const user = await User.create({
    name, 
    email,
    password,
    
})

if(user)
{
    res.status(201);
    res.json({

        _id:user._id,
        name: user.name,
        email:user.email,
        pic:user.pic,
        isAdmin : user.isAdmin,
        token : generateToken(user._id)
    })
}else{
    res.status(400)
    throw new Error("Error something");
}
    
}
)





const authUser = asyncHandler( async(req,res)=>{
const { email , password} = req.body;

const user = await User.findOne({email})

if (!user) {
    res.status(401);
    throw new Error("Invalid Email or Password");
}

else{
    const comparePassword = await bcrypt.compare(password , user.password);
    if (!comparePassword) {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
    else{
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            pic:user.pic,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })
    }
}}    )

 const updateProfile = asyncHandler(async (req,res)=>{


    const {name,email,password} = req.body;

    const user =await User.findById(req.user._id);

    if(user){

        user.name = name || user.name;
        user.email = email || user.email;
        if(password){
            user.password = password;
        }
    


    const updateUser =await user.save();

    res.json({
        _id:updateUser._id,
        name: updateUser.name,
        email:updateUser.email,
        pic:updateUser.pic,
        isAdmin : updateUser.isAdmin,
        token : generateToken(updateUser._id)
    })
    }else {
        res.status(404);
        throw new Error("User Not Found");
      }

}
)



module.exports = {registerUser, authUser, updateProfile};