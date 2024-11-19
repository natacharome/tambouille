import { Component, Input } from '@angular/core';
import { TagPipe } from "../../pipes/tag.pipe";

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [TagPipe],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() tag = '';
}
