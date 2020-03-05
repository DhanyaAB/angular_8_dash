import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
// import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit() {
  }
  toggleSidebarPin() {
   this.DataService.toggleSidebarPin();
 }
 toggleSidebar() {
   this.DataService.toggleSidebar();
 }


}
