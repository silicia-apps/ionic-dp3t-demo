import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CovidPage } from './covid.page';

describe('CovidPage', () => {
  let component: CovidPage;
  let fixture: ComponentFixture<CovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
