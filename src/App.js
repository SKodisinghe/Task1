import React, {useState} from 'react';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 100));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

  const run = () => {
    
    if(updatedS === 10){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 10){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0})
  };

  const resume = () => start();


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <h2>Timer 1</h2>
               <span>{(time.m >= 10)? time.m : "0"+time.m}</span>:&nbsp;&nbsp;
               <span>00</span>.&nbsp;&nbsp;
               <span>00</span>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
      
     <div className="clock-holder">
          <div className="stopwatch">
               <h2>Timer 2</h2>
               <span>00</span>:&nbsp;&nbsp;
               <span>{(time.s >= 10)? time.s : "0"+time.s}</span>.&nbsp;&nbsp;
               <span>00</span>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
      
     <div className="clock-holder">
          <div className="stopwatch">
               <h2>Timer 3</h2>
               <span>00</span>:&nbsp;&nbsp;
               <span>00</span>.&nbsp;&nbsp;
               <span>{(time.ms >= 10)? time.ms : "0"+time.ms}</span>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
      
   
          <div className="stopwatch">
               <h2>Total Timer</h2>
               <span>{(time.m >= 10)? time.m : "0"+time.m}</span>:&nbsp;&nbsp;
               <span>{(time.s >= 10)? time.s : "0"+time.s}</span>.&nbsp;&nbsp;
               <span>{(time.ms >= 10)? time.ms : "0"+time.ms}</span>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          
     </div>
     
    </div>
      
      
  
     
 
  );
}


export default App;
