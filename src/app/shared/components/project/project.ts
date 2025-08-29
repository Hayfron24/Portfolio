import { Component, input } from '@angular/core';

@Component({
  selector: "app-project",
  imports: [],
  templateUrl: "./project.html",
  styleUrl: "./project.scss",
})
export class Project {
  public projectImageUrl = input<string>("/assets/icons/skills.svg");
  public projectTitle = input<string>("Project Title");
  public projectDescription = input<string>("Project Description");
}
