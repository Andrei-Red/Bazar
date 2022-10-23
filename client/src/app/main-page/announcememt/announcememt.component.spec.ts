import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncememtComponent } from './announcememt.component';

describe('AnnouncememtComponent', () => {
  let component: AnnouncememtComponent;
  let fixture: ComponentFixture<AnnouncememtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncememtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncememtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
