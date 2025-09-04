import { Component, input } from '@angular/core';

@Component({
  selector: "app-project",
  imports: [],
  templateUrl: "./project.html",
  styleUrl: "./project.scss",
})
export class Project {
  public projectImageUrl = input.required<string>();
  public projectTitle = input.required<string>();
  public projectDescription = input.required<string>();
}
