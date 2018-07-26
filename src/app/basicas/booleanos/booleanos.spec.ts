import { usuarioLogueado } from './booleanos';

describe( 'Pruebas de Booleanos', () => {

    it('Debe regresar True', () => {

        const resp = usuarioLogueado();
        expect( resp ).toBeTruthy();

    });

});
