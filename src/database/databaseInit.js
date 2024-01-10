import { FirebaseConfig } from "./firebase/firebase.config.js";

class DataBaseInit {    
    db
    constructor(){
        this.db = new FirebaseConfig();
    }

    createCollection(){
        //TODO
    }

    //createUser(login,pass)
    //login(login,pass)
    //logout()
    //deleteUser()
    //updateUser()
    //createCharacter()
    //deleteCharacter()
    //updateCharacter()
    
}