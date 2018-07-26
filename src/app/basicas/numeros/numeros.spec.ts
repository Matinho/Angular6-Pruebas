import { incrementar } from './numeros';

describe( 'Prueba de números' , () => {

    it( 'Debe devolver 100 si el numero ingresado es mayor a 100', () => {

        const res = incrementar( 300 );
        expect( res ).toBe( 100 );

    });

    it( 'Debe devolver el numero más 1 si el numero ingresado es menor a 100', () => {

        const numero = 99;
        const res = incrementar( numero );
        expect( res ).toBe( numero + 1 );

    });

});
