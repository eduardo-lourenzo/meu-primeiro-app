import { Component, Input } from '@angular/core';
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
  @Input() card_title = "Pagar";
  @Input() card_icon_path = "";
  card_icon_svg: SafeHtml = "";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.card_icon_path) {
      this.http.get(this.card_icon_path, { responseType: "text" })
        .subscribe(svg => this.card_icon_svg = this.sanitizer.bypassSecurityTrustHtml(svg));
    }
  }

}
