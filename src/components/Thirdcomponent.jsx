const Thirdcomponent = () =>{
    // Variables enables us to create dynamic websites. (It means the contents of the website will  be changing over time.)
    // Below will declare some variables.  Note: variables are usually declared just before the return statement in Reactjs.

    let name = "Natasha";
    let age = 32;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* Below we bind our variables. We use the variable names that we had declared before. */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;


// Create a Fourth component.jsx have two variables i.e weight and height  and bind them on the user interface. Then render the component on App.js
