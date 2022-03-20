//Vamos a la terminal, entramos a la carpeta del proyecto y ejecutamos "npm run test"

describe('Pruebas en el archivo demo.test.js', () => { //todas las pruebas que se ejecuten dentro del describe se van a agrupar, es mucho mas ordenado

    test('deben de ser iguales los strings', () => { 
        
        // 1. Inicializacion
        const mensaje = "Hola mundo";
    
        // 2. Estimulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); //expect, se manda un valor inicial y esperamos que sea igual al valor del .toBe
     })

});



