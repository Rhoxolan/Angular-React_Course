import { Component } from '@angular/core';
import { Project } from './Project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent {
  Projects: Project[];

  constructor(private projectsService: ProjectsService) {
    this.Projects = projectsService.Projects;
  }
}
