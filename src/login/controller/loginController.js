import { emailRegex,strongPassRegex } from "../../regex/regex"


export const emailError = (email) => {
    if(email === null || email === undefined || email === ''){
        return 1
    }else if(emailRegex(email)){
        return 2
    }else{
        return 0
    }
}

export const passwordError = (password) => {
    if(password === null || password === undefined || password === ''){
        return 1
    }else if(password.length < 8){
        return 2
    }else if(!strongPassRegex(password)){
        return 3
    }else{
        return 0
    }
}
