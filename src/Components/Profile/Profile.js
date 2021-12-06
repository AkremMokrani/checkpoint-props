import React from "react";
const styleObject={ color:"red" , textAlign : 'center'}
const Profile = props =>{
    console.log(`props:`,props)
     return (
         <div style={styleObject}>
           {props.children}
       <h1> Fullname: {props.name} </h1>
       <h1> Bio: {props.bio} </h1>
       <h1> Profession:{props.pro} </h1>
       <button  onClick={() => props.alertMyInput(`Mokrani `)}>
     Profile
   </button>
  
    
       
       </div>
     )
    }
    
export default Profile;