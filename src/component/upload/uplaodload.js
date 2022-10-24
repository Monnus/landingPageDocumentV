import { Box, Button, Select } from '@mui/material'
import { borderBottom } from '@mui/system';
import DStorage from "../../components/abis/DStorage.json"
import React,{useState}from 'react';
import Welocome from "../../imagess/welcomeIMG.svg";


import Boxes from '../onLoadBoxes/Boxes';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import "./uploadload.css";
import DescriptionIcon from '@mui/icons-material/Description';
import {Buffer} from "buffer"
// ========================================upload files table====================
import Web3 from 'web3';

 
const INFURA_ID = "2GM9JzqHaCOYjYViRkzTg3F8loD";
const INFURA_SECRET_KEY = "24ceeea239a51d0e068d20801dfc22d3";
const auth =
    'Basic ' + Buffer.from(INFURA_ID + ':' + INFURA_SECRET_KEY).toString('base64');

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ 
    host: 'ipfs.infura.io', 
    port: 5001, 
    protocol: 'https',
    headers: {
      authorization: auth,
  },
  })


class DisplayUplaodTable extends React.Component{
    uploadFile = description => {
        console.log("Submitting file to IPFS...")
    
        // Add file to the IPFS
        ipfs.add(this.state.buffer, (error, result) => {
        //   console.log('IPFS result', result.size)
          if (error) {
            console.error(error)
            return
          }
    
          this.setState({ loading: true })
          // Assign value for the file without extension
          if (this.state.type === '') {
            this.setState({ type: 'none' })
          }
          this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, this.state.type, this.state.name, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
            this.setState({
              loading: false,
              type: null,
              name: null
            })
            window.location.reload()
          }).on('error', (e) => {
            window.alert('Error')
            this.setState({ loading: false })
          })
        })
      }

    captureFile = (event) => {
  console.log(event.target.dataset);

        // const reader = new window.FileReader()
    
        // reader.readAsArrayBuffer(file)
        // reader.onloadend = () => {
        //   this.setState({
        //     buffer: Buffer(reader.result),
        //     type: file.type,
        //     name: file.name
        //   })
        //   console.log('buffer', this.state.buffer)
        // }
      }



    constructor(props){
        super(props)
        this.state = {
            account: '',
            dstorage: null,
            files: [],
            loading: false,
            type: null,
            name: null
          }
          this.uploadFile = this.uploadFile.bind(this)
          this.captureFile = this.captureFile.bind(this)


         

        }
    render(){

        return(
            <>
<div style={{position: "relative",minWidth:"60rem",height:"30rem"}}>

        <h2 style={{color:"rgba(121,50,128)",width:"auto",height:"4rem",padding:"0.5rem"}}>Document Name</h2>

<table className='table'>
    {this.props.selectFile.map(file=>{
        return (
            <>
                <tr>
            <td style={{display:"flex",justifyContent:"space-evenly",minWidth:"auto",maxWidth:"auto"}}>
            <div className='tableLine'></div>
            <div style={{width:"100px",textAlign:"center"}}><DescriptionIcon sx={{fontSize:"4.0rem"}}/></div>
            <p>
            {file.name}
            <br/>
                Type:{file.type}
             </p>
            <button style={{height:"3rem",cursor:"pointer",borderRadius:"0.5rem",
            fontSize:"1rem",fontWeight:"500",width:"5rem",color:"white",backgroundColor:"rgb(122,56,112)"}}
       onClick={this.captureFile}  data-identifyBtn={this.props.selectFile.identifyBtn} >Deploy</button>
            </td>
              </tr>   
            </>
        )
    })}

</table>

</div>
</>
  )
}
}


const WelcomeCard=()=>{
    return(
        <>
<div style={{height:"100%",width:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around"}}>       
<div style={{display:"flex" ,borderBottom:"2px solid rgba(128,128,128,0.4)",padding:"7px",width:"100%"
,height:"200px",backgroundColor:"white",alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
    <div 
    style={{display:"flex",flexDirection:"column",textAlign:"start",lineHeight:"30x"}}>
<h2>Welcome Back, </h2>
<p style={{fontSize:"20px"}}>Get the power to take your BlockDoc to the next level</p>
    </div>
<img src={Welocome} alt="welcom" style={{width:"200px",height:"200px",alignSelf:"end",}}/>
</div>
        </div>
        </>
    )
};
const UplaodToBlockchainBoxes=()=>{

  return(
    <>
    <Box sx={{display:"flex",flexDirection:"row",
 justifyContent:"auto",flexWrap:"wrap",}}>
        <Boxes color={"#793280"} title={"Web"} title2={"Development"}/>
        <Boxes color={"#83D0D6"} title={"Mobile App"} title2={"Design"}/>
        <Boxes color={"#FE7541"} title={"Facebook"} title2={"Brand UI Kit"}/>
    </Box>
        </>
    )
    }
     const SelectBox=()=>{
        return(
            <>
            <h2>Select</h2>
<form className='SelectBox'>
<select 
style={{width:"90%",height:"5rem",fontSize:"2rem",outline:"none",borderRadius:"1.5rem" ,padding:"5px 10px"}}>
    <option>Matric certificate</option>
</select>
<button
  style={{ cursor:"pointer",width:"10rem",height:"4rem",fontSize:"20px",borderRadius:"1.1rem",
  backgroundColor:"black", color:"white",}}> Upload File</button>
</form>
            </>
        )
     }

// ==========================MUI file upload fun====================================
const Tablecomponent=()=>{
    
    return(
        <>
    <div style={{width:"100vw",height:"70vh",display:"flex"}}>

{/* {welcomeCard()} */}
 
{UplaodToBlockchainBoxes()}
    </div>
    {DisplayUplaodTable()}
    </>
  )
}
export default Tablecomponent;
export {
    WelcomeCard,
    UplaodToBlockchainBoxes,
    DisplayUplaodTable,
    SelectBox
}
