import React,{useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MainScreen from './MainScreen';
import './Login.css';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/actions/userAction'


export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
let userLoginReducers =  useSelector((state) => state.userLoginReducers);
let { loading, userInfo, error} = userLoginReducers;
const navigate= useNavigate();



const dispatch = useDispatch();


useEffect(() => {
  if (userInfo) {
    navigate('/mynotes');
    console.log('msla')

  }
}, [ userInfo]);

const submitHandler = async(e)=>{
e.preventDefault();
  // console.log(email," ", password)
  dispatch(login(email, password))
  setEmail('');
  setPassword('');
  
}


  return (

<MainScreen title='Login'>
<div className="loginContainer">
{
  loading && <Loading/>
}
{
  error && <ErrorPage  err={error}/>
}
    <form  onSubmit={submitHandler}>
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
