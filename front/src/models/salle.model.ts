//salle.model.ts
export class Salle {
  id: number | null;
  name: string;
  photo: bigint | null;
  capacite: bigint
  equipement:string;


  constructor(id: number | null, name: string, photo: bigint, capacite: bigint, equipement:string) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.capacite = capacite;
    this.equipement = equipement;
  }
}
