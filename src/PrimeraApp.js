import React from "react";
import PropTypes from "prop-types";
//import React, { Fragment } from "react";

const PrimeraApp = ( { saludo, subtitulo = "Soy un subtitulo" } ) => {



    return (
        <>
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired //puede ser del tipo que queramos, string, boolean, lo que sea. Y el isRequired lo vuelve obligatorio
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo con defaultProps"
}

export default PrimeraApp;