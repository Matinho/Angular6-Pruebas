import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>; // ComponentFixture permite navegar por el DOM y acceder al HTML

    beforeEach( () => {

        // TestBed tiene un set de funcionalidades para testear
        // configureTestingModule recibe exactamente lo mismo que un modulo, le digo que voy a usar
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent ); // regresa un fixture, para tener acceso al HTML y al DOM
        component = fixture.componentInstance; // puedo usar todos los metodos y atributos del componente

    });

    it('Debe crearse el componente', () => {

        expect( component ).toBeTruthy();

    });

    it('Debe retornar el nombre del Médico', () => {

        const nombre = 'Juan';
        const res = component.saludarMedico( nombre );

        expect( res ).toContain( nombre );

    })

});
