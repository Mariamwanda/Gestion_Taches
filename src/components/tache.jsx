import React from "react";
import "./liste.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTrashCan, faEdit);

function TacheListe({ tasks, onEdit, onDelete }) {
  return (
    <div className="Liste w-full text-center flex items-center flex-col gap-5">
      <h1 className=" uppercase font-semibold text-2xl">Liste des Tâches</h1>
      <div className="px-100 p-3 rounded-md tache">
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center mb-5">
            <li className="list-none w-3/3 text-right text-blue">
              {task.todo}<span className="A"><FontAwesomeIcon className="icon" icon={faArrowRight} /></span><span className="px-2"> {task.status}</span>
            </li>
            <div className="flex gap-6">
              <button
                className="bg-blue-600 text-[#fff] px-2 py-2 font-medium rounded-md"
                onClick={() => onEdit(index)}
              >
                <FontAwesomeIcon className="icon" icon="fa-edit" />
                Modifier
              </button>
              <button
                className="bg-[#EF4444] text-[#fff] px-2 py-2 font-medium rounded-md"
                onClick={() => onDelete(index)}
              >
                <FontAwesomeIcon className="icon" icon="fa-solid fa-trash-can" />
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TacheListe;
