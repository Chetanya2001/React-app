import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import TextForm from './components/TextForm';
function App() {
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';

    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
 <NavBar title="React" mode = {mode} toggleMode = {toggleMode}></NavBar>
     <div className="container">
      <TextForm mode={mode}></TextForm>
     </div>
    </>
  );
}

export default App;
