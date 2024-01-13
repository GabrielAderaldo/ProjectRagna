import { Flex, Input } from "antd";

export default function ragnaInput(props={placeholder:'placeholder',status:'',setMenssageError:'',type:'',onChange:()=>{}}){
    const {placeholder,status,onChange,setMenssageError} = props;
    if(status ===  'error' && setMenssageError != null){
        return(
            <>
                <Flex vertical gap={1} style={{width:'100%'}}>
                    <Input placeholder={placeholder} status={status} onChange={onChange}/>
                    <p style={{color:'red',fontSize:'12px'}}>{setMenssageError}</p>
                </Flex>
            </>
        )
    }
    
    return(
        <>
            <Input placeholder={placeholder} status={status} onChange={onChange}/>
        </>
    )
}