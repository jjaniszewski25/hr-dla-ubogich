import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMap } from './office-map';

describe('OfficeMap', () => {
  let component: OfficeMap;
  let fixture: ComponentFixture<OfficeMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
