//salle.model.ts
export class Salle {
  id: bigint | null;
  name: string;
  photo: string | null;
  capacite: bigint
  equipement:string


  constructor(id: bigint | null, name: string, photo: string, capacite: bigint, equipement:string) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.capacite = capacite;
    this.equipement = equipement;
  }
}
