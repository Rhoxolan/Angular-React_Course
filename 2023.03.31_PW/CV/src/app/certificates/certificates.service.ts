import { Injectable } from '@angular/core';
import { Certificate } from './Certificate';

@Injectable()
export class CertificatesService {
  readonly Certificates: Certificate[] = [
    { Name: "Cisco IT Essentials", Year: new Date(2021, 0, 1) },
    { Name: "Cisco CCNA Introduction to Networks", Year: new Date(2021, 0, 1) }
  ]
}
