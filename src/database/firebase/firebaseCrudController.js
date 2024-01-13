import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import  firebaseConfig  from "../firebase/firebase.config.js";

export function userCreate(user){
    const {auth} = firebaseConfig();
    const userCreate = createUserWithEmailAndPassword(auth, user.login, user.password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
    });
}

export function userRead(user){
    const {auth} = firebaseConfig();
    return signInWithEmailAndPassword(auth, user.login, user.password)
}
export function userUpdate(){}
export function userDelete(){}

