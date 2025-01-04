import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; 
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { BoxWithShadowComponent } from './box-with-shadow/box-with-shadow.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar (toggleSidebar)="toggleSidebar()"></app-navbar>
    <app-sidebar [isOpen]="sidebarOpen"></app-sidebar>
    <div [ngClass]="{'overlay': sidebarOpen}" (click)="closeSidebar()" (closeSidebar)="closeSidebar"></div>
    <app-box-with-shadow></app-box-with-shadow>
    <app-testimonies></app-testimonies>
  `,
  styleUrls: ['./app.component.scss', '/navbar/navbar.component.scss'],
  imports: [NavbarComponent, SidebarComponent, CommonModule, BoxWithShadowComponent, TestimoniesComponent],
})
export class AppComponent {
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
      this.sidebarOpen = false;
  }
}