import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs/index';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService( null ); // por ser pruebas unitarias le puedo mandar un null

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });


    it('Init: debe cargar los medicos', () => {

        const medicos = ['Medico1', 'Medico2', 'Medico3'];
        // Espias - son para hacer peticiones falsas cuando algo suceda
        // cuando alguien llame a getMedico en el servicio creo una falsa llamada
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {

            return from( medicos );
        });

        componente.ngOnInit(); // tengo que llamar el ngOnInit porque no se ejecuta si no inyecto un servicio valido

        expect( componente.medicos.length ).toBeGreaterThan( 0 );
   
    });

    it( 'Debe llamar al servidor para agregar un medico', () => {

        // Estoy buscando que agregarMedico sea llamado
        const espia = spyOn( servicio, 'agregarMedico').and.callFake( medico => {
            return empty();
        });

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled(); // acá verifico que eso sea llamado
    });

    it( 'Debe agregar un nuevo medico al arreglo de medicos', () => {

        const medico = { id: 1, nombre: 'Juan'};

        spyOn( servicio, 'agregarMedico' )
                .and.returnValue( from( [ medico ] ) );

        componente.agregarMedico();

        // expect( componente.medicos.length ).toBe(1);
        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
        // me aseguro que el medico este agregado en el arreglo de medicos del componente

    });

    it('Si falla la adición, la propiedad mensajeError debe ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar el Médico';

        spyOn( servicio, 'agregarMedico').and
            .returnValue( throwError( miError) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError );
    });

    it('Debe llamar al servidor para borrar un médico', () => {

        spyOn( window, 'confirm' ).and.returnValue(true);

        const espia = spyOn( servicio, 'borrarMedico')
                        .and.returnValue( empty() );

        componente.borrarMedico( '1' );

        expect( espia ).toHaveBeenCalledWith( '1' );
    });

    it('No debe llamar al servidor para borrar un médico', () => {

        spyOn( window, 'confirm' ).and.returnValue(false);

        const espia = spyOn( servicio, 'borrarMedico')
                        .and.returnValue( empty() );

        componente.borrarMedico( '1' );

        expect( espia ).not.toHaveBeenCalledWith( '1' );
    });

});
