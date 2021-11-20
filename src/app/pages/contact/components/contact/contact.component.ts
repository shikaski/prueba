import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

interface Country {
  name: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // formData= this.fb.group({
  //   name:["", Validators.required],
  //   mail:["",[Validators.required,Validators.minLength(10),Validators.email]],
  //   age:[0,[Validators.max(99),Validators.min(18)]],
  //   telefono: [0,Validators.minLength(10)]
  // })
    data:any;
    countries: Country[]=[
      {name:"Argentina"},
      {name:"Brasil"},
      {name:"Chile"},
      {name:"Ecuador"},
      {name:"Peru"},
      {name:"Bolivia"},
      {name:"Uruguay"}]

    formData = new FormGroup(
      {
        name:new FormControl(""),
        mail:new FormControl(""),
        country: new FormControl(""),
        sex:new FormControl(""),
        descont: new FormControl(true)
      }
    )
  constructor() {
   }

  ngOnInit(): void {
  }

  userMail(){
    return this.formData.get("mail");
  }
  userName(){
    return this.formData.get("name");
  }
  resetForm(){
    this.formData.setValue({
      name:"",
      mail:"",
      country:"",
      sex:"",
      descont:true
    })
  }
  submitForm(){
    this.data = this.formData;
    console.log(this.data);
  }


}
