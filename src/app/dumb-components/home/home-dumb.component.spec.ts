import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeDumbComponent } from './home-dumb.component';

describe('HomeDumbComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeDumbComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HomeDumbComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
