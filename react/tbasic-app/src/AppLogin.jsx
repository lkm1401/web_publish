import React, { useState } from "react";

export default function AppLogin(){
  const [form, setForm] = useState({id:'', pass:''});

  const handleLoginChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value});
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(form);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">아이디 : </label>
      <input 
          type="text" 
          name="id" //서버연동 
          id="id" //자바스크립트 체크
          value={form.id}
          onChange={handleLoginChange}
        />
      <label htmlFor="pass">패스워드 : </label>
      <input 
          type="password" 
          name="pass" 
          id="pass"
          value={form.pass}
          onChange={handleLoginChange}
        />
      <button type="submit">Login</button>
    </form>
  );
}