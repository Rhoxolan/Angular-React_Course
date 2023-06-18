import { Component, OnInit } from '@angular/core';
import { Certificate } from './Certificate';
import { CertificatesService } from './certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
  providers: [CertificatesService]
})
export class CertificatesComponent implements OnInit {
  Certificates: Certificate[];

  constructor(private certificatesService: CertificatesService) {
    this.Certificates = [];
  }

  ngOnInit() {
    this.Certificates = this.certificatesService.Certificates;
  }
}
