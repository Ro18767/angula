import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSettingsComponent } from './avatar-settings.component';

describe('AvatarSettingsComponent', () => {
  let component: AvatarSettingsComponent;
  let fixture: ComponentFixture<AvatarSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarSettingsComponent]
    });
    fixture = TestBed.createComponent(AvatarSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
