

const login = async (name, password) => {
    const url = "http://localhost:5230/api/Usuario/Ingresar";

      const data = {
        email: name,
        contrasenia: password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse)
      } else {
        console.error("Error al hacer la petición:", response.status);
      }
}

const register = async(user, email, password) => {

    const url = "http://localhost:5230/api/Usuario/Ingresar";

      const data = {
        nombre: user,
        email: email,
        contrasenia: password
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse)
      } else {
        console.error("Error al hacer la petición:", response.status);
      }

}

export {
    login,
    register
}