import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]  // importo esto para probar testear el formulario html
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la Leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // Esto se hace para disparar la deteccion de cambios

        // Obtengo el elemento HTML de la compilación de Angular
        const elem: HTMLElement = fixture.debugElement.query( By.css( 'h3' ) ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });

    it('Debe mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);
        fixture.detectChanges();

        // ejecuto toda la instruccion cuando se termine de ejecutar detectChanges()
        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;

            expect( elem.value ).toBe( '55' );

        });
    });

    it('Debe incrementar/decrementar en 5, con un clic en el boton ', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler('click', null); // estoy simulando que hago clic en el primer boton
        expect( component.progreso ).toBe(45);

        botones[1].triggerEventHandler('click', null); // estoy simulando que hago clic en el primer boton
        expect( component.progreso ).toBe(50);

    });

    it('Debe incrementar/decrementar en 5 el progreso, cuando se hace clic en el boton', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null); // estoy simulando que hago clic en el primer boton

        fixture.detectChanges();

        fixture.whenStable().then( () => {

            const elem: HTMLElement = fixture.debugElement.query( By.css( 'h3' ) ).nativeElement;
            expect( elem.innerHTML ).toContain('45');
        });

    });

});
