import { Component } from '@angular/core';
import { Work } from './Work';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  Work: Work[] = [
    {
      Company: "ISP IT-Invest",
      City: "Kryvyi Rih",
      Position: "Network administrator",
      DateOfEmployment: new Date(2021, 5, 1),
      DateOfCompletion: new Date(2021, 11, 1),
      Experience: "ISP network administration."
    },
    {
      Company: "MetallurgService Plus",
      City: "Kryvyi Rih",
      Position: "Electrician",
      DateOfEmployment: new Date(2020, 5, 1),
      DateOfCompletion: new Date(2021, 5, 1),
      Experience: "Maintenance of electrical installations at metallurgical plants."
    },
    {
      Company: "ISP SunLine",
      City: "Kryvyi Rih",
      Position: "Cabling installer",
      DateOfEmployment: new Date(2016, 3, 19),
      DateOfCompletion: new Date(2020, 2, 1),
      Experience: "Works for connecting new subscribers to the Internet network, works " +
            "on troubleshooting. Experience with optical fiber."
    },
  ]
}
