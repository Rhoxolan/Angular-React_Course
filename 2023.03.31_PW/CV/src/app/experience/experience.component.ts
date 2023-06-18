import { Component, OnInit } from '@angular/core';
import { Work } from './Work';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {
  Work: Work[];

  constructor(private experienceService: ExperienceService) {
    this.Work = [];
  }

  ngOnInit() {
    this.Work = this.experienceService.Work;
  }
}
