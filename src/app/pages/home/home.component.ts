import { Component } from '@angular/core';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhoneFrameComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
