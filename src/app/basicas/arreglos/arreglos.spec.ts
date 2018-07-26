import { obtenerRobot } from './arreglos';

describe('Pruebas de arreglos', () => {

    it( 'Debe regresar al menos tres robots', () => {

        const resp = obtenerRobot();
        expect( resp.length ).toBeGreaterThanOrEqual(3);

    });

    it( 'Debe existir Megaman y Ultron', () => {

        const resp = obtenerRobot();
        expect( resp ).toContain('Megaman');
        expect( resp ).toContain('Ultron');

    });

});
