import React,{useState} from 'react'
import { Container,Button } from 'react-bootstrap'
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css'
import './bootstrap.min.css'
const App = () => {
  const [text, setText] = useState("");
  const {speak} = useSpeechSynthesis();
  return (
    <Container className="speech">
    <div className='group'>
      <h2>Text to Speech Converter Using ReactJs</h2>
    </div>
    <div className='group'>
      <textarea rows={10} onChange={(e)=>setText(e.target.value)} value={text} placeholder="Type Here..." ></textarea>
    </div>
    <Button variant="info" className='btn' onClick={()=>speak({text:text})}>Speech</Button>

    </Container>
  )
}

export default App