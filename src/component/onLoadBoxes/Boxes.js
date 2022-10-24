import React,{useState} from 'react'
import { Box } from '@mui/system'
const Boxes = ({color="gray",title}) => {
    const [count,setCount]=useState(0);
  return (
    <div className='boxStyle'
     style={{display:"flex",padding:"5px",flexDirection:"column",justifyContent:"space-between",borderRadius:"1rem",
  backgroundColor:color,width:"20rem",height:"20rem",lineHeight:"4.1rem"}}>
<p style={{color:"white"}}>
    {title}  
    ({count})
    </p>

 <div style={{height:"4rem",width:"100%",padding:"10px 0px 10px 50px" }}>

<div style={{height:"0.5rem",width:"80%",backgroundColor:"white", }}>
  
</div>
 </div>
   </div>
  )
};
export default Boxes;