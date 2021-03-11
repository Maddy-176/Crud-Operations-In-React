import React from 'react';
import {Table} from "react-bootstrap"
import {Link} from "react-router-dom"

function UserTable(props) {
    return (
       <div>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Profession</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   {props.userDetails.length>0?(
       props.userDetails.map((user)=>{
           return(
               <tr key={user.id}>
                   <td>{user.id}</td>
                   <td>{user.userName}</td>
                   <td>{user.email}</td>
                   <td>{user.gender}</td>
                   <td>{user.profession}</td>
                  <td>
                 
                <button onClick={()=>props.editUser(user)} 
                    style={{marginBottom:"10px", paddingRight:"24px"}} >
                         Edit </button>  
                    <button onClick={()=>props.deleteUser(user.id)} 
                    style={{backgroundColor:"red"}}>Delete</button> 
                     {/* why it was not working when i was  using props.deleteUser(user.id)*/}
                  </td>
                   
               </tr>
           )
       }
   )):(
       <tr>
           <td colSpan={6}>
               No users to display
           </td>
       </tr>
   )}
  </tbody>
</Table>
       </div>
    )
}

export default UserTable
