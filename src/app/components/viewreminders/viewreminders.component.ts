import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewreminders',
  templateUrl: './viewreminders.component.html',
  styleUrls: ['./viewreminders.component.css']
})
export class ViewremindersComponent {
  constructor(private service:UserService,private router:Router){
    
  }

 
}
