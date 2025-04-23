import React, {useState} from 'react'

const PrimerComponente = () => {

    //let nombre = "loretin";
    let web = "loretinbombin.net";
    let cursos = [
        "matematica",
        "ingles",
        "historia",
        "lenguaje"
    ];

    const [nombre, setNombre] = useState("Lore");

    const cambiarNombre = (nuevoNombre) =>{
            setNombre(nuevoNombre);
        
    }

  return (
<div>
       <h1>mi nombre es : <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></h1>
      <h1>mi sitio web es {web}</h1>
      <input onChange={e => cambiarNombre(e.target.value)} type="text" name="" id="" placeholder="pon tu nombre aquí" />
      <button onClick={e => cambiarNombre("Geo")}>Cambia</button>

    <h2>Cursos:</h2>
      <ul>
        {
            cursos.map((curso, indice) => {
                return (<li key={indice}>
                    {curso}
                </li>);
            })
        }
      </ul>
</div>
  )
}

export default PrimerComponente
