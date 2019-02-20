(function() {

    //Inicializar Firebase
    var config = {
        apiKey: "AIzaSyD7PxKBJfbDPYxtvCij0I0b-7DYaVKHv9A",
        authDomain: "mensajes-174c6.firebaseapp.com",
        databaseURL: "https://mensajes-174c6.firebaseio.com",
        projectId: "mensajes-174c6",
        storageBucket: "mensajes-174c6.appspot.com",
        messagingSenderId: "661745081634"
    };
    firebase.initializeApp(config);

    //Obtener elementos
    const preObject = document.getElementById('objeto');
    const ulList = document.getElementById('lista');

    //Crear Referencias
    const dbRefObject = firebase.database().ref().child('objecto');
    const dbRefList = dbRefObject.child('habilidades');

    // Sincronizar cambios objeto
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
        window.alert('Se produjo una actualizacion en el sistema, presione Ctrl+F5 sin soltar');
    });

    dbRefList.on('child_added', snap => {
        console.log(snap.val())
    });


}());