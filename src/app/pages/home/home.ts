import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  Component,
  inject,
  OnInit,
  signal,
} from "@angular/core";
import { Project } from "../../shared/components/project/project";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmailService } from "../../shared/email-service";

@Component({
  selector: "app-home",
  imports: [Project, ReactiveFormsModule],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, scale: 0 }),
        animate(".3s ease-in", style({ opacity: 1, scale: 1 })),
      ]),
    ]),
    trigger("slideInFromTop", [
      transition(":enter", [
        style({ transform: "translateY(100%)", opacity: 0 }),
        animate(
          "1s ease-in",
          style({ transform: "translateY(0)", opacity: 1 })
        ),
      ]),
    ]),
    trigger("slideInFromBottom", [
      transition(":enter", [
        style({ transform: "translateY(100%)", opacity: 0, scale: 0.3 }),
        animate(
          ".5s ease-in",
          style({ transform: "translateY(0)", opacity: 1, scale: 1 })
        ),
      ]),
    ]),
    trigger("slideInFromLeft", [
      transition(":enter", [
        style({ transform: "translateX(-100%)", opacity: 0, scale: 0 }),
        animate(
          ".5s ease-in",
          style({ transform: "translateX(0)", opacity: 1, scale: 1 })
        ),
      ]),
    ]),
    trigger("slideInRight", [
      transition(":enter", [
        style({ transform: "translateX(200%)", opacity: 0, scale: 0 }),
        animate(
          ".5s ease-in",
          style({ transform: "translateX(0)", opacity: 1, scale: 1 })
        ),
      ]),
    ]),
    trigger("fadeInOnScroll", [
      state(
        "hidden",
        style({
          opacity: 0,
          transform: "translateY(0)",
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          transform: "translateY(100%)",
        })
      ),
      transition(
        "hidden => visible",
        animate("2s cubic-bezier(0.25, 0.46, 0.45, 0.94)")
      ),
    ]),
  ],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home implements OnInit {
  public displayText = signal(false);
  public displayProfile = signal(false);
  public displayProfilePicture = signal(false);
  public showSkills = signal(false);

  public emailService = inject(EmailService)
  
  public email = new FormControl('',[Validators.required, Validators.email]);

  public ngOnInit(): void {
    setTimeout(() => {
      this.displayText.set(true);
    }, 2500);

    setTimeout(() => {
      this.displayProfile.set(true);
    }, 3000);

    setTimeout(() => {
      this.displayProfilePicture.set(true);
    }, 4000);

    console.log(this.email.value);
  }


  onSubmit() {
    if (this.email.valid) {
      console.log("Form Submitted!", this.email.value);
      this.emailService.sendEmail(this.email.value!);
      this.email.reset();

    } else {
      console.log("Form not valid");
    }
  }
}
