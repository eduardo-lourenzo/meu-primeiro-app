import { Component } from '@angular/core';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';
// import { CardComponent } from 'src/app/shared/card/card.component';
import { MainGridComponent } from 'src/app/main-grid/main-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhoneFrameComponent, MainGridComponent /*CardComponent*/],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
