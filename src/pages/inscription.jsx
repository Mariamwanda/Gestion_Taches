import { Link } from "react-router-dom";
import "./Css/inscris.css"
  export function Inscription() {
    return (
      <div className="Inscription">
      <h2 className="text-3xl text-center">Inscription</h2>
      <form>
        <div className="input-group mb-5">
          <input type="text" name="nom" id="nom" placeholder="nom & prenom"/>
        </div>
        <div className="input-group mb-5">
          <input type="email" name="email" id="email" placeholder="email"/>
        </div>
        <div className="input-group mb-5">
          <input type="number" name="telephone" id="telephone" placeholder="telephone"/>
        </div>
        <div className="input-group mb-6">
          <input className='mb-3' type="password" name="password" id="password" placeholder="mot passe"/>
          <p className="signup text-xl">j'ai deja un compte.
        <Link to="/connexion" className="text-xl">Connecté</Link>
      </p>
        </div>
        
        <button className=" mb-4"><Link to="">Inscris</Link></button>
      </form>
    </div>
    );
  }