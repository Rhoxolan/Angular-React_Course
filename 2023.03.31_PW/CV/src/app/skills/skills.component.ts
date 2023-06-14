import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: string[] = [
    "C#, .NET",
    "ASP.NET Core (MVC, WebAPI)",
    "WPF, Windows Froms",
    "Entity Framework Core, ADO.NET",
    "MS Sql Server, SQLite",
    "T-SQL",
    "OOP",
    "MVC, MVVM",
    "UML",
    "Design patterns, SOLID, KISS, DRY",
    "HTML, CSS, Bootstrap",
    "JavaScript, TypeScript",
    "REST, AJAX",
    "JSON, XML",
    "C++",
    "Git, GitHub",
    "Pre-intermediate English"
  ]
}
