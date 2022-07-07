import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

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

  values = new FormControl('');

	teste(){
		console.log(this.values.value)
	}

}

//criamos os dados que vao receber no app no arquivo do ts, com isso nao a necessidade de importe dentro do html do app
//quando criamos um função colocamos ela dentro de um construtor 

//para pegar dados de input utilizamos a classe formControl importamos ela no typescript e tmb no app. modules

// de modo geral o app e onde fica os outros componentes

//Para usa um componente e necessario colocar o nome do componente e -app