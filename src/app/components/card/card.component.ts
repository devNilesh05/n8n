import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() extraClass: string = ''; // pass additional tailwind classes if needed

  // Proper EventEmitter setup
  @Output() clicked = new EventEmitter<void>();

  onHostClick() {
    this.clicked.emit();
  }
}
