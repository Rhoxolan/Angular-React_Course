import { Component } from '@angular/core';
import {EducationalInstitution} from "./EducationalInstitution";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  Educations: EducationalInstitution[] = [
    {
      Name: "IT STEP Academy",
      City: "Kryvyi Rih",
      DateOfAdmission: new Date(2020, 10, 29),
      DateOfGraduation: new Date(2023, 0, 1),
      Specialty: "Software Development"
    },
    {
      Name: "Krivoy Rog Mining and Metallurgical Professional Lyceum",
      City: "Kryvyi Rih",
      DateOfAdmission: new Date(2014, 8, 1),
      DateOfGraduation: new Date(2017, 5, 1),
      Specialty: "Electrician (with honours)"
    },
  ]
}
