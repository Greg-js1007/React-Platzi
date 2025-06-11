import { useState, useEffect } from "react"




export const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador cambio a ${count}`); 
    }, [count])

    return(
        <section className="w-1/4 min-w-xs mx-auto bg-blue-200 p-4 flex flex-col justify-center items-center h-48 gap-5">
            <p>El contador esta en: {count}</p>
            <div>
                <button className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none" onClick={() => setCount(count + 1)}>Incrementar</button>

            </div>
        </section>
    )
}