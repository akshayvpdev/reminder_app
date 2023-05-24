import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  regform=this.fb.group({
    email:['',[Validators.required]],
    name:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  constructor(private service:UserService,private router:Router,private fb:FormBuilder){

  }

  onSubmit(){
    let email=this.regform.value.email
    let name=this.regform.value.name
    let password=this.regform.value.password
    if(this.regform.valid){
      console.log(this.regform.value)
      let res=this.service.register(email,name,password)
      res.subscribe((data:any)=>{
        if(res){
          alert(data.message);
          this.router.navigateByUrl('login');
        }
      })
    }
  

  }

}
