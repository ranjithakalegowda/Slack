import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sidebar: boolean = false;
  constructor(){}

  openNav() {
   document.getElementById("mySidebar").style.width = "150px";
   document.getElementById("main").style.marginLeft = "150px";
 }

  closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
 }

 toggelSideBar(){
   if(this.sidebar){
      this.closeNav();
      this.sidebar = false;
   }else{
     this.openNav();
     this.sidebar = true;
   }
 }
 ngOnInit(){}
}
