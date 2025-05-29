import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [/*CommonModule*/],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _fullUsername = "Fulano da Silva";
  private _cpf = "***.456.789-**";


  get firstName(): string {
    return this._fullUsername.split(' ')[0];
  }

  get initials(): string {
    const parts = this._fullUsername.trim().split(' ');

    if (parts.length === 0) return "00";
    if (parts.length === 1) return (parts[0][0] + parts[0][0]).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  get cpf() : string {
    return this._cpf;
  }
}
