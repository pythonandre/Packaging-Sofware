import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [NavbarComponent, SidebarComponent, CommonModule, MatIconModule],
})
export class NavbarComponent {
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
      this.sidebarOpen = false;
  }

}