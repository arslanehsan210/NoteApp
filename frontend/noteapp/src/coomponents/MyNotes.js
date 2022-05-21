
import MainScreen from './MainScreen';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import {Link, useNavigate} from 'react-router-dom';
// import notes from '../data';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { deleteNote, listNotes } from '../redux/actions/noteActions';



 function MyNotes({search}) {

  const navigate = useNavigate();

  const noteListReducer = useSelector((state)=>state.noteListReducer);
  const {notes,loading,error}  = noteListReducer;

  let userLoginReducers =  useSelector((state) => state.userLoginReducers);
let { userInfo } = userLoginReducers;

const noteCreate = useSelector((state) => state.noteCreateReducer);
  const { success  } = noteCreate;

  const noteUpdateReducer = useSelector((state) => state.noteUpdateReducer);
  const {  successs } = noteUpdateReducer;

 const dispatch = useDispatch();

 const noteDeleteReducer = useSelector((state) => state.noteDeleteReducer);
   const {successss} = noteDeleteReducer;
 
   const deleteHandler = (id) => {
     if (window.confirm("Are you sure?")) {
       dispatch(deleteNote(id));
     }
     navigate("/mynotes");
   };



useEffect(()=>{
dispatch(listNotes());
if(!userInfo){
  navigate('/')
}
},[dispatch, success ,successs , userInfo, successss])

  return (
      
    <MainScreen title={`welcome back ${userInfo?.name}...`} >
 <Link to="/createnote">
        <button type="button" to="/createnote" style={{ marginBottom: 6 }} className="btn btn-primary btn-lg"> Create new Note</button>
      </Link>
      
      {loading && <Loading/> }
      {error && <ErrorPage  err={error}/>}
{  notes?.filter((filteredNote)=> filteredNote.title.toLowerCase().includes(search.toLowerCase())).map((note)=>{
  return(

  
      <div className="accordion accordion-flush border" id="accordionFlushExample" key={note._id}>
  <div className="accordion-item">
    <div className="accordion-header  m-2 d-flex justify-content-between align-items-center" id="flush-headingOne">
      <h6 className="collapsed cursor"  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"  aria-controls="flush-collapseOne">
        {note.title}
      </h6>
      <div >
      <Link to={`/note/${note._id}`}><button  type="button" className="btn btn-primary mx-2">Edit</button></Link>
      <button type="button" className="btn btn-danger"
      onClick={()=> deleteHandler(note._id)} >Delete</button>
    </div>
    
</div>
    <div id="flush-collapseOne" className="accordion-collapse collapse border" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    
      <div className="accordion-body">
      <span className="badge bg-success mb-2">Caregory : {note.category}</span>
     <p>{note.content}</p>
     <footer>created on date aho</footer> </div>
    </div>
  </div>

  
</div>
)
})
}
    </MainScreen>


  )
}

export default MyNotes;