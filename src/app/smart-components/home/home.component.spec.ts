import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeDumbComponent } from 'dumb/home/home-dumb.component';
import { HomeDumbModule } from 'dumb/home/home-dumb.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let homeDumbComponent: HomeDumbComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HomeDumbModule],
      declarations: [HomeComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        homeDumbComponent = fixture.debugElement.query(By.directive(HomeDumbComponent))?.componentInstance;

        fixture.detectChanges();
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should make use of HomeDumbComponent', () => {
    expect(homeDumbComponent).toBeTruthy();
  });
});
