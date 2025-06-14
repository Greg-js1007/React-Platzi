import { useState } from "react"


export const NameFor = () => {
    const [name, setName] = useState("");

    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-white font-bold text-5xl">Formulario de Nombre</h2>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>

            <input type="text"
             placeholder="Ingresa tu Nombre"
             value={name}
             onChange={(event) => setName(event.target.value)}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <p className="dark:text-white font-medium text-sm">Hola, {name || "Visitante"}</p>
        </div>
    )
}