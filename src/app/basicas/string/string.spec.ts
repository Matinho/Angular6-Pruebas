import { mensaje } from './string';

// las pruebas tienen dos partes principales, describe() e it()

/*
describe('Pruebas de Strings'); // sirve para agrupar pruebas

it('Debe regresar un String'); // es una prueba puntual
*/

describe( 'Pruebas de Strings' , () => {

    it( 'Debe regresar un String', () => { // it() es una funcion de Jasmine

        const resp = mensaje('Matias');
        expect( typeof resp ).toBe('string');

    });

    it( 'Debe devolver un saludo con el nombre enviado', () => { // it() es una funcion de Jasmine

        const nombre = 'Matias';
        const resp = mensaje( nombre );
        expect( resp ).toContain( nombre );

    });

});
