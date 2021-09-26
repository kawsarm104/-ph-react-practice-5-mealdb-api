
// import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
// import Test from './test';

// import Navbar from './components/navbar/Navbar';

function App() {
  // const [state, setstate] = useState(0)
  return (
    // <div className="App">
    <div className="">
      {/* <span>state counter {state}</span> */}
      {/* <Test /> */}
      <Header />
      {/* <Navbar /> */}
      <Meals />
    </div>
  );
}

export default App;
