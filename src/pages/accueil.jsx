import './Css/accueil.css'
import { Link } from 'react-router-dom';

function Accueil(){
    return(
       <>
<section
  className="relative Accueil"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl  text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-[#111827] font-extrabold sm:text-5xl">
        Ma Todo_Liste

        <strong className="block text-[#5d35d6] font-extrabold"> Decouvrez-Ma vie... </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Dans le livre de la vie, chaque page tourne avec la promesse d'une aventure sans fin, et devenir la meilleure version de soi-même est le chapitre le plus captivant.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to="inscription"
          className="inscris block w-full rounded bg-[#111827] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Inscription
        </Link>

        <Link
          to="/connexion"
          className=" connect block w-full rounded bg-[#fff] px-12 py-3 text-sm font-medium text-[#111827] shadow focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Connexion
        </Link>
      </div>
    </div>
  </div>
</section>
       </>
    );
}

export default Accueil;