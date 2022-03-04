import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();
const useFirebase = () => {
    const[user,setUser]=useState({});
    // console.log(user.email);
    const [authError, setAuthError] = useState('');
    const [isLoading ,setIsLoading]=useState(true);
    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn =()=>{
        setIsLoading(true)
        return (signInWithPopup(auth,googleProvider)
       .catch(error=>{setAuthError(error.message)})
        .finally(()=>setIsLoading(false))
        )
    }
    const logOut =()=>{
        signOut(auth)
        .then(() => {
          // Sign-out successful.
        }).catch(error=>{
            // An error happened.
        }).finally(()=>setIsLoading(false))

    }
    useEffect(()=>{
    const unsubscribed =onAuthStateChanged(auth , user =>{
        if(user){
            // console.log('inside state changed',user);
            setUser(user)
        }else{
            setUser({})
        }
        setIsLoading(false);
    })
    return ()=> unsubscribed
    },[auth])
  

    return {
        
        user,
        isLoading,
        authError,
        logOut,
        handleGoogleSignIn,
    }
};

export default useFirebase;