import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/userAction'


export default function Header({setSearch}) {

  const navigate =useNavigate();
  let userLoginReducers =  useSelector((state) => state.userLoginReducers);
  let { userInfo } = userLoginReducers;
  
const dispatch = useDispatch();

const logoutHandler = ()=>{

dispatch(logout())
navigate('/');
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link className="navbar-brand" to="/">Note Zipper</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <form className="d-flex m-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={(e)=> setSearch(e.target.value)}
        />
       
      </form>

      {  userInfo ? <ul className="navbar-nav  mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/mynotes">My Notes</Link>
        </li>
      
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {userInfo?.name}
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
            <li><a className="dropdown-item" onClick={logoutHandler}>Log Out</a></li>
            
           
          </ul>
        </li>
        
      </ul>: <ul className="navbar-nav  mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        </ul>}
      
    </div>
  </div>
</nav>
  )
}
