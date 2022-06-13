import './App.css';
import { useState } from 'react';
import Service from '../Service/Service'
function App() {
  // const [question,setQuestion] = useState('');
  const [result, setResult] = useState([])

  // get request by clicking the button
  const handleSubmit= async (e)=>{
      e.preventDefault()
      const url='http://jservice.io/api/random'

       
    
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setResult(data)

    }
    catch{
console.log('amira this is catch')
    }
  }
  return (
    <div className="App">
    <h1>welcome to jeoprady</h1>
<form onSubmit={handleSubmit}>
  <button>Get Question </button>
  </form>     
   <Service result={result} />

    </div>
    
  );

}


export default App;
