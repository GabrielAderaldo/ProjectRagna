import { createContext, useEffect,useState } from 'react';
import FirebaseConfig from '../database/firebase/firebase.config.js';
export const FirebaseContext = createContext({});
export default function FirebaseProvider({children}){
    const [firebase,setFirebase] = useState(null);
    function firebaseInit(){
        const { app,analytics,auth } = FirebaseConfig();
        setFirebase({app,analytics,auth});
    }
    useEffect(()=>{
        firebaseInit();
    },[])
    return(
        <FirebaseContext.Provider value={{firebase}}>
            {children}
        </FirebaseContext.Provider>
    )
};