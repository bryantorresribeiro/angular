import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  items = [{name:"bryan"}, {name:"lele"}, {name:"bessa"}]

  constructor() { 
		this.teste();
	}

	teste(){
		console.log("oioioiooi")
	}

}

//criamos os dados que vao receber no app no arquivo do ts, com isso nao a necessidade de importe dentro do html do app
//quando criamos um função colocamos ela dentro de um construtor 
