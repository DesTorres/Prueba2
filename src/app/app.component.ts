import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nicolo';
  age = 25;
  imagen = 'https://pbs.twimg.com/media/FRFT8ViXoAAmDF2?format=jpg&name=small';
  bntdis = true;

  Person =
  {
    name: 'Des',
    age:  25,
    avatar: 'https://pbs.twimg.com/media/FRFT8ViXoAAmDF2?format=jpg&name=small'
  }

  boton()
  {
    this.bntdis = !this.bntdis;
  }

  sedad()
  {
    this.Person.age += 1
  }

  onscroll(event: Event)
  {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
  }
}
