import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  card_title = "Pagar";
  card_icon_svg: SafeHtml = "";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get("assets/icons/barcode.svg", { responseType: "text" })
      .subscribe(svg => this.card_icon_svg = this.sanitizer.bypassSecurityTrustHtml(svg));
  }

}
