import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
    <EventBind />

{/* {<Greet name="Bruce" heroName="baty" />} */}
     {/* <Greet name="Clark" heroName="batman" > <p>This is greet props</p>
     <button>action</button></Greet>
     <Welcome heroName="batman" />  } */}
     {/* <Hello /> */}
     {/* <Message /> */}
     {/* <Counter /> */}
     {/* <FunctionClick /> */}
     
    </div>
  );
}

export default App;
