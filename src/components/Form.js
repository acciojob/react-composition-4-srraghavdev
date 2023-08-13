import React from 'react'

let Form = (props)=>{
    console.log(props.list) 
    return(
        <form onSubmit={props.onsubmit}>
            {   
                props.list.map(element=>{
                   return (<div>
                    <label>{element.label}</label>
                    <input type={element.type} name={element.name}></input> 
                    </div>)
                })
            }
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form