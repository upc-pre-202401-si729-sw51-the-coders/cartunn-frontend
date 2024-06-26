import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: NotificationsCardComponent;
  let fixture: ComponentFixture<NotificationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
