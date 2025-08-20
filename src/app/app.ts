import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Portfolio';

  @Input() count = 0;
}
