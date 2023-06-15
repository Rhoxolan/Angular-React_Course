import { Component } from '@angular/core';
import { Certificate } from './Certificate';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  Certificates: Certificate[] = [
    {Name: "Cisco IT Essentials", Year: new Date(2021, 0, 1)},
    {Name: "Cisco CCNA Introduction to Networks", Year: new Date(2021, 0, 1)}
  ]
}
