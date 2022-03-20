/* 

    TAREA

    1. Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp

    2. El CounterApp debe de ser un Functional Component

    3. El contenido del CounterApp debe de ser:

        <h1>CounterApp</h1>
        <h2> { value } </h2>
    4. Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)

    5. Reemplazar en el index.js el componente de por el componente (no se olviden del value que debe de ser un número)

    6. Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)

*/

//Con "rafcp" podemos crear un functional component facilmente

import React from "react";
import PropTypes from "prop-types";

    const CounterApp = ( { value } ) => {

        //handleAdd
        const handleAdd = (e) => {
            console.log(e)
        }
        
        return (
            <>
                <h1>CounterApp</h1>
                <h2>{ value }</h2>

                <button onClick={ handleAdd }>+1</button> 
            </>
                //onClick={ (e) => handleAdd(e) } es lo mismo que arriba
        );
    }

    CounterApp.propTypes = {
        value: PropTypes.number
    }

export default CounterApp;
