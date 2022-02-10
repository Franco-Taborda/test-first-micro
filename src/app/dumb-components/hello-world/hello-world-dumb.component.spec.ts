import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GridPosterComponent } from 'ui/grid-poster/grid-poster.component';
import { UIModule } from 'ui/ui.module';
import { HelloWorldDumbComponent } from './hello-world-dumb.component';

describe('HelloWorldDumbComponent', () => {
  let fixture: ComponentFixture<HelloWorldDumbComponent>;
  let component: HelloWorldDumbComponent;
  let gridPosterComponent: GridPosterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIModule],
      declarations: [HelloWorldDumbComponent, GridPosterComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HelloWorldDumbComponent);
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
