import { useState } from "react";
import TaskList from "../components/tache.jsx";
import './Css/dashboard.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressBook, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faAddressBook, faCheck);


function Dashboard(){
   
  const [todo, setTodo] = useState("");
    return (
        <>
       <div className="Dashbord">
      
      
      <div className="h-screen flex  items-center flex-col gap-8 form">
        <h1 className="text-blue-600 uppercase font-semibold text-2xl">Ma Todo_Liste</h1>
        <div className="flex justify-center items-center gap-6">
          <input
            className="w-72 border-2  rounded-md px-3 py-3 backdrop-blur-lg"
            
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            className="h-full px-5 py-2 bg-[#333] text-white font-medium rounded-md"
            onClick={() => {
            }}
          >
             
            Ajouter
            <FontAwesomeIcon icon="check" />
          </button>
          
        </div>
        <TaskList/>
      </div>
       </div>
      </>
    );
  
}

export default Dashboard;