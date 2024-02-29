import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
  
    const [informacion, setInformacion] = useState({
        name: '',
        color: '',
    })
    console.log(informacion)
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    
       
        const trimmedName = informacion.name.trim();
        const trimmedColor = informacion.color.trim();
       
        if (trimmedName.length >= 3 && !trimmedName.startsWith(" ") && trimmedColor.length >= 6) {
            setShow(true);
            setErr(false);
        } else {
            setErr(true);
            setShow(false);
        }
    }

  return (
    <div>
        {show ? null : 
            <form onSubmit={handleSubmit}>
                <h1> Elige un color</h1>
                <label>Nombre Completo: </label>
                <input type="text" onChange={(event) => setInformacion({...informacion, name: event.target.value})}/>
                <label >Color favorito</label>
                <input type="text" onChange={(event) => setInformacion({...informacion, color: event.target.value})}/>
                <button>Enviar</button>
            </form>
        }
        {show ? 
     <>
     <Card info={informacion} />
    
 </>
       
             
        : <p>Complete la informacion solicitada.</p>}

        {err ? <p style={{color: 'red'}}>Por favor chequea que la información sea correcta</p> : null}
    </div>
  )
}

export default Form