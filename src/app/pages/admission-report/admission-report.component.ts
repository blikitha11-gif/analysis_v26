import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-admission-report',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './admission-report.component.html',
})
export class AdmissionReportComponent {
  readonly Search = Search;

  tabs = ['SCHOOL', 'JUNIOR', 'DEGREE', 'COMPETITIVE', 'PG', 'NURSING', 'LAKSHYA', 'ITSCHOOL'];

  stats = [
    { label: 'Total Registrations', values: ['3874', '3108', '2832'] },
    { label: 'Active Registration', values: ['3759', '2893', '2640'] },
    { label: '1st Term Paid', values: ['3332', '1907', '2112'] },
    { label: 'Dropouts', values: ['144', '141', '20'] }
  ];

  reportData = [
    { sNo: 1, branch: 'APSSRP', d23: { tillDate: 339, total: 339 }, d24: { tillDate: 531, total: 531 }, d25: { tillDate: 236, total: 523 } },
    { sNo: 2, branch: 'APSSN1', d23: { tillDate: 312, total: 312 }, d24: { tillDate: 518, total: 518 }, d25: { tillDate: 305, total: 251 } },
    { sNo: 3, branch: 'APSSPD', d23: { tillDate: 212, total: 212 }, d24: { tillDate: 253, total: 253 }, d25: { tillDate: 113, total: 254 } },
  ];
}
