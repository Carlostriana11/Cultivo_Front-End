import { Component } from '@angular/core';

@Component({
  selector: 'app-nevegation-bar',
  standalone: true,
  imports: [],
  templateUrl: './nevegation-bar.component.html',
  styleUrl: './nevegation-bar.component.css'
})
export class NevegationBarComponent {
  menuVisible: boolean = false
  openMenu(){
    this.menuVisible = true
  }
  clouseMenu(){
    this.menuVisible = false
  }
}
