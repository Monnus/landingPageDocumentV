
import React,{useState, useEffect}from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
// import Navbar from '../../components/navbar/Navbar'
import { WelcomeCard,UplaodToBlockchainBoxes,DisplayUplaodTable,SelectBox} from "../../component/upload/uplaodload"
import "./index.css";
import IconUser from "../../imagess/userIconImage.svg";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GridViewIcon from '@mui/icons-material/GridView';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import welcomeIMG from "../../imagess/welcomeIMG.svg";
import CalenderBox from "../../component/calander/calenderBox";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Web from 'web3';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { nanoid } from 'nanoid';


const DashBoardPage = () => {
  const [loggInState,setloggInState]=useState(false);
  const auth=getAuth();
  const [selectFile,setSelectFile]=useState([]);

  
  const handleCalander=(minusDays=0)=>{
    const selectMonth = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const date=new Date();
  //get day of the month
  const day=date.getDate();
  const week=date.getDay();
  const year=date.getFullYear();
  const month=selectMonth[date.getMonth()];
  return ` ${month} ${(day-minusDays)}, ${year}`;
};
handleCalander();


const navigate=useNavigate();
const handleLogOut=()=>{
  signOut(auth);
  setloggInState(false);
  navigate("/")
}
const hanleSelectFile=(e)=>{
  console.log(e.target.files[0]);
  const file=Object.assign(e.target.files[0]);
  file.identifyBtn=nanoid();
  setSelectFile(item=>[...item,file]);
};


return (
  <div className='pageGrid'>
    <div className='item1' >
  <div className='Icon-Image'></div>

      <div style={{marginTop:"3rem"}}>
  <div className="Profile-Image">
  <img src={require("../../imagess/profileDisplayIMG.jpg")} style={{borderRadius:"100%",width:"5rem",height:"5rem"}}/>
<h4>Saraha Conners</h4>
<h6>Saraha@gmail.com</h6>
  </div>
      </div>
<div className='Link'>
<nav style={{backgroundColor:"orange",marginTop:"5rem"}}>
<ul>
<li><HomeIcon fontSize='small'/>Dashboard</li>
<br/>
<li>Analytics</li>
<br/>
<li><FormatListBulletedIcon fontSize='small'/>Task List</li>
<br/>

<li> Setting</li>

</ul>
</nav>
</div>
    </div>
    {/* ====================================itme2=============== */}
    <div className='item2'>

    <div style={{display:"flex"}}>

   
<div style={{flexGrow:"2",color:"rgba(121,50,128)"}}>
<h3>Hello,Sara</h3>
<h6>Today is Monday, 20 October 2022</h6>
</div>
<div style={{display:"flex",flexGrow:"3",padding:"0 0",textAlign:"center"}}>
  <input type="text" style={{width:"25rem",height:"2rem", borderRadius:"0.9rem"}}/>
  <div style={{height:"2.5rem",width:"2.5rem",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",
 backgroundColor:"#F7F5F2",color:"rgba(121,50,128)",borderRadius:"0.5rem"}}>
  <SearchIcon fontSize="small" />
  </div>


  <button 
  style={{width:"13rem",cursor:"pointer",height:"2.5rem",
  fontSize:"1.1rem",backgroundColor:"black",borderRadius:"0.5rem",
  marginRight:"1rem", color:"white"}} type="button" onChange={(e)=>hanleSelectFile(e)}> 
  <label htmlFor='filebtn'>Add New Project</label>
  
  <input id="filebtn" type="file"  style={{color:"rgba(0,0,0,0)"}}/>
    
  
  </button>

</div>
<div>
  {/* empty div for space dont remove*/}
  </div>
  </div>

    {/*  div for boxes*/}

<div>
  <br/>
<UplaodToBlockchainBoxes/>
</div>

    </div>
  </div>
  )
}

















export default DashBoardPage
/*

 <div className='item2'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-end"}}>

   
      <div style={{flexGrow:"2",color:"rgba(121,50,128)",fontSize:"1.5rem"}}>
      <h3>Hello,Sara</h3>
      <h6>Today is Monday, 20 October 2022</h6>
      </div>
      <div style={{display:"flex",flexGrow:"3",padding:"0 0",textAlign:"center"}}>
        <input type="text" style={{width:"40rem",height:"4rem", borderRadius:"0.9rem"}}/>
        <SearchIcon fontSize="small"
      style={{height:"4rem",width:"4rem",cursor:"pointer", backgroundColor:"F7F5F2",color:"rgba(121,50,128)",borderRadius:"0.9rem"}} />
      
 
        <button 
        style={{width:"15rem",cursor:"pointer",height:"4rem",
        fontSize:"1.3rem",backgroundColor:"black",borderRadius:"0.5rem",
        marginRight:"1rem", color:"white"}} type="button" onChange={(e)=>hanleSelectFile(e)}> 
        <label htmlFor='filebtn'>Add New Project</label>
        
        <input id="filebtn" type="file"  style={{color:"rgba(0,0,0,0)"}}/>
          
        
        </button>
    
      </div>
      <div>
        {/* empty div for space dont remove*
        </div>
        </div>
  
          {/*  div for boxes
  
  <div>
    <UplaodToBlockchainBoxes/>
  </div>
        </div>
      <div className='item3'>
        <div style={{}}>
        <DisplayUplaodTable selectFile={selectFile}/>
        </div>
        <div style={{}}>
        <img src={welcomeIMG} alt=" wecome to dashboard"/>
        </div>
      </div>
  
      <div className='item4'>
  <div><h1>Calander</h1></div>
      <div className="calander">
        {/* clander divs
        <CalenderBox handleCalander={handleCalander} minusDays={2}/>
        <CalenderBox handleCalander={handleCalander} minusDays={1}/>
        <CalenderBox handleCalander={handleCalander}/>
   
      </div>
      </div>







*/