import React, {useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);




function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] =useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:''
  })
  const [loggedInUser,setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, photoURL, email} =res.user;
      const signedinuser ={
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURL
      }
      setUser(signedinuser);
      console.log(displayName, email, photoURL);
    })
    .catch(err => {
      console.log(err);
      console.log(err.message)
    })
  }



  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider)
    .then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    console.log(user);

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
  });
  }


  const handleSignOut = () =>{
    firebase.auth().signOut()
    .then(res =>{
      const signedoutuser={
        isSignedIn:false,
        name:'',
        email: '',
        photo:'',
        error:'',
        success: false
      }
      setUser(signedoutuser);
    })
  }
  const handleChange = (e) => {
    let isFormValid= true;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;

    }
    if(isFormValid){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if( newUser &&  user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // var user = userCredential.user;
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success=true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch((error) => {
        const newUserInfo = {...user};
        newUserInfo.error=error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    // const user = userCredential.user;
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success=true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo);
    history.replace(from);
    console.log(' hgbjkhbvkeblk', userCredential.user);
  })
  .catch((error) => {
    const newUserInfo = {...user};
    newUserInfo.error=error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });
    }


    e.preventDefault();
  }
  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
        console.log('user name updated correctly');
    }).catch(function(error) {
        console.log(error);
    });
  }
  return (
    <div style={{textAlign:'center', border:'1px solid black', width:'60%', marginLeft:'260px'}}>
      <h1>Create your Account</h1>
      <form onSubmit={handleSubmit}>
        {newUser && <input name='name' onBlur={handleChange} type="text" placeholder='Name'/>}
        <br/>
      <input type="text" onBlur={handleChange} name="email" placeholder="Email Address" required />
        <br/>
        <input type="password" onBlur={handleChange} name="password" id="" placeholder="Password" required/>
          <br/>
          <input type="password" onBlur={handleChange} name="password" id="" placeholder='Confirm Password'/>
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
      </form>
      <input type="checkbox" name="newUser" onClick={() => setNewUser(!newUser)} id=""/>
      <label htmlFor="newUser">Are you New User!! if click here</label>   
       <br/>
       <br/>
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
        <button className='btn btn-primary' onClick={handleSignIn}>Sign In</button>
        }
        <br/>
        <br/>
        <button className='btn btn-primary ' onClick={handleFbSignIn}>Sign in using facbook</button>
        <br/>
        <br/>
        <p style={{color:'red'}}>{user.error}</p>
        {user.success &&  <p style={{color:'green'}}>User {newUser ?'created':'logged in'} successfully</p> }
    </div>
    
  );
}

export default Login;
