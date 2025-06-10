import { useState } from "react"


export const NameFor = () => {
    const {name, setName} = useState("");

    return (
        <div>
            <input type="text" placeholder="Ingresa tu Nombre" value={name} onChange={(event) => setName(event.target.value)} />

            <p>Hola {name || "visitante"}</p>
        </div>
        
    )
}