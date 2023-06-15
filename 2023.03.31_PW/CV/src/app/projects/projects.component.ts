import { Component } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  Projects: Project[] = [
    {
      Name: "Structured Cabling Studio",
      DateOfStart: new Date(2023, 2, 1),
      DateOfComplete: new Date(2023, 4, 18),
      Stack: ".NET 7 ASP.NET Core MVC + HTML Razor, EF Core, MS SQL.",
      Description: "Author's project. Web application for calculation of necessary meterage " +
            "of installation cable and obtaining cable selection recommendations for design of a " +
            "structured cabling. Localized in 3 languages, including English.",
      Links: [
        "https://structured-cabling-studio.pro",
        "https://github.com/Rhoxolan/Structured_Cabling_Studio"
      ]
    },
    {
      Name: "SCS-Calc 2.0",
      DateOfStart: new Date(2022, 9, 2),
      DateOfComplete: new Date(2023, 1, 18),
      Stack: ".NET 7 WPF, EF Core, SQLite.",
      Description: "Author's project. Desktop application for calculation of necessary meterage " +
           "of installation cable and obtaining cable selection recommendations for design of a " +
           "structured cabling.",
      Links: [
        "https://github.com/Rhoxolan/SCS-Calc_2.0",
      ]
    },
    {
      Name: "Pomodoro Project",
      DateOfStart: new Date(2022, 9, 1),
      DateOfComplete: new Date(2023, 10, 1),
      Stack: ".NET 6 Windows Forms, EF Core, MS SQL.",
      Description: "Team Project in the IT STEP Academy in Kryvyi Rih. Desktop application for " +
            "time management using the Pomodoro method.",
      Links: [
        "https://github.com/SvitLanaSvit/Step_Academy_TeamProject_POMODORO_NEW",
      ]
    },
    {
      Name: "SCS-Calc",
      DateOfStart: new Date(2022, 4, 1),
      DateOfComplete: new Date(2022, 5, 5),
      Stack: ".NET 6 Windows Forms.",
      Description: "Author's project. Desktop application for calculation of necessary meterage " +
      "of installation cable for design of a structured cabling",
      Links: [
        "https://github.com/Rhoxolan/SKS-Calc",
      ]
    }
  ]
}
