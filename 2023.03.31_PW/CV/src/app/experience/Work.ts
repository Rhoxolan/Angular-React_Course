export class Work {
  Company: string;
  City: string;
  Position: string;
  DateOfEmployment: Date;
  DateOfCompletion: Date;
  Experience: string;

  constructor(company: string, city: string, position: string, dateOfEmployment: Date,
    dateOfCompletion: Date, experience: string) {
    this.Company = company;
    this.City = city;
    this.Position = position;
    this.DateOfEmployment = dateOfEmployment;
    this.DateOfCompletion = dateOfCompletion;
    this.Experience = experience;
  }

  getEmploymentTime(): [number, number] {
    let diff = Math.floor(this.DateOfCompletion.getTime() - this.DateOfEmployment.getTime());
    let yearDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let monthDiff = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    return [yearDiff, monthDiff];
  }
}
