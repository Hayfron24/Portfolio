import { Component, Input } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Portfolio';

  @Input() count = 0;
}
