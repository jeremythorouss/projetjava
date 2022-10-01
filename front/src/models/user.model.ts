//user.model.ts
export class User {
  id: bigint | null;
  Name: string;
  Email: string;
  Birthdate: Date;

  constructor(id: bigint | null, Name: string, Email: string, Birthdate: Date) {
    this.id = id;
    this.Name = Name;
    this.Email = Email;
    this.Birthdate = Birthdate;
  }
}
