import { useState } from "react";

export const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <button onClick={() => setIsActive(!isActive)} className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-500">
                {isActive? "Activo ✅" : "Inactivo ⛔"}
            </button>
        </div>
    )
}