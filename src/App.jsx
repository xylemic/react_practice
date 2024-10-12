import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './components/Toggle/Toggle'
import Todo from './components/Todo/Todo'

function App() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   age: '',
  //   email: '',
  //   password: ''
  // })

  // const [submittedData, setSubmittedData] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setSubmittedData(formData)
  //   setFormData({ name: '', age: '', email: '', password: '' })
  // }

  return (
    <>
      {/* <input 
      type="text"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      placeholder="Name"
      />
      <input 
      type="number"
      value={formData.age}
      onChange={(e) => setFormData({...formData, age: e.target.value })}
      placeholder="Age"
      />
      <input 
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({...formData, email: e.target.value })}
      placeholder="Email"
      />
      <input 
      type="password"
      value={formData.password}
      onChange={(e) => setFormData({...formData, password: e.target.value })}
      placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )} */}
      {/* <Toggle /> */}
      <Todo />
    </>
  )
}

export default App
