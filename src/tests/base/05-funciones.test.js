import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe("Pruebas en 05-funciones.js", () => {
    
    test('getUser debe retornar un objeto"', () => { 
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest); //cuando queremos comparar si dos objetos tienen las mismas propiedades: toEqual()

     })

    test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = "Franco";

        const user = getUsuarioActivo(nombre);

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        expect(user).toEqual(userTest);


     })

})