import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressBook, faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCoffee, faAddressBook, faPlus,faTimes,faSearch);
import { faEdit, faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Essaie() {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [showSearchForm, setShowSearchForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    if (showForm) {
      setEditIndex(null);
    }
  };

  const handleAddTask = () => {
    if (todo.trim() && status) {
      const createdAt = new Date();
      const newTask = { 
        todo, 
        status, 
        createdAt: {
          date: createdAt.toLocaleDateString(),
          time: createdAt.toLocaleTimeString()
        }
      };
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? newTask : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setTodo("");
      setStatus("");
      setShowForm(false);
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTodo(taskToEdit.todo);
    setStatus(taskToEdit.status);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchStatusChange = (e) => {
    setSearchStatus(e.target.value);
  };

  const handleResetSearch = () => {
    setSearchText("");
    setSearchStatus("");
  };

  const toggleSearchForm = () => {
    setShowSearchForm((prev) => !prev);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.todo.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchStatus === "" || task.status === searchStatus)
    );
  });

  return (
    <div className="Dashbord">
      
      <div className="flex justify-between mb-4 px-4">
      
      <button
            onClick={toggleForm}
            className="bg-[#333] text-[orange] py-2 px-4 rounded-md transition flex items-center gap-2"
          >
            <FontAwesomeIcon
              className="icon"
              icon={showForm ? "fa-times" : "fa-plus"}
            />
            {showForm ? " " : "Ajouter une tâche"}
       </button>
       <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
  <FontAwesomeIcon
    icon="fa-search"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
  />
        <input
          type="text"
          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="Recherche une tâche"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>

        <button
          onClick={toggleSearchForm}
          className=" bg-yellow-500 text-white py-2 px-4 rounded-md text-[#333] transition"
        >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          {showForm ?  " " : " Statut"}
        </button>
      </div>
      <h1 className="uppercase font-semibold text-center text-[#333] text-2xl mb-4">Liste des Tâches</h1>

      {showForm && (
        <div className="mt-4 p-4 max-w-md mx-auto border rounded-md shadow-md bg-gray-50">
          <div className="flex flex-col gap-4">
            <input
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Entrez nom de la tâche"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <select
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                Sélectionnez un statut
              </option>
              <option value="En attente">En attente</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
            </select>
            <button
              onClick={handleAddTask}
              className="ajout text-white py-2 px-4 rounded-md transition"
            >
              {editIndex !== null ? "Modifier" : "Ajouter"}
            </button>
          </div>
        </div>
      )}

      {showSearchForm && (
        <div className="mt-4 p-4 max-w-md mx-auto border rounded-md shadow-md bg-gray-50">
          <div className="flex flex-col gap-4">
           
            <select
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={searchStatus}
              onChange={handleSearchStatusChange}
            >
              <option value="">Sélectionner un statut</option>
              <option value="En attente">En attente</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
            </select>
            <button
              onClick={handleResetSearch}
              className="ajout bg-gray-500 text-white py-2 px-2 rounded-md transition"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      )}

      {/* Affichage sous forme de tableau avec date et heure séparées */}
      <table className="table-auto w-full mt-2 border-collapse">
        <thead>
          <tr>
            <th className="border text-[orange] px-4 py-2">Tâche</th>
            <th className="border text-[orange] px-4 py-2">Statut</th>
            <th className="border text-[orange] px-4 py-2">Date</th>
            <th className="border text-[orange] px-4 py-2">Heure</th>
            <th className="border text-[orange] px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">Aucune tâche ajoutée.</td>
            </tr>
          ) : (
            filteredTasks.map((task, index) => (
              <tr key={index}>
                <td className="border text-[#333] px-4 py-2">{task.todo}</td>
                <td className="border text-[#333] px-4 py-2">{task.status}</td>
                <td className="border text-[#333] px-4 py-2">{task.createdAt.date}</td>
                <td className="border text-[#333] px-4 py-2">{task.createdAt.time}</td>
                <td className="border text-[#333] px-4 py-2 flex gap-4 justify-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleEditTask(index)}
                  >
                    <FontAwesomeIcon className="icon" icon={faEdit} /> 
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <FontAwesomeIcon className="icon" icon={faTrashCan} /> 
                     Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Essaie;
