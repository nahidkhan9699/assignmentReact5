import React ,{useState}from "react";
import { Emp } from "./components/Emp";
import"./components/common.css"

function App() {
  const[Empid,setEmpid]=useState("");
  const[Email,setEmail]=useState("");
  const[Company,setComp]=useState("");
  

  return (
<div className="main">
<input type="number" placeholder="Emp Id"  onChange={(e)=>setEmpid(e.target.value)}/>
      <input type="text" placeholder="Enter Email " onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Enter Company name" onChange={(e) => setComp(e.target.value)} />

      <Emp empid={Empid} email={Email} company={Company}/>
    </div>
  );
}

export default App;
