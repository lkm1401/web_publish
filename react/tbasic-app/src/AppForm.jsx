import React, { useState } from "react";
import './App.css'

export default function AppForm(){
  const [form, setForm] = useState({name:'',email:''});

  const handleChange = (event) => {
    const {name, value} = event.target; 
    setForm({...form, [name]:value});
    //이름은 10자 이내로 작성가능
    // if(form.name.length >= 10){
    //   alert('이름은 10자 이내로 작성해주세요');
    // }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input type="text" name="name" id="name" value={form.name} onChange={handleChange}/>
      <label htmlFor="email">이메일</label>
      <input type="text" name="email" id="email" value={form.email} onChange={handleChange}/>
      <button>전송</button>
    </form>

  );
}
