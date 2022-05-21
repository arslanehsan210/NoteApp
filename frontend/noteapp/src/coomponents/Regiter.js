import React,{useState, useEffect}  from 'react'
import MainScreen from './MainScreen'
import {Link, useNavigate} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { register } from '../redux/actions/userAction'
import Loading from './Loading';

import { useDispatch, useSelector } from "react-redux";

export default function Regiter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const [pic, setPic] = useState(
   { image:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const navigate= useNavigate();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegisterReducers);
  const { loading, error, userInfo } = userRegister;

  

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
  };


  return (
    <MainScreen title={"Register"} >
      <div className="loginContainer">
{
   loading && <Loading/>
}
{message && <ErrorPage  err={message}/>}

    <form  onSubmit={submitHandler}>
  <div className="mb-3">
    <label htmlFor="name1" className="form-label">Name</label>
    <input type="text"
    value={name}
    placeholder="Enter Your Name"
    onChange={(e)=> setName(e.target.value)} 
    className="form-control" id="name2" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"
    value={email}
    placeholder="Enter E-mail"
    onChange={(e)=> setEmail(e.target.value)} 
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"
    value={password}
    placeholder="Enter Password"
    onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
    <input type="password"
    value={confirmpassword}
    placeholder="Confirm Password"
    onChange={(e)=> setConfirmPassword(e.target.value)} className="form-control" id="exampleInputPassword2"/>
  </div>
  <div className="mb-3">
  {/* <label htmlFor="formFile" className="form-label">Default file input example</label>
  <input className="form-control" type="image/png" id="formFile"/> */}
  
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  <div className="row">
      <div className="col py-3">
          New Customer? <Link to='/register'>Register here</Link>
      </div>
  </div>
</div>
    </MainScreen>
  )
}
