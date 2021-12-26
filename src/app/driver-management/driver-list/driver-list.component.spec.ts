import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverListComponent } from './driver-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DriverListComponent', () => {
  let component: DriverListComponent;
  let fixture: ComponentFixture<DriverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverListComponent],
      imports: [FontAwesomeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
