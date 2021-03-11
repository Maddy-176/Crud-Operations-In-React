import{useState,useEffect} from "react"
import  "../style/input.css"
import {Container, Row,Col} from "react-bootstrap"
import UserTable from "./UserTable";
import { withRouter } from "react-router";

function EditUserInput(props) {
    const [user, setUser]= useState();

     useEffect(() => {
         setUser(props.currentUser)
       },[props]) //why removing ,[props] does not allow me to edit the details




    const handleChange= (event,param)=>{
        console.log("param",[param])

        setUser({
            ...user,
           //[event.target.name] :event.target.value
         // name:event.target.value
         [param]:event.target.value
        })

    };
    
    const handleSubmit=(event)=>{
        //console.log("userInput", user)
       event.preventDefault();
        if(user.userName && user.email && user.gender
             && user.profession)
            
              {props.updateUser(user.id,user)  
              }
        
        
    };
    
   

    return (
        <div>
             
       { user &&(<div>
        <h2>Edit User Details</h2> 
          <form onSubmit={handleSubmit}>
              <label>
                  Name: 
                  </label>

                  <br/> <br/>
          <input type="text"
           placeholder="Enter Name..."
           name="userName"
           onChange={(event)=>handleChange(event,"userName")}
           defaultValue={user.userName}
           />
          <br/> <br/>
          <label>
              Email:
              </label>

              <br/>
              <input type="text" 
              placeholder="Enter Email..."
              name="email"
              onChange={(event)=>handleChange(event,"email")}
              value={user.email}

              />
          <br/> <br/>

          <label>
              Gender:
              </label>
              <br/>
              <input type="text" 
               placeholder="Enter Gender..."
               name="gender"
               onChange={(event)=>handleChange(event,"gender")}
               defaultValue={user.gender}
               />
         
          <br/> <br/>
          <label>
              Profession:
              </label>

              <br/>
              <input type="text"
               placeholder="Enter Profession..."
               name="prof"
               onChange={(event)=>handleChange(event,"profession")}
               value={user.profession}
               />
                 
                   <button type="submit" onClick={handleSubmit} > Update User  </button>
                   <button type="submit" onClick={()=>props.setEditing(false)}  > Cancel </button>


          </form>

       </div>)}    
            
         
         
                   
       
        
        </div>
    )
}

export default EditUserInput;
