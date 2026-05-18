import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  LayoutDashboard, 
  Users, 
  Bus, 
  CreditCard, 
  UserSquare, 
  UserPlus,
  MessageSquare, 
  PieChart,
  ChevronRight,
  Search,
  Settings,
  Calendar,
  Recycle,
  BookOpen,
  Mail,
  PlusCircle,
  Users2
} from 'lucide-angular';
import { cn } from '../../../lib/utils';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() isOpen = true;

  // Icons
  readonly Search = Search;
  readonly ChevronRight = ChevronRight;

  openMenus: string[] = ['Admission'];

  cn = cn;

  menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { 
      icon: UserPlus, 
      label: 'Admission', 
      path: '#',
      children: [
        { label: 'Add Enquiry', path: '/admission/enquiry' },
        { label: 'Add Student', path: '/admission/student' },
        { label: 'Section Wise', path: '/admission/section-wise' },
        { label: 'PRO Master', path: '/admission/pro-master' },
        { label: 'PRO Report', path: '/admission/pro-report' },
        { label: 'Section Master', path: '/admission/section-master' },
      ]
    },
    { 
      icon: Bus, 
      label: 'Transport', 
      path: '#',
      children: [
        { label: 'Vehicle Routes', path: '/transport/routes' },
        { label: 'Vehicle Stops', path: '/transport/stops' },
      ]
    },
    { 
      icon: CreditCard, 
      label: 'Payroll', 
      path: '#',
      children: [
        { label: 'Add Employees', path: '/payroll/add' },
        { label: 'Employees', path: '/payroll/list' },
        { label: 'Biometric Statement', path: '/payroll/biometric' },
      ]
    },
    { 
      icon: UserSquare, 
      label: 'Employee', 
      path: '#',
      children: [
        { label: 'Subject Map', path: '/employee/subject-map' },
        { label: 'Staff Recruitment', path: '/employee/recruitment' },
      ]
    },
    { 
      icon: Users2, 
      label: 'Students', 
      path: '#',
      children: [
        { label: 'Strength', path: '/students/strength' },
        { label: 'Hallticket Download', path: '/students/hallticket' },
        { label: 'Student Section Map', path: '/students/section-map' },
        { label: 'Deleted Students', path: '/students/deleted' },
        { label: 'Student Additional Data', path: '/students/additional' },
        { label: 'Degree Counselling Report', path: '/students/counselling' },
        { label: 'Students Data Update', path: '/students/update' },
        { label: 'Virtual Group Students', path: '/students/virtual-group' },
      ]
    },
    { 
      icon: Users, 
      label: 'Attendance', 
      path: '#',
      children: [
        { label: 'Attendance', path: '/attendance/daily' },
        { label: 'Late Arrivals', path: '/attendance/late' },
        { label: 'Period Wise', path: '/attendance/period' },
      ]
    },
    { 
      icon: Recycle, 
      label: 'Late Arrival', 
      path: '#',
      children: [
        { label: 'Day wise', path: '/late-arrival/day' },
        { label: 'Count Wise', path: '/late-arrival/count' },
      ]
    },
    { 
      icon: BookOpen, 
      label: 'Exams', 
      path: '#',
      children: [
        { label: 'List', path: '/exams/list' },
        { label: 'Import', path: '/exams/import' },
        { label: 'Subject Wise Entry', path: '/exams/subject-entry' },
        { label: 'Update Marks', path: '/exams/update-marks' },
        { label: 'Jumbling Marks Entry', path: '/exams/jumbling-entry' },
        { label: 'Jumbling Marks Update', path: '/exams/jumbling-update' },
        { label: 'Delete Marks', path: '/exams/delete-marks' },
        { label: 'Section Report', path: '/exams/section-report' },
        { label: 'Class Report', path: '/exams/class-report' },
      ]
    },
    { 
      icon: PieChart, 
      label: 'Progress Report', 
      path: '#',
      children: [
        { label: 'Multiple', path: '/progress-report/multiple' },
        { label: 'Generate', path: '/progress-report/generate' },
        { label: 'Admission Report', path: '/reports/admission' },
      ]
    },
    { 
      icon: Mail, 
      label: 'Send SMS', 
      path: '#',
      children: [
        { label: 'Mobile SMS', path: '/sms/mobile' },
      ]
    },
    { icon: PlusCircle, label: 'Add Other Fees', path: '/fees/other' },
  ];

  toggleMenu(label: string) {
    if (this.openMenus.includes(label)) {
      this.openMenus = this.openMenus.filter(l => l !== label);
    } else {
      this.openMenus.push(label);
    }
  }
}
