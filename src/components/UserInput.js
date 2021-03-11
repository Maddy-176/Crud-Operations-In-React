import{useState} from "react"
import  "../style/input.css"
import { useHistory } from "react-router-dom";

function UserInput(props) {

    const userInput={
        id:" ",
        userName: " ",
        email: " ",
        gender:" ",
        profession: " ",
     };
     
     let history = useHistory();

    const [userDetails , setUserDetails]= useState(userInput);

    const handleChange= (event)=>{
        setUserDetails({
            ...userDetails,
            [event.target.name]:event.target.value
        })
    };
    
    const handleSubmit=(event)=>{

        event.preventDefault();
        if(userDetails.userName && userDetails.email && userDetails.gender && userDetails.profession){
            props.addUser(userDetails)
            setUserDetails(userInput)
            history.push("/")
          //return <Redirect to=("/") /> 
        } 
        else{
            alert("Providing All Details are Mandatory")
        }
        
        alert("Your Details have been Submitted")
    };
    
   

    return (
        <div>
           
            
          <h2>Add User Details</h2> 
          <form onSubmit={handleSubmit}>
              <label>
                  Name: 
                  </label>

                  <br/> <br/>
          <input type="text"
           placeholder="Enter Name..."
           name="userName"
           onChange={handleChange}
           value={userDetails.userName}
           />
          <br/> <br/>
          <label>
              Email:
              </label>

              <br/>
              <input type="text" 
              placeholder="Enter Email..."
              name="email"
              onChange={handleChange}
              value={userDetails.email}

              />
          <br/> <br/>

          <label>
              Gender:
              </label>
              <br/>
              <input type="text" 
               placeholder="Enter Gender..."
               name="gender"
               onChange={handleChange}
               value={userDetails.gender}
               />
         
          <br/> <br/>
          <label>
              Profession:
              </label>

              <br/>
              <input type="text"
               placeholder="Enter Profession..."
               name="profession"
               onChange={handleChange}
               value={userDetails.profession}
               />
                 
                   <input type="submit" value="Add User" />

          </form>
         
                   

        
        </div>
    )
}

export default UserInput
