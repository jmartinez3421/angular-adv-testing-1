import {TestBed, ComponentFixture} from '@angular/core/testing';
import {IncrementadorComponent} from './incrementador.component';
import {FormsModule} from '@angular/forms';
import {By} from "@angular/platform-browser";


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('should show the legend', () => {
    const legend = 'Charge progress';

    component.leyenda = legend;
    fixture.detectChanges(); //Play change detection

    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain(legend);
  });

  it('should show the value of the progress in the input', () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(input.value).toBe('55');
    });
  });

  it('should increment/decrement in 5 when the button is clicked', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

    buttons[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    buttons[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('should render 45 when the button is clicked the first time ', function () {
    const button = fixture.debugElement.query(By.css('.btn-primary'));
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    const progress = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(progress.innerHTML).toContain(45);
  });
});
