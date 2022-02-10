import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HelloWorldDumbComponent } from 'dumb/hello-world/hello-world-dumb.component';
import { HelloWorldDumbModule } from 'dumb/hello-world/hello-world-dumb.module';
import { HolaTarolasDumbComponent } from 'dumb/hola-tarolas/hola-tarolas-dumb.component';
import { HolaTarolasDumbModule } from 'dumb/hola-tarolas/hola-tarolas-dumb.module';
import { HomeDumbComponent } from './home-dumb.component';

describe('HomeDumbComponent', () => {
  let fixture: ComponentFixture<HomeDumbComponent>;
  let component: HomeDumbComponent;
  let helloWorldDumbComponent: HelloWorldDumbComponent;
  let holaTarolasDumbComponent: HolaTarolasDumbComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HelloWorldDumbModule, HolaTarolasDumbModule],
      declarations: [HomeDumbComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeDumbComponent);
        component = fixture.componentInstance;
        helloWorldDumbComponent = fixture.debugElement.query(By.directive(HelloWorldDumbComponent))?.componentInstance;
        holaTarolasDumbComponent = fixture.debugElement.query(
          By.directive(HolaTarolasDumbComponent),
        )?.componentInstance;

        fixture.detectChanges();
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should make use of HelloWorldDumbComponent', () => {
    expect(helloWorldDumbComponent).toBeTruthy();
  });

  it('should make use of HolaTarolasDumbComponent', () => {
    expect(holaTarolasDumbComponent).toBeTruthy();
  });
});
