import { Button, Checkbox, Flex, Input, Layout, Radio } from 'antd'
import { FaDiscord,FaGoogle } from "react-icons/fa";
import { useState } from 'react'
import { userRead } from '../../database/firebase/firebaseCrudController';
import RagnaInput from '../../components/inputs/ragnaInput';
function Login(){

    
    let colorsArray = ['#007ff4','#0d2a4c','#181c32','#10395a']
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorLogin,setErrorLogin] = useState('');
    const [errorPass,setErrorPass] = useState('');
    const [statusLogin,setStatusLogin] = useState('');
    const [statusPass,setStatusPass] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    //TODO: PASSAR ISSO PARA UMA CANTO ESPECIFICO PARA ISSO
    const emailRegex = (email) =>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) return true;
        return false
    }

    const strongPassRegex = (password) =>{
        const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (strongPassRegex.test(password)) return true;
        return false
    }
    /// ---------------------------------------------

    const login = () =>{
        setIsLoading(true)
        if (!emailRegex(email)) {
            setErrorLogin('O email deve está no padrão correto')
            setStatusLogin('error')
            setIsLoading(false)
            
        }

        if (!strongPassRegex(password)) {
            setErrorPass('sua senha não pode ser vazia')
            setStatusPass('error')
            setIsLoading(false)
           
        }

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    
    return(
    <>
    <Layout style={{background:'linear-gradient(90deg, rgba(13,42,76,1) 35%, rgba(25,34,84,1) 100%)',width:'100%',height:'100vh'}}>
        <Layout style={{backgroundColor:'whitesmoke',borderRadius:'20px', margin:'20% 8% 40%'}}>
            <Flex vertical align='center' gap={24} style={{padding:'20px 16px'}}>
                <h1>[Insira um nome aqui]</h1>
                <RagnaInput size='large' placeholder='Login' status={statusLogin} setMenssageError={errorLogin} type='email' onChange={handleEmail} />
                <RagnaInput size='large'placeholder='password' status={statusPass} setMenssageError={errorPass} type='password' onChange={handlePassword} />
                <Flex gap={24} align='baseline' justify='space-between' style={{width:'100%'}}>
                    <Checkbox style={{color:'gray'}}>Lembrar-me</Checkbox>
                    <Button type='text'  style={{color:'#10395a'}}><span style={{ textDecoration:'underline'}}>Esqueceu sua senha?</span></Button>
                </Flex>
                <Button type='default' size='large' shape='round' style={{color:'white',backgroundColor:'#10395a',width:'100%'}} loading={isLoading} onClick={login}>Login</Button>
                <Button type='link'>Register</Button>
                <span style={{color:'grey'}}> Pode ainda logar com </span>
                <Flex gap={24} justify='space-around' align='baseline' style={{width:'100%'}}>
                    <Button type='default' shape='round' size='large' style={{borderColor:'red'}}><FaGoogle/><span style={{padding:'0 10px'}}>FACEBOOK</span></Button>
                    <Button type='default' shape='round' size='large' style={{borderColor:'blueviolet'}} ><FaDiscord/><span style={{padding:'0 10px'}}>DISCORD</span></Button>
                </Flex>               
            </Flex>
        </Layout>
    </Layout>
    </>
    )
}

export default Login;