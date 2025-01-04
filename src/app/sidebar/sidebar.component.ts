import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule],
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  isModalOpen = false; // Track modal state

  onClose() {
    this.closeSidebar.emit();
  }

  openModal() {
    this.isModalOpen = true; // Open modal
  }

  closeModal() {
    this.isModalOpen = false; // Close modal
  }
}
