export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class Company {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor( company: ICompany ) {
    this.name = company.name;
    this.catchPhrase = company.catchPhrase;
    this.bs = company.bs;
  }
}
