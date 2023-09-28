import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User_Model } from 'src/app/model/interface/User_Model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      website: new FormControl(),
      address: new FormControl(),
      company: new FormControl(),
    });
  }

  ngSubmit() {
    let user: User_Model;
    /*  user.id = 11;
    user.name = this.form.value['name'];
    user.username = this.form.value['username'];
    user.phone = this.form.value['phone'];
    user.email = this.form.value['email'];
    user.website = this.form.value['website'];
    user.address = this.form.value['address'];
    user.company = this.form.value['company']; */
    console.log(this.form.value['name']);

    console.log(user);
  }
}
