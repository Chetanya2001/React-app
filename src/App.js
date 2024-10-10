import './App.css';
import NavBar from './components/navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
 <NavBar title="React"></NavBar>
     <div className="container">
      <TextForm></TextForm>
     </div>
    </>
  );
}

export default App;
