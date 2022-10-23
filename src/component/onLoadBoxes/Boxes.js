import React,{useState} from 'react'
import { Box } from '@mui/system'
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const Boxes = ({color="gray",title,title2}) => {
    const [count,setCount]=useState(0);

    function clampAvatars(avatars, options = { max: 5 }) {
      const { max = 5, total } = options;
      let clampedMax = max < 2 ? 2 : max;
      const totalAvatars = total || avatars.length;
      if (totalAvatars === clampedMax) {
        clampedMax += 1;
      }
      clampedMax = Math.min(totalAvatars + 1, clampedMax);
      const maxAvatars = Math.min(avatars.length, clampedMax - 1);
      const surplus = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
      return { avatars: avatars.slice(0, maxAvatars).reverse(), surplus };
    };
 

      const dataFromTheServer = {
        people: [
          {
            alt: 'Remy Sharp',
            src:require("../../imagess/avatarFaces/elijah-hiett-profile-image.jpg")
          },
          {
            alt: 'Travis Howard',
            src: require('../../imagess/avatarFaces/hassan-khan-profile-image.jpg'),
          },
          {
            alt: 'Agnes Walker',
            src: require('../../imagess/avatarFaces/tom-briskey-basketball-image.jpg'),
          }
      
        ],
        total(){
          return this.people.length
        }
      };
      const dataFromTheServer2=dataFromTheServer.total.bind(dataFromTheServer)();
      

      const { avatars, surplus } = clampAvatars(dataFromTheServer.people, {
        max: 5,
        total: dataFromTheServer2,
      });
  return (
    <div className='boxStyle'
     style={{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"1rem",
  backgroundColor:color,width:"13.5rem"  ,marginRight:"auto",padding:"0.5rem" ,minWidth:'10rem',height:"13rem",lineHeight:"5.5rem"}}>
<div className='avatarsDiv' style={{display:"flex",}}>
<AvatarGroup>
  <Avatar color="primary"  variant="soild">+{dataFromTheServer2}</Avatar>
      {avatars.map((avatar) => (
        <Avatar key={avatar.alt} {...avatar} />
      ))}

    </AvatarGroup>
<MoreVertIcon sx={{marginLeft:"auto",color:'gray'}}/>
</div>
<div style={{lineHeight:"1rem"}}>
<h3 style={{fontWeight:"600",color:"white"}}>{title} </h3>
<br/>
<h3 style={{fontWeight:"600",color:"white"}}>{title2}</h3>
<br/>
</div>

 <div style={{height:"4rem",width:"100%",padding:"20px 5px" }}>


<div className='boxLine'></div>

 </div>
   </div>
  )
};

export default Boxes;