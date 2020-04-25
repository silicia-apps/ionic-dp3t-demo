import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { TrackingPage } from './tracking.page';

describe('TrackingPage', () => {
  let component: TrackingPage;
  let fixture: ComponentFixture<TrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
