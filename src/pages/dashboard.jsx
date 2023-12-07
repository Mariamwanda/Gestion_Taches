import Todo from '../components/todo';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faRightFromBracket,faBell,faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faRightFromBracket,faBell,faTableColumns);

function Dashboard(){
    return(
        <>
        <body class="flex bg-gray-100 min-h-screen">
  <aside class="hidden sm:flex sm:flex-col">
    <div class="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
      <nav class="flex flex-col mx-4 my-6 space-y-4">
        <a href="#" className="inline-flex items-center justify-center py-3  text-[#a78bfa] rounded-lg">
        <FontAwesomeIcon className="icon" icon="fa-solid fa-table-columns" />
          <span className="">Dashboard</span>
        </a>
      </nav>
      <div class="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
        <button class="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
          <button className=" text-[#a78bfa] relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <FontAwesomeIcon className="icon" icon="fa-solid fa-right-from-bracket" />
          Deconnexion
          </button>
        </button>
      </div>
    </div>
  </aside>
  <div class="flex-grow text-gray-800">
    <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
      <div class="flex flex-shrink-0 items-center ml-auto">
        <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
          <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span class="font-semibold text-[#a78bfa]">Wandaogo Mariam</span>
            <span class="text-sm text-gray-600">Connecté</span>
          </div>
          
        </button>
        <div class="border-l pl-3 ml-3 space-x-1">
          <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
            <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            
          </button>
        
        </div>
      </div>
    </header>
    <main class="p-6 sm:p-10 space-y-6">
    <Todo/>
      
    </main>
  </div>
</body>
        </>
    )
}

export default Dashboard;