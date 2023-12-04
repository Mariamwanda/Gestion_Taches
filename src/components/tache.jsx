import React from "react";
import "./../pages/Css/tache.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressBook, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faAddressBook, faCheck);

function TacheListe () {
  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-blue-600 uppercase font-semibold text-2xl">Liste Taches</h1>
      <div className="w-1/2 bg-gray-100 backdrop-blur-lg px-3 py-5 rounded-md tache">
          <div className="flex justify-between items-center mb-5">
            <li className="list-none w-2/3 text-left break-normal">tache 1</li>
            <div className="flex gap-3">
                <button className="bg-blue-600 text-[#fff] px-2 py-2 font-medium rounded-md">
                <FontAwesomeIcon icon="check" />
                  modifier
                </button>
                <button className="bg-[red] text-[#fff] px-2 py-2 font-medium rounded-md">supprimé</button>
            </div>
          </div>
      </div>
    </div>
  );
};
export default TacheListe;