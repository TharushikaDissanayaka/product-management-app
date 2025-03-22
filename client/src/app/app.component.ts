import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductAddComponent } from "./pages/product-add/product-add.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
