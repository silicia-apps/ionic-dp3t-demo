import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialPage } from './tutorial.page';

describe('TutorialPage', () => {
  let component: TutorialPage;
  let fixture: ComponentFixture<TutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
