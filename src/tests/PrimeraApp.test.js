import React from 'react';
import { render } from "@testing-library/react"; //render es una funcion que va a recibir un componente
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp>', () => {

    test('debe mostrar el mensaje "Hola, soy Goku"', () => {

        const saludo = 'Hola, soy Goku';

        const {getByText} = render(<PrimeraApp saludo={saludo}/>); //wrapper seria el producto renderizado de lo que quiero mostrar
        expect(getByText(saludo)).toBeInTheDocument();
    })

})