// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function Submit({errorMessage, ...props}){
  if(errorMessage==null){
  return <button type="submit" {...props}></button>
  }
  else{
  return <>
  <button type="submit" disabled {...props}></button>
  <p role='alert'>{errorMessage}</p>
  </>
  }
}

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const usernameRef = React.useRef('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  function handleSubmit(event){
    event.preventDefault();
    // const userName = event.target.elements[0].value;
    // const userName = event.target.elements.usernameInput.value;
    // console.log(`username is ${userName}`);
    const userName = usernameRef.current.value;
    onSubmitUsername(userName);

  }

  function handleChange(event){
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setErrorMessage(isValid?null:'Username must be lower case');
    console.log(errorMessage);
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input id='username' type="text" ref={usernameRef} onChange={handleChange} />
      </div>
     <Submit errorMessage={errorMessage}>Submit</Submit>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
