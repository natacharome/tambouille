import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  fb = inject(FormBuilder);
  searchForm: FormGroup;
  constructor() {
    this.searchForm = this.fb.group({
      search: '',
    });
  }
}
