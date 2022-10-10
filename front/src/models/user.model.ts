//user.model.ts
export class User {
  id: bigint | null;
  name: string;
  email: string;
  birthdate: Date;

  constructor(id: bigint | null, name: string, email: string, birthdate: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
  }

  /*constructor(name: string, email: string, birthdate: Date){
    for(let Users in user) :
      this.name = name;
      this.email = email;
      this.birthdate = birthdate;
  }*/


}
