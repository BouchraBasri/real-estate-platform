import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPropComponent } from './recent-prop.component';

describe('RecentPropComponent', () => {
  let component: RecentPropComponent;
  let fixture: ComponentFixture<RecentPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
