import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { ElemRandomBGColorDirective } from '../../shared/directives/elem-random-bg-color.directive';
import { SharedModule } from 'shared/share.module';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;
  let debugElem: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CardComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        debugElem = fixture.debugElement;

        fixture.detectChanges();
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT make use of ElemRandomBGColorDirective', () => {
    expect(debugElem.query(By.directive(ElemRandomBGColorDirective))).toBeFalsy();
  });

  it('should make use of ElemRandomBGColorDirective', () => {
    component.dynamicBG = true;
    fixture.detectChanges();

    expect(debugElem.query(By.directive(ElemRandomBGColorDirective))).toBeTruthy();
  });
});
