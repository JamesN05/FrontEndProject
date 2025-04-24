import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimerickWaterfordPage } from './limerick-waterford.page';

describe('LimerickWaterfordPage', () => {
  let component: LimerickWaterfordPage;
  let fixture: ComponentFixture<LimerickWaterfordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LimerickWaterfordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
