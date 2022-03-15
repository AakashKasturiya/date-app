import Header from './Components/Header';
import Dates from './Components/Dates';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

/* Difference Between Two Dates */
  return (
   
    <>
      <header className="App-header" >
      <Header/>  
        </header>
      <main className="container">
      <h1 className="App-title">Welcome to Calender</h1>
      <Dates/>
      </main>
</>
 
  
  );
}

export default App;
