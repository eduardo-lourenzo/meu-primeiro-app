import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { CardData } from '../shared/card/card.model';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent {
  @Input() cards: CardData[] = [];
}
