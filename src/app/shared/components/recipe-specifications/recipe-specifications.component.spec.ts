import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSpecificationsComponent } from './recipe-specifications.component';

describe('RecipeSpecificationsComponent', () => {
  let component: RecipeSpecificationsComponent;
  let fixture: ComponentFixture<RecipeSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSpecificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
