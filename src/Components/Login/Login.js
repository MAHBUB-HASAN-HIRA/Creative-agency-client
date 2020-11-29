import React, { useContext } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import siteLogo from '../../creative-agency-resources/images/logos/logo.png';
import googleIcon from '../../creative-agency-resources/images/google.png';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const {loggedInUser, setLoggedInUser, isAdmin} = useContext(UserContext)
    
    const history = useHistory();
    const location = useLocation();
  
    const { from } = location.state || { from: { pathname: isAdmin ? '/admin/serviceList' : '/dashboard/serviceList'} };

  const handleGoogleSignIn = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setLoggedInUser(signedInUser);
            sessionStorage.setItem(`userInfo`, JSON.stringify(signedInUser));
            storeAuthToken();
            history.replace(from);
          })
          .catch(error => alert(error.message));
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    const handleSignOut = () => {
         firebase.auth().signOut()
            .then(res =>  {
                    const signOutUser ={
                    name:null,
                    email:null,
                    isSignIn:false,
                    photo:null,
                };
                setLoggedInUser(signOutUser);
                sessionStorage.setItem('token','');
                sessionStorage.setItem(`userInfo`, JSON.stringify(signOutUser));
            })
        }


    return (
        <div className='login_container'>
            <div className='container col-sm-6 col-md-8 col-lg-6 '>          
                <div className='col-sm-10 col-md-8 col-lg-6 logo_container'>
                    <Link to='/'><img className='tree_img_logo' src={siteLogo} alt=""/></Link>
                </div>
                <div className='popupSignInContainer'>
                   { 
                        loggedInUser.isSignIn ?
                        <button onClick={handleSignOut} className='btn_brand'>Log Out</button>
                        :
                        <>
                        <h3>Login With</h3>
                        <div onClick={handleGoogleSignIn} className='popupSignIn'>
                            <img src={googleIcon} alt="sign in with google"/>
                            <p className='continue'>Continue with Google</p>
                        </div>
                        <p>Don't Have a Account? <Link onClick={handleGoogleSignIn} to='#'>Create an Account</Link></p>
                        </>
                   }
                </div>
            </div>
       </div>
    );
};

export default Login;