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
}
