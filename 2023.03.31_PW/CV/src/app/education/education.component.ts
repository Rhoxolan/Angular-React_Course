import { Component, OnInit } from '@angular/core';
import { EducationalInstitution } from "./EducationalInstitution";
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit {
  Educations: EducationalInstitution[];

  constructor(private educationService: EducationService) {
    this.Educations = [];
  }

  ngOnInit() {
    this.Educations = this.educationService.Educations;
  }
}
