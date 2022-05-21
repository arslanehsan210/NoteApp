
import './App.css';
import Footer from './coomponents/Footer';
import Header from './coomponents/Header';
import LandingPage from './coomponents/LandingPage';
import {Routes,Route} from 'react-router-dom';
import MyNotes from './coomponents/MyNotes';
import LoginPage from './coomponents/LoginPage';
import Regiter from './coomponents/Regiter';
import CreateNote from './coomponents/CreateNote';
import SingleNote from './coomponents/SingleNote';
import { useState } from 'react';
import ProfilePage from './coomponents/ProfilePage';



function App() {

  const[search , setSearch] = useState("");

  return (
    <div className="App">
      <Header  setSearch={setSearch}/>
<Routes>
<Route exact path='/' element={<LandingPage/>} />
<Route exact path='/login' element={<LoginPage/>} />
<Route exact path='/register' element={<Regiter/>} />
<Route exact path='/mynotes' element={<MyNotes  search={search} />} />
<Route exact path='/createnote' element={<CreateNote/>} />
<Route exact path='/note/:id' element={<SingleNote/>} />
<Route exact path='/profile' element={ <ProfilePage/> } />


      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
