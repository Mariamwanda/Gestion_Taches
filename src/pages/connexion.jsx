import React from 'react';
import { Link } from 'react-router-dom';
import "./Css/connexion.css"

const Connexion = () => {
  return (
    <div className="Connexion">
    <h2 className="text-3xl text-center">Connexion</h2>
    <form>
      <div className="input-group mb-5">
        <input type="email" name="email" id="email" placeholder="email"/>
      </div>
      <div className="input-group mb-6">
        <input className='mb-3' type="password" name="password" id="password" placeholder="mot passe"/>
        <div className="oublié">
          <Link to="/reinitial">Mot de passe oublié ?</Link>
        </div>
      </div>
      <button className=" mb-4"><Link to="/dashboard">Connexion</Link></button>
    </form>
    <p className="signup text-xl">Vous avez un Compte?
      <Link to="/inscription" className="text-xl">Créer un</Link>
    </p>
  </div>
  );
};

export default Connexion;
