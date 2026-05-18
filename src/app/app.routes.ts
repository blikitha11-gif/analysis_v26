import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdmissionReportComponent } from './pages/admission-report/admission-report.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'reports/admission', component: AdmissionReportComponent },
  { path: 'admission/:path', component: GenericPageComponent },
  { path: 'transport/:path', component: GenericPageComponent },
  { path: 'payroll/:path', component: GenericPageComponent },
  { path: 'employee/:path', component: GenericPageComponent },
  { path: 'students/:path', component: GenericPageComponent },
  { path: 'attendance/:path', component: GenericPageComponent },
  { path: 'late-arrival/:path', component: GenericPageComponent },
  { path: 'exams/:path', component: GenericPageComponent },
  { path: 'progress-report/:path', component: GenericPageComponent },
  { path: 'sms/:path', component: GenericPageComponent },
  { path: 'fees/:path', component: GenericPageComponent },
  { path: '**', redirectTo: '' }
];
