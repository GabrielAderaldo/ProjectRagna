import { Button, Checkbox, Flex, Input, Layout, Radio } from 'antd'
import LoginController from '../controller/loginController.js'
import { FaDiscord,FaGoogle } from "react-icons/fa";
import Db from '../../database/databaseInit.js'

function Login(){
    
    let colorsArray = ['#007ff4','#0d2a4c','#181c32','#10395a']
    const db = new Db();
    const loginStore = new LoginController();
    
    return(
    <>
    <Layout style={{background:'linear-gradient(90deg, rgba(13,42,76,1) 35%, rgba(25,34,84,1) 100%)',width:'100%',height:'100vh'}}>
        <Layout style={{backgroundColor:'whitesmoke',borderRadius:'20px', margin:'20% 8% 40%'}}>
            <Flex vertical align='center' gap={24} style={{padding:'20px 16px'}}>
                <h1>[Insira um nome aqui]</h1>
                <Input size='large' placeholder='Login' type='email'/>
                <Input size='large'placeholder='password' type='password'/>
                <Flex gap={24} align='baseline' justify='space-between' style={{width:'100%'}}>
                    <Checkbox style={{color:'gray'}}>Lembrar-me</Checkbox>
                    <Button type='text'  style={{color:'#10395a'}}><span style={{ textDecoration:'underline'}}>Esqueceu sua senha?</span></Button>
                </Flex>
                <Button type='default' size='large' shape='round' style={{color:'white',backgroundColor:'#10395a',width:'100%'}} onClick={()=>loginStore.login("gaderaldo","tomate98")}>Login</Button>
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