import Dbinit from '../../database/databaseInit.js';
class LoginController{
    constructor(){
        this.db = new Dbinit();
    }

    login(login,pass){
       this.db.createNewUser(login,pass);
    }
    register(){}

}

export default LoginController;