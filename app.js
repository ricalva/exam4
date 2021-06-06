 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAY3B2nAAa6FMK9I2eNEm4Yn8TmVNBT8bs",
  authDomain: "unidad4-faf91.firebaseapp.com",
  projectId: "unidad4-faf91",
  storageBucket: "unidad4-faf91.appspot.com",
  messagingSenderId: "937239943482",
  appId: "1:937239943482:web:4f9952dd75533a93fe5803"

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //obtener datos del html

  
  var txtUsuario = document.getElementById("usuario");
  var txtMensaje = document.getElementById("mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje
    })
  });

  /*Mostrar datos*/
  firebase.database().ref('chat').on('value', (snapshot) => {
    var html1 = '';
    //console.log(snapshot.val());
    snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.message;
      html1 += '<div class="chat-bubble"><div class="chat-bubble-arrow-border"></div><div class="chat-bubble-arrow"></div><h5>'+usuario1+" dice: "+mensaje1+"</h5></div>";
        
    });
    chatlista.innerHTML = html1;
  })