import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  title = 'my-first-project';
  items = [{name:"bryan"}, {name:"lele"}, {name:"bessa"}]

  constructor() { 
		this.teste();
	}

  values = new FormControl('');

	teste(){
		console.log(this.values.value)
	}

  ngOnInit(): void {
  }

}
