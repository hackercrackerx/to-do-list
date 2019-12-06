import { Component, OnInit } from '@angular/core';

import{Validators,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  taskForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder){
   }

  ngOnInit() {
  }

}
