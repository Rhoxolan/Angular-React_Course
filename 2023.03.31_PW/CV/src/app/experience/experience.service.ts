import { Injectable } from '@angular/core';
import { Work } from './Work';

@Injectable()
export class ExperienceService {
  readonly Work: Work[] = [
    new Work("ISP IT-Invest", "Kryvyi Rih", "Network administrator",
      new Date(2021, 5, 1), new Date(2021, 11, 1), "ISP network administration."),
    new Work("MetallurgService Plus", "Kryvyi Rih", "Electrician",
      new Date(2020, 5, 1), new Date(2021, 5, 1), "Maintenance of electrical installations at metallurgical plants."),
    new Work("ISP SunLine", "Kryvyi Rih", "Cabling installer",
      new Date(2016, 3, 19), new Date(2020, 2, 1), ("Works for connecting new subscribers to the Internet network, works " +
        "on troubleshooting. Experience with optical fiber."))
  ]
}
