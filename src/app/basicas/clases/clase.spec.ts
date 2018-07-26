import { Jugador } from './clase';

xdescribe( 'Pruebas de Clase', () => {

    let jugador = new Jugador();

    beforeAll( () => { // Se ejecuta antes que se ejecuten todas las pruebas

    });

    beforeEach( () => { // Se ejecuta antes de cada una de las pruebas
        jugador = new Jugador();
    });

    afterAll( () => {  // Se ejecuta despues que se ejecuten todas las pruebas

    });

    afterEach( () => { // Se ejecuta despues de cada una de las pruebas

    });


    it( 'Debe de retornar 80 de HP si recibe 20 de daño', () => {

        const resp = jugador.recibeDanio(20);
        expect( resp ).toBe( 80 );

    });

    it( 'Debe de retornar 50 de HP si recibe 50 de daño', () => {

        const resp = jugador.recibeDanio(50);
        expect( resp ).toBe( 50 );

    });

    it( 'Debe de retornar 0 de HP si recibe 100 de daño', () => {

        const resp = jugador.recibeDanio(100);
        expect( resp ).toBe( 0 );

    });

    xit( 'Debe de retornar 0 de HP si recibe 900 de daño', () => {

        const resp = jugador.recibeDanio(900);
        expect( resp ).toBe( 0 );

    });

});
