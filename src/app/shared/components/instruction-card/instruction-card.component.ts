import { Component, Input } from '@angular/core';
import { Instruction } from '../../models/recipe';

@Component({
  selector: 'app-instruction-card',
  standalone: true,
  imports: [],
  templateUrl: './instruction-card.component.html',
  styleUrl: './instruction-card.component.scss',
})
export class InstructionCardComponent {
  @Input() step!: Instruction;
}
