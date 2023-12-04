function Connexion(){
    return(
       
<div class="bg-blue-400 h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: "500px"}}>
            <div class="flex flex-col w-full md:w-1/2 p-4">
                <div class="flex flex-col flex-1 justify-center mb-8">
                    <h1 class="text-4xl text-center font-thin">Todo_Liste</h1>
                    <div class="w-full mt-4">
                        <form class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                        <div class="flex flex-col mt-4">
                        <label
  for="UserEmail"
  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    placeholder="Email"
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
  >
    Email
  </span>
</label>
<label
  for="UserEmail"
  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    placeholder="Email"
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
  >
    Email
  </span>
</label>
                            </div>
                            <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          j'ai pas de compte?
          <a class="underline" href="">inscris</a>
        </p>

        <p class="text-sm text-gray-500">
          <a class="underline" href="">Mot de passe publié</a>
        </p>
      </div>
      <button
          type="submit"
          class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Connexion
        </button>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div class="hidden md:block md:w-1/2 rounded-r-lg" style={{background: "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')", backgroundSize: "cover", backgroundPosition: "center center"}}></div>
        </div>
    </div>
</div>
    )

}

export default Connexion;