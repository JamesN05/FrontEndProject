import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BallybrophyLimerickPage } from './ballybrophy-limerick.page';

describe('BallybrophyLimerickPage', () => {
  let component: BallybrophyLimerickPage;
  let fixture: ComponentFixture<BallybrophyLimerickPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BallybrophyLimerickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
