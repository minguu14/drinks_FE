import { ChangeEvent, useEffect, useState } from "react";
import userStore from "../stores/user";
import { useNavigate } from "react-router-dom";

export default function LoginTest() {
    const { loginCheck, getUsers, users } = userStore();
    const [email, setEmail] = useState<string>('');
    const navigate = useNavigate();

const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
}

const login = (email: string) => {
    const loginUser = users.find((u) => u.email === email);
    
    if(loginUser !== undefined){
        loginCheck(loginUser);
        navigate('/');
    }else{
        console.log("해당 유저는 없습니다.");
    }
}

useEffect(() => {
    getUsers();
},[])

  return (
    <form className='ml-[800px] mt-[500px]' onSubmit={(e)=>{e.preventDefault(); login(email);}}>
        <input type="text"
        value={email}
        onChange={handleEmail}
        className='w-[300px] h-[30px] border-4 border-black mr-5'/>
        <button type="submit" className='border-4 border-black'>로그인</button>
    </form>
  )
}
