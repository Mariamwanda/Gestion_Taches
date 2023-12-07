// PasswordResetForm.js
import React from 'react';
import './Css/reinit.css'

function Reinitial (){
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div className="bg-white p-8 rounded shadow-md w-96 Reinitial">
      <h2 className="text-2xl  font-semibold mb-4">Réinitialisation du mot de passe</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            Nouveau
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Entrez votre nouveau mot de passe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirmez
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmez votre mot de passe"
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          type="submit"
        >
          Réinitialiser le mot de passe
        </button>
      </form>
    </div>
    </div>
  )
};

export default Reinitial;


