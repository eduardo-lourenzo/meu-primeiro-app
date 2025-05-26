import { Component } from '@angular/core';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { MainGridComponent } from 'src/app/main-grid/main-grid.component';
import { CardData } from 'src/app/shared/card/card.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhoneFrameComponent, HeaderComponent, MainGridComponent /*CardComponent*/],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: CardData[] = [
    {title: "Acessar",          svgPath: "assets/icons/lock.svg"},
    {title: "Pix e transferir", svgPath: "assets/icons/sync_alt.svg"},
    {title: "Pagar",            svgPath: "assets/icons/barcode.svg"},
    {title: "Extrato",          svgPath: "assets/icons/list.svg"},
    {title: "Cartões",          svgPath: "assets/icons/credit_card.svg"},
    {title: "Área pix",         svgPath: "assets/icons/api.svg"},
    {title: "iToken",           svgPath: "assets/icons/security_key_horizontal.svg"},
    {title: "Ajuda",            svgPath: "assets/icons/chat_info.svg"}
  ];
}
