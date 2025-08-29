import { trigger, transition, style, animate } from "@angular/animations";
import { Component, OnInit, signal } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [],
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        style({ transform: "translateY(-100%)", opacity: 0 }),
        animate(
          "1s ease-in",
          style({ transform: "translateY(0)", opacity: 1 })
        ),
      ]),
    ]),
  ],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header implements OnInit {
  public displayHeader = signal(false);

  public ngOnInit(): void {
    setTimeout(() => {
      this.displayHeader.set(true);
    }, 1000);
  }
}
