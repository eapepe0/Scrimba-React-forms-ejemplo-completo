import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    comentario: "",
    genio: false,
    empleo: "",
    favColor: ""
  });
  // creamos una variable para almacenar el useState , donde tiene un objeto
  // podemos acceder a esos datos formData["nombre"]

  function handleChange(event) {
    const { name, value, type, checked } = event.target; // destructurar name , value ej (nombre , valor que toma del input value)
    setFormData((prevFormData) => {
      // usamos la funcion que maneja useState
      return {
        // devolvemos un objeto
        ...prevFormData, // que use todo lo anterior y modifique solamente
        [name]: type === "checkbox" ? checked : value
        // si es el tipo es checkbox usar como valor checked , si no es un checkbox usar value como valor para el objeto
        // nombre : " valor " en el caso del primer input
        // apellido : " valor "  en el caso del segundo input
      };
    });
  }

  function mostrarDatos(event) {
    // funcion que imprime los datos recibe el event
    event.preventDefault(); // con esto no refresca la pantalla al apretar un boton haciendo que perdamos los datos
    console.log(formData); // mostramos los datos
  }
  return (
    <form onSubmit={mostrarDatos}>
      {/* con el evento onSubmit mostramos los datos al hacer click en enviar*/}
      <input
        type="text"
        placeholder="Nombre"
        name="nombre"
        onChange={handleChange}
        value={formData.nombre}
      />
      {/* usamos onChange en el input para ver que ingresan , le pasamos una funcion handleChange, 
      el name de cada input tiene que coincidir con objeto creado en useState, asi no crea un objeto vacio*/}
      <input
        type="text"
        placeholder="Apellido"
        name="apellido"
        onChange={handleChange}
        value={formData.apellido}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        value={formData.comentario}
        type="text"
        placeholder="Comentarios..."
        name="comentario"
        onChange={handleChange}
      />
      <input
        type="checkbox"
        id="esGenio"
        checked={formData.genio}
        onChange={handleChange}
        name="genio"
        /* agregamos el name genio que es el mismo de setUseState 
         nombre: "",
        apellido: "",
        email: "",
        comentario: "",
        genio: false*/
      />
      <label htmlFor="esGenio">¿Es un genio? </label>
      {/* con el htmlfor estamos relacionando 
      el label con el input de arriba, al hacer click en el label es como si hicieramos click en el checkbox*/}
      <br />
      <br />
      <fieldset>
        <legend>Estado de empleo actual</legend>
        <input
          type="radio"
          id="unemployed"
          name="empleo"
          value="sin-empleo" /* a los radio botones hay que definir que valor devuelve */
          checked={formData.empleo === "sin-empleo"}
          onChange={handleChange}
        />
        {/* dandoles el mismo name , hace que solo se pueda elegir un solo radio */}
        <label htmlFor="unemployed">Desempleado</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="empleo"
          value="part-time" /* a los radio botones hay que definir que valor devuelve */
          checked={formData.empleo === "part-time"}
          onChange={handleChange} // si algo cambia ejecuta la funcion
        />
        <label htmlFor="part-time">Trabajo parcial</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="empleo"
          value="full-time" /* a los radio botones hay que definir que valor devuelve */
          checked={formData.empleo === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Trabajo tiempo completo</label>
        <br />
      </fieldset>
      <label htmlFor="favColor">¿Cual es tu color favorito?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor} // el valor lo toma del formData.favColor
        onChange={handleChange}
        name="favColor" // el name tiene que ser igual que el objeto en useState
      >
        <option value="">-- Elije --</option>{" "}
        {/* usamos una opcion por default que tenga valor "" sino se inicializa mal el useState */}
        <option value="rojo">Rojo</option>
        <option value="naranja">Naranja</option>
        <option value="amarillo">Amarillo</option>
        <option value="verde">Verde</option>
        <option value="azul">Azul</option>
        <option value="indigo">Indigo</option>
        <option value="violeta">Violeta</option>
      </select>
      <button className="button-7">Enviar</button>
      {/* con este boton simulamos el submit , fijarse que no tiene ninguna funcion asociada*/}
    </form>
  );
}
