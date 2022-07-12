const username: string | number = 101 ;

const sum = (a:number, b:number) =>
{
  return a + b;
}

sum(1,5);


class Person
{
  private age: number;
  lastName:string;

  constructor(age: number, lastName: string)
  {
    this.age = age;
    this.lastName = lastName;
  }
}

class Person2
{
  constructor(public age:number, public lastName: string){}
}


const nico = new Person(20, 'Molina')

nico.lastName;
