import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
declare var $:any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private DataService: DataService,private router: Router) { }
  data=[];
  trial=[];
  trial1=[];
  view=[];
  job=[];
  trial2=[];
  arg1=[];
  ngOnInit() {
    this.views();
  }
  views(){
    this.DataService.views()
        .subscribe((da:any[])=>{
          this.trial=da
          // console.log(this.trial)

        }
      )};

  getValue(arg1){
    console.log(arg1)
    localStorage.setItem("build_number", arg1);



    this.DataService.jobnames(arg1)
        .subscribe((da:any[])=>{
          this.trial1=da
    this.router.navigate(["/"+arg1]);


          // console.log(this.trial1)
        }
      )};

  // getnumber(arg2){
  //   console.log(arg2)
  //   this.job=arg2
  //   this.DataService.jobbuilds(arg2)
  //       .subscribe((da:any[])=>{
  //         this.trial2=da
  //         console.log(this.trial2)
  //       }
  //     )};
  }
