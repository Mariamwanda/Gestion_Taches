import { useState } from "react";
import TacheListe from "./tache.jsx";
import "./champ.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faAddressBook, faPlus);


function Todo() {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState(""); // Texte de recherche
  const [filterStatus, setFilterStatus] = useState(""); // Statut à filtrer

  const handleAddOrUpdateTask = () => {
    if (todo && status) {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? { todo, status } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { todo, status }]);
      }
      setTodo("");
      setStatus("");
    }
  };

  const handleEditTask = (index) => {
    setTodo(tasks[index].todo);
    setStatus(tasks[index].status);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleResetFilters = () => {
    setSearch("");
    setFilterStatus("");
  };

  // Filtrage des tâches combiné (recherche + statut)
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.todo.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterStatus ? task.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="Dashbord">
        <div className="flex items-center flex-col gap-8 form">
          <h1 className="text-[#111827] uppercase font-semibold text-2xl">Gestion_Taches</h1>

          {/* Recherche et filtre */}
          <div className="flex justify-center items-center gap-6">
            <input
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Recherche une tâche"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Tous les statuts</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
              <option value="À faire">À faire</option>
            </select>
            <button
              className="h-full px-5 py-2 bg-[#000] text-white font-medium rounded-md"
              onClick={handleResetFilters}
            >
             
              Reprendre
            </button>
          </div>

         
          <div className="flex justify-center items-center gap-6">
            <input
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Entrez nom de la tâche"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <select
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                Sélectionnez un statut
              </option>
              <option value="En attente">En attente</option>
              <option value="En cours...">En cours</option>
              <option value="Terminé">Terminé</option>
          </select>

            <button
              className="h-full px-5 py-2 bg-[#000] text-white font-medium rounded-md"
              onClick={handleAddOrUpdateTask}
            >
              <FontAwesomeIcon className="icon" icon="fa-plus" />  
              {editingIndex !== null ? "Modifier" : "Ajouter"}
            </button>
          </div>

          {/* Liste des tâches */}
          <TacheListe
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default Todo;
