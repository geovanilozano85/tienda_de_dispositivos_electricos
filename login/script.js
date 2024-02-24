function login() {
    // Lista de usuarios y contraseñas
    const users = [
      { username: "Usuario1", password: "123" },
      { username: "Usuario2", password: "456" },
      { username: "Usuario3", password: "789" },
      { username: "Usuario4", password: "012" },
      { username: "Usuario5", password: "020" },
      { username: "Usuario6", password: "021" },
      { username: "Usuario7", password: "022" },
      { username: "Usuario8", password: "023" },
      { username: "Usuario9", password: "024" },
      { username: "Usuario10", password: "025" },
      // Puedes añadir más usuarios aquí
    ];
  
    // Datos ingresados por el usuario
    let usuarioIngresado = document.getElementById("user").value;
    let passwordIngresado = document.getElementById("password").value;
  
    // Variable para verificar si el usuario y contraseña son correctos
    let loginCorrecto = false;
  
    // Revisar cada usuario y contraseña del array
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === usuarioIngresado && users[i].password === passwordIngresado) {
        loginCorrecto = true;
        break; // Salir del ciclo si encontramos una coincidencia
      }
    }
  
    // Redirige si el usuario y contraseña son correctos, o muestra un mensaje de error
    if (loginCorrecto) {
      window.location.href = "/customers";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }