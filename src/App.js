import UserInput from "./components/UserInput"
import {Container, Row,Col} from "react-bootstrap"
import UserTable from "../src/components/UserTable"
import {useState} from "react"
import EditUserInput from "../src/components/EditUserInput"
import React from "react"
import {  
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  } from "react-router-dom"
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

function App(props) {

  const initialFormState={
    id:null,
    userName: " ",
    email: " ",
    gender:" ",
    profession: " ",
 };
const [userDetails, setUserDetails]=useState([]);
const [editing,setEditing]=useState(false);
const [currentUser, setCurrentUser] = useState(initialFormState);
const history = useHistory();


 {/* Adding a User*/}

 const addUser=(user)=>{
  user.id=userDetails.length+1;
  setUserDetails([...userDetails,user])   // why do i explicitly need to create an addUser function  . why it does not get added through handle change
}

{/* Deleting the user */}

const deleteUser=(id)=>{
  setUserDetails(userDetails.filter(user=>user.id!==id));
};

{/* Updating the UserDetails */}

const editUser=(user)=>{

  setEditing(true);
  let obj={
    id:user.id,
    userName:user.userName,
    email:user.email,
    gender:user.gender,
    profession:user.profession
  }
  setCurrentUser({id:user.id,
    userName:user.userName,
    email:user.email,
    gender:user.gender,
    profession:user.profession
  } );
  history.push("/Update-Person");
};

const updateUser=(id,updatedUser)=>{
  setEditing(false);

  setUserDetails(userDetails.map(user=>
    (user.id===id ? updatedUser:user)))
    return history.push("/")
};


  return (
    <div className="App">
     
  
      
        <Link to="/"> Home &nbsp;&nbsp;&nbsp; </Link>
        
        <Link to="/Add-Person"> {" "}Add Person</Link>
        
        
      <br/>
    <Switch>
       
      <Route path="/Add-Person" component={props=><UserInput addUser={addUser} />}/>
      <Route exact path ="/" render={()=>(
      <React.Fragment>
        <UserTable
     userDetails={userDetails}
     deleteUser={deleteUser}
     editUser={editUser}
     />
      
      </React.Fragment>
      )}
      />
    <Route path="/Update-Person"
    component={(props)=>(
      <EditUserInput
      setEditing={setEditing}
      currentUser={currentUser}
      updateUser={updateUser}
      />
    )}
    />  
       

    </Switch>
  

   
          {/*
          {editing ? (
            <div>

              <EditUserInput
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
              />
            </div>
          ): (
            <div>
          <UserInput
             addUser={addUser}
           />
            </div>
          )
          }


     </Col> */}
    
    
     <br/>
     {/* <UserTable
     userDetails={userDetails}
     deleteUser={deleteUser}
     editUser={editUser}
     /> */}

        {console.log("userDetails",userDetails)}
    </div>
  );
}

export default withRouter(App);
