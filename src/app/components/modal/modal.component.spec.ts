import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal', () => {
    const modal = fixture.debugElement.query(By.css('.modal'));
    expect(modal.nativeElement.style.display).toBe('');
    component.open();
    expect(modal.nativeElement.style.display).toBe('block');
    component.close();
    expect(modal.nativeElement.style.display).toBe('none');
  });
});
