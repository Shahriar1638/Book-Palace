/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
// import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [userInfos, setUserInfos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const removeUser = () => {
        setLoading(true);
        return deleteUser(auth.currentUser);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        setLoading(true);
        setUserInfos(null);
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                axiosPublic.get(`/24141181/currentuser?email=${currentUser?.email}`)
                    .then(response => setUserInfos(response.data))
            }
            console.log("Currently logged in user infos: ", currentUser);
            setUser(currentUser);
            setLoading(false);
        }, error => {
            setErrorMessage(error.message);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [axiosPublic]);
    

    const authInfo = {
        user,
        userInfos,
        loading,
        createUser,
        logInUser,
        logOutUser,
        googleSignIn,
        errorMessage,
        removeUser 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;