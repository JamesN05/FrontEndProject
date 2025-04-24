import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimerickEnnisPage } from './limerick-ennis.page';

describe('LimerickEnnisPage', () => {
  let component: LimerickEnnisPage;
  let fixture: ComponentFixture<LimerickEnnisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LimerickEnnisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
