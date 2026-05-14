import './style.css'

const app = document.querySelector(`#app`);
function renderLogin() {
app.innerHTML = ` 
<main class="bg-gray-100 flex justify-center items-center min-h-screen">
  <div
    class="container relative w-[790px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden flex"
  >

    <!-- LOGIN -->
    <div class="w-1/2 overflow-hidden">
      <form id="formData"
        class="sign-in h-full flex flex-col justify-center items-center gap-4 transition duration-500 ease-in-out"
      >
        <img
          class="w-40"
          src="https://i.ibb.co/G4S14VBK/micaela.png"
          alt=""
        />

        <h2 class="text-3xl font-bold">Login</h2>

        <span class="text-gray-500 text-sm">
          Enter your username and password
        </span>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="mail-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="text"
            id="username"
            placeholder="Email"
            class="w-full outline-none bg-transparent"
          />
          <p id="errorUsername" class="text-red-500 text-sm hidden"></p>
        </div>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="lock-closed-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="password"
            id="password"
            placeholder="******"
            class="w-full outline-none bg-transparent"
          />
          <p id="errorPassword" class="text-red-500 text-sm hidden"></p>
        </div>

        <a href="#" class="text-sm text-blue-500 hover:underline">
          Forgot your password?
        </a>

        <button
          class="w-60 bg-blue-400 hover:bg-blue-600 hover:scale-105 transition duration-200 px-5 py-3 rounded-xl text-white font-semibold cursor-pointer"
        >
          LOGIN
        </button>
      </form>
    </div>

    <!-- REGISTER -->
    <div class="w-1/2 overflow-hidden">
      <form
        class="sign-up h-full flex flex-col justify-center items-center gap-4 transition duration-500 ease-in-out"
      >

        <img
          class="w-40"
          src="https://i.ibb.co/G4S14VBK/micaela.png"
          alt=""
        />
        <h2 class="text-3xl font-bold">Register</h2>

        <span class="text-gray-500 text-sm">
          Create your account
        </span>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="person-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="text"
            placeholder="Jhon Doe"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="mail-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="text"
            placeholder="Email"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <!-- INPUT -->
        <div
          class="w-[320px] flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
        >
          <ion-icon
            name="lock-closed-outline"
            class="text-gray-500 text-xl"
          ></ion-icon>

          <input
            type="password"
            placeholder="******"
            class="w-full outline-none bg-transparent"
          />
        </div>

        <button
          class="w-60 bg-blue-400 hover:bg-blue-600 hover:scale-105 transition duration-200 px-5 py-3 rounded-xl text-white font-semibold cursor-pointer"
        >
          REGISTER
        </button>
      </form>
    </div>

    <!-- PANEL DERECHO -->
    <div
      class="container-welcome absolute top-0 right-0 w-1/2 h-full bg-blue-500 text-white flex items-center justify-center rounded-l-[100px] transition-all duration-500"
    >

      <!-- WELCOME REGISTER -->
      <div
        class="welcome welcome-sign-up absolute flex flex-col items-center gap-5 px-10 text-center transition duration-500"
      >
        <h3 class="text-4xl font-bold">Welcome!</h3>

        <p>
          Enter your information to sign up
        </p>

        <button
          id="btn-sign-up"
          class="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-500 transition"
        >
          Register
        </button>
      </div>

      <!-- WELCOME LOGIN -->
      <div
        class="welcome welcome-sign-in absolute flex flex-col items-center gap-5 px-10 text-center transition duration-500 translate-x-full"
      >
        <h3 class="text-4xl font-bold">Hello!!</h3>

        <p>
          Enter your information to unlock your profile
        </p>

        <button
          id="btn-sign-in"
          class="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-500 transition"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</main>
`
}

renderLogin();

const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", ()=>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", ()=>{
    container.classList.add("toggle");
});

document.querySelector('#formData').addEventListener('submit', function(e){
    e.preventDefault();
    validarLogin();
});



function validarLogin() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");

    let hayError = false;

    if (username.value === '') {
    errorUsername.classList.remove('hidden');
    errorUsername.textContent = 'Este campo es requerido';
    username.classList.add('border-red-500');
    hayError = true;
    }

    if (password.value === '') {
        errorPassword.classList.remove('hidden');
        errorPassword.textContent = 'Este campo es requerido';
        password.classList.add('border-red-500');
        hayError = true;
    }

    if (hayError) return;

    if (username.value === 'admin' && password.value === '1234') {
        renderCrud();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
    }

function renderCrud() {
    app.innerHTML = ` <main class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold mb-6">Clan Micaela</h1>
    <div id="tarjetas" class="grid grid-cols-3 gap-4">
    </div>
</main>
    `;
    renderTarjetas();
}

const colores = [
  'bg-blue-100',
  'bg-indigo-100',
  'bg-sky-100',
  'bg-violet-100',
  'bg-cyan-100',
  'bg-purple-100'
];

function crearTarjeta(nombre, imagen, descripcion, index) {
    const color = colores[index % colores.length];
    return `
        <div class="${color} p-3 rounded-lg flex flex-col items-center space-y-2">
            <figure class="flex flex-col items-center space-y-2 h-60 w-70">
                <img 
                    src="${imagen}"
                    alt="${nombre}"
                    class="w-40 h-60 object-cover rounded-lg"
                />
            </figure>
            <article>
                <h3 class="text-2xl font-bold">${nombre}</h3>
            </article>
            <article class="text-justify p-3">
                <p>${descripcion}</p>
            </article>
            <section class="flex justify-around w-full py-2">
                <button class="bg-orange-300 hover:bg-amber-500 hover:text-stone-100 px-5 py-2 rounded">Editar</button>
                <button class="bg-red-400 hover:text-stone-100 hover:bg-red-600 px-5 py-2 rounded">Eliminar</button>
            </section>
        </div>
    `;
}

let personas = [];

personas.push({
    nombre: 'Nezuko Kamado',
    imagen: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/nezuko-demons-slayer.jpg?w=1200&h=675&fit=crop',
    descripcion: 'Esta es una descripción de prueba'
});

function renderTarjetas() {
    const contenedor = document.getElementById('tarjetas');
    contenedor.innerHTML = personas.map((persona, index) => 
        crearTarjeta(persona.nombre, persona.imagen, persona.descripcion, index)
    ).join('');
}
