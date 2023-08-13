
import React from "react";
import './../styles/App.css';
import Form from './Form'

const App = () => {
  let list=[{name:'Name',type:'text',label:'Name'},{name:'Email',type:'email',label:'Email'},{name:'Password',type:'password',label:'Password'}]
  function onSubmit(event){
    event.preventDefault()
    let c=document.getElementsByTagName('input')
   console.log({name:c[0].value,email:c[1].value,password:c[2].value})
  }
  return (
    <div>
        {<Form list={list} onsubmit={onSubmit}/>}
    </div>
  )
}

export default App
