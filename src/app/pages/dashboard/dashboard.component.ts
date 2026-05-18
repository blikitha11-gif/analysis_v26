import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CreditCard, Users, UserCheck } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  readonly CreditCard = CreditCard;
  readonly Users = Users;
  readonly UserCheck = UserCheck;

  campusData = [
    { name: 'AJCKKCHMC', admissions: 8, firstTerm: '97', dropouts: 121, totalRegistrations: 1105 },
    { name: 'AJCEKCHMC', admissions: 8, firstTerm: '176', dropouts: 27, totalRegistrations: 202 },
    { name: 'AET2', admissions: 0, firstTerm: '70', dropouts: 12, totalRegistrations: 82 }
  ];

  tabs = ['SCHOOL', 'JUNIOR', 'DEGREE', 'COMPETITIVE', 'PG', 'NURSING', 'LAKSHYA', 'ITSCHOOL'];
}
