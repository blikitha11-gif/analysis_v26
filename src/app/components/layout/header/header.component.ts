import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, Search, MessageSquare, Grid, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  readonly Menu = Menu;
  readonly Search = Search;
  readonly MessageSquare = MessageSquare;
  readonly Grid = Grid;
  readonly Calendar = Calendar;

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  handleImageError(event: any) {
    event.target.style.display = 'none';
    event.target.parentElement.innerHTML += `
      <div class="flex items-baseline font-bold text-xl tracking-tight">
        <span class="text-white italic">Analy</span>
        <span class="text-[#f9a825]">SIS</span>
      </div>
    `;
  }
}
