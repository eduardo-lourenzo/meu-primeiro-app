import { Component } from '@angular/core';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhoneFrameComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
