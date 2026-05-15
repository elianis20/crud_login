import './style.css'
import Swal from 'sweetalert2'

function resetUsers() {
  localStorage.removeItem("users");
  userLogged = [];

  Swal.fire({
    icon: "success",
    title: "Usuarios eliminados"
  });
}

// APP
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
        id="register-form"
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
        id="userName"
        />
        <p id="errorUserName" class="text-red-500 text-sm hidden"></p>
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
          id="userEmail"
          />
          <p id="errorEmail" class="text-red-500 text-sm hidden"></p>
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
            id="userPass"
            />
            <p id="errorPasswordUser" class="text-red-500 text-sm hidden"></p>
            </div>
            
            <button 
            type ="submit"
            class="w-60 bg-blue-400 hover:bg-blue-600 hover:scale-105 transition duration-200 px-5 py-3 rounded-xl text-white font-semibold cursor-pointer"
            id="btn-sign-up-form">
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
      
// document.addEventListener("DOMContentLoaded", () => {

//   Swal.fire({
//     title: 'SweetAlert conectado 🚀',
//     text: 'La librería funciona correctamente',
//     icon: 'success',
//     confirmButtonText: 'Continuar'
//   });

// });
let userLogged = JSON.parse(localStorage.getItem("users")) || [];


renderLogin();

document.addEventListener("DOMContentLoaded", ()=>{
  const formRegister = document.getElementById("register-form");
  const container = document.querySelector(".container");
  const btnSignUp = document.getElementById("btn-sign-up");
  const btnSignIn = document.getElementById("btn-sign-in");
  const regButtom    = document.getElementById("btn-sign-up-form");
  
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
  formRegister.addEventListener("submit", (event_)=>{
  event_.preventDefault();
  createUser();
  });
});
  

// const userLogged = [
//   {
//     userName: "gustavo",
//     userEmail: "gustav123@gmail.com", 
//     userPass: "1234",
//     userPhoto:"",
//     userDescription:""
//   },
//   {
//     userName: "Melissa",
//     userEmail: "melissa@gmail.com", 
//     userPass: "1234",
//     userPhoto:"",
//     userDescription:""
//   }
// ];

// CREATE

function getFormData(){
  const formRegister = document.getElementById("register-form");
  const [name, email, pass] = Object.values(formRegister);
  // console.log(name.value);
  // console.log(email.value);
  // console.log(pass.value);

  //VARIABLES FROM FORM
  const cleanName  = name.value.trim().toLowerCase();
  const cleanEmail = email.value.trim().toLowerCase();
  const passUser    = pass.value;
  
  return {
      cleanName, cleanEmail, passUser
  };
}

// function voidInput(voidName, voidEmail, voidPass){

//   if(voidName === "" || voidEmail === "" || voidPass === ""){
//     Swal.fire({
//       icon: "error",
//       title: "Fields required",
//       text: "All fields are required!"
//     }); 
//     return
//   };
  
// };

//CHAT GPT FUNCTIONS FOR ALERT AND REQUIRED MESSAGGE
function validateForm(name, email, pass) {
  return name === "" || email === "" || pass === "";
}

function showErrors(nameInput, emailInput, passInput) {

  const errorUserName = document.getElementById("errorUserName");
  const errorEmail    = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPasswordUser");

  Swal.fire({
    icon: "error",
    title: "Campos obligatorios",
    text: "Completa todos los campos"
  });

  if (nameInput.value === "") {
    errorUserName.textContent = "Este campo es requerido";
    errorUserName.classList.remove("hidden");
    // nameInput.classList.add("border-red-500");
  }

  if (emailInput.value === "") {
    errorEmail.textContent = "Este campo es requerido";
    errorEmail.classList.remove("hidden");
    // emailInput.classList.add("border-red-500");
  }

  if (passInput.value === "") {
    errorPassword.textContent = "Este campo es requerido";
    errorPassword.classList.remove("hidden");
    // passInput.classList.add("border-red-500");
  }
}

function createdUser(user){
  
  if(user){
    Swal.fire({
      title: "User successfully created!",
      icon: "success",
      draggable: true
    });
  };
};


function createUser(){
  //DESTRUCTURED DATA FROM FORM
  const {cleanName, cleanEmail, passUser} = getFormData();

  // VARIALES TO CATCH INPUTS VALUE
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const passInput = document.getElementById("userPass");
  console.log(nameInput, emailInput, passInput)

  // VALIDATE VOID
  if (validateForm(cleanName, cleanEmail, passUser)) {
    showErrors(nameInput, emailInput, passInput);
    return;
  }

  // VARIABALES FROM ARRAY WITH FIND METHOD
  const nameExists  = userLogged.find(user => user.userName === cleanName);
  const emailExists = userLogged.find(user => user.userEmail === cleanEmail);

  // console.log(nameExists, emailExists);

  if(cleanName === "" || cleanEmail === "" || passUser === ""){
    voidInput(cleanName, cleanEmail, passUser);
    return
  }

  //CONDITION TO VALIDATE IF USERNAME OR EMAIL ALREADY EXISTS
  if(nameExists){
    Swal.fire({
    icon: "error",
    title: "Username is already in use",
    text: "Enter another user name!"
    }); 
    return
  }
  if(emailExists){
    Swal.fire({
    icon: "error",
    title: "Email is already in use",
    text: "Enter another Email!"
    }); 
    return
  }
  // =================== //

  const newUser ={
  userName: cleanName,
  userEmail: cleanEmail,
  userPass: passUser,
  photoUser:"",
  descriptionUser:"",
  birhtDate:""
  };

  userLogged.push(newUser);
  createdUser(newUser);
  localStorage.setItem("users", JSON.stringify(userLogged));
  // console.log(userLogged)

};


// LOGIN

function validarLogin() {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");

    let hayError = false;

    // RESET WITH CHAT GPT
    errorUsername.classList.add("hidden");
    errorPassword.classList.add("hidden");

    username.classList.remove("border-red-500");
    password.classList.remove("border-red-500");

    // VALIDATINg VOID
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

    // 🔥 BUSCAR USUARIO EN LOCALSTORAGE
    const userFound = userLogged.find(user =>
        user.userName === username.value &&
        user.userPass === password.value
    );

    if (userFound) {
        logged(userFound.userName, userFound.userPass);
        renderCrud();
    } else {
        Swal.fire({
            icon: "error",
            title: "Login failed",
            text: "User or password doesn't match"
        });
    }
}


// CRUD SECTION  //

// READ CARD //

function createCard(name, image, description, index) {
    const color = colors[index % colors.length];
    return `
        <div class="${color} p-3 rounded-lg flex flex-col items-center space-y-2">
            <figure class="flex flex-col items-center space-y-2 h-60 w-70">
                <img 
                    src="${image}"
                    alt="${name}"
                    class="w-40 h-60 object-cover rounded-lg"
                />
            </figure>
            <article>
                <h3 class="text-2xl font-bold">${name}</h3>
            </article>
            <article class="text-justify p-3">
                <p>${description}</p>
            </article>
            <section class="flex justify-around w-full py-2">
                <button class="bg-orange-300 hover:bg-amber-500 hover:text-stone-100 px-5 py-2 rounded">Edit</button>
                <button data-index="${index}" class="deleteBtn bg-red-400 hover:text-stone-100 hover:bg-red-600 px-5 py-2 rounded">Delete</button>
            </section>
        </div>
    `;
}

function renderCrud() {
    app.innerHTML = ` <main class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold mb-6">Clan Micaela</h1>
    <div id="cards" class="grid grid-cols-3 gap-4">
    </div>
</main>
    `;
    renderCards();
}

const colors = [
  'bg-blue-100',
  'bg-indigo-100',
  'bg-sky-100',
  'bg-violet-100',
  'bg-cyan-100',
  'bg-purple-100'
];




let people = [];

people.push({
    name: 'Nezuko Kamado',
    image: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/nezuko-demons-slayer.jpg?w=1200&h=675&fit=crop',
    description: 'Esta es una descripción de prueba'
});

function renderCards() {
    const container = document.getElementById('cards');
    container.innerHTML = people.map((person, index) =>
        createCard(person.name, person.image, person.description, index)
    ).join('');
}

document.addEventListener('click', function(e){
  if (e.target.classList.contains('deleteBtn')) {
    const index = e.target.dataset.index;
    people.splice(index, 1)
    renderCards();
    
  }
});


function logged(user) {
  Swal.fire({
    icon: "success",
    title: "Welcome!",
    text: `Bienvenido ${user}`
  });
}