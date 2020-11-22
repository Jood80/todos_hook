import React from 'react'

const { useState }=React

const useTaskValue = (initialValue) => {
  
  const [task, setTask] = useState(initialValue);

  return {
    task,
    onChange: (e) =>setTask(e.target.value),
    resetValue: ()=> setTask("")
}
}


const Form = ({onSubmit}) => {
  const { resetValue, ...text } = useTaskValue("");
  console.log({text});
  console.log(text.task);
      return (
        <form onSubmit={(e) => {
          e.preventDefault()
          onSubmit(text.task)
          resetValue()
        }} > 
          <input {...text}/>    
      </form>
    ) }


export default Form;







// import React from 'react';

// const {useState}= React

// const useInputValue = (intialValue) => {
  
//   const [task, setTask] = useState(intialValue)
//   return {
//     task, 
//     onChange: () => setTask(task),
//     resetInput: ()=> setTask("")
//   }
// }


// const Form =({onSubmit}) => {
//   const { resetInput, ...task } = useInputValue('')
 
//   return (
//     <form onSubmit={(e) => {
//           e.preventDefault()
//           onSubmit(...task)
//         }} >
//           <input type='text' placeholder="enter your task  over here"/>
//           <button>ADDD it</button>
//     </form>
//   )
// }
   
// export default Form;







