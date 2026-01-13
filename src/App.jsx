import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { URL } from './constants.js'
import './App.css'
import Answers from './components/Answers.jsx'

function App() {

  const [question, setQuestion] = useState("")  
  const [result,setResult] = useState("")

  const payload = {
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }
  const askQuestion = async() => {

    let response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    let data = await response.json();
    let rawText = data.candidates[0].content.parts[0].text;
    // 1. Pehle pure text se saare '*' hata dein (Regex use karke)
    let cleanText = rawText.replace(/\*/g, ""); 
    // 2. Phir line breaks ya full stops ke basis par split karein 
    // (Kyunki ab '*' toh raha nahi split karne ke liye)
    let dataArray = cleanText.split("\n").filter(item => item.trim() !== "");
    console.log(dataArray);
    // console.log(data.candidates[0].content.parts[0].text);
    setResult(dataArray);

  }
  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>
      </div>
      <div className='col-span-4 p-10'>
        <div className='container h-120'>
          <div className='text-white'>

            <ul>
              {result && result.map((ans,index) => (
                <li key={index}>
                  <Answers ans={ans} index={index} />
                </li>
              ))}
            </ul>
            
             </div>
        </div>
        <div className='bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl border border-zinc-700 flex h-16'>
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className='w-full h-full p-3 outline-none ' placeholder='Ask me' />
          <button onClick={askQuestion} className="cursor-pointer">Ask</button>
        </div>
      </div>
    </div>
  )
}

export default App
