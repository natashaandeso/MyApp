import { useState } from "react";

const Sixthcomponent = () =>{
    
    const[weight, setWeight] = useState("50 Kgs");
    
    return(
        <div className="Sixthcomponent">
            <h1>Welcome to my sixth component</h1>

            <h2>The current number is: {weight}</h2>

            {/* Call the setNumber function to update the weight after a click effect. */}
            <button onClick={ () => setWeight("55 Kgs")}>Click to update the Weight</button>
        </div>

    )
}

export default Sixthcomponent;