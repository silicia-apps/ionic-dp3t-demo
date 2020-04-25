import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiliciaCardComponent } from './card.component';

describe('SiliciaCardComponent', () => {
  let component: SiliciaCardComponent;
  let fixture: ComponentFixture<SiliciaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiliciaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiliciaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
