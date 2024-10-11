import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import TextForm from './components/TextForm';
function App() {
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
 <NavBar title="React" mode = {mode} toggleMode = {toggleMode}></NavBar>
     <div className="container">
      <TextForm></TextForm>
     </div>
    </>
  );
}

export default App;
