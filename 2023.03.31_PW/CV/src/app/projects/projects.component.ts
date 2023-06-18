import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  Projects: Project[];

  constructor(private projectsService: ProjectsService) {
    this.Projects = [];
  }

  ngOnInit() {
    this.Projects = this.projectsService.Projects;
  }
}
