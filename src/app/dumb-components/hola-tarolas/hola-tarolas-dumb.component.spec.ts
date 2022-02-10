import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GridPosterComponent } from 'ui/grid-poster/grid-poster.component';
import { UIModule } from 'ui/ui.module';
import { HolaTarolasDumbComponent } from './hola-tarolas-dumb.component';

describe('HolaTarolasDumbComponent', () => {
  let fixture: ComponentFixture<HolaTarolasDumbComponent>;
  let component: HolaTarolasDumbComponent;
  let gridPosterComponent: GridPosterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIModule],
      declarations: [HolaTarolasDumbComponent, GridPosterComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HolaTarolasDumbComponent);
        component = fixture.componentInstance;
        gridPosterComponent = fixture.debugElement.query(By.directive(GridPosterComponent))?.componentInstance;

        fixture.detectChanges();
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set a message with a grid poster component', () => {
    expect(gridPosterComponent?.coordinatesSequence).not.toBeFalsy();
    expect(gridPosterComponent?.coordinatesSequence).toEqual(component.gridCoordinates);
  });
});
