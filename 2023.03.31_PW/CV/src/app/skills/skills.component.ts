import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillsService]
})
export class SkillsComponent implements OnInit {
  skills: string[];

  constructor(private skillsService: SkillsService) {
    this.skills = [];
  }

  ngOnInit() {
    this.skills = this.skillsService.skills;
  }
}
