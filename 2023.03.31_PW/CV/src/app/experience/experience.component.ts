import { Component } from '@angular/core';
import { Work } from './Work';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})
export class ExperienceComponent {
  Work: Work[];

  constructor(private experienceService: ExperienceService){
    this.Work = experienceService.Work;
  }
}
