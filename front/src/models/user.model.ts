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
  /*public static void getUserById(int id) throws SQLException {
  UserDao dao = new UserDao();
  Users[] = this.UserDao.getUsers();//This return a List or users
  User user = user.stream()
    .filter(user -> user.getId() == id)// filter the user by id
    .findFirst()// if find then return the first
    .orElseGet(User::new);// else return new User()
}*/
}
