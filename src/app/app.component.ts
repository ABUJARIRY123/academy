import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatirComponent } from './calculatir/calculatir.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
}
