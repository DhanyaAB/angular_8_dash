import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private DataService: DataService) { }
  data=[];
  trial=[];
  trial1=[];
  view=[];
  job=[];
  ngOnInit() {
    this.views()
  }
  views(){
    this.DataService.views()
        .subscribe((da:any[])=>{
          this.trial=da
          console.log(this.trial)
          localStorage.setItem("view", this.view);
        }
      )};

  getValue(arg1){
    console.log(arg1)
    this.view=arg1
    this.DataService.jobnames(arg1)
        .subscribe((da:any[])=>{
          this.trial1=da
          console.log(this.trial1)
        }
      )};

  getnumber(arg2){
    console.log(arg2)
    this.job=arg2
    this.DataService.jobbuilds(arg2)
        .subscribe((da:any[])=>{
          this.trial2=da
          console.log(this.trial2)
        }
      )};
  }
