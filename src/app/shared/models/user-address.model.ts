import { Geo, IGeo } from './geo.model';

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export class UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;

  constructor( address: IUserAddress ) {
    this.street = address.street;
    this.suite = address.suite;
    this.city = address.city;
    this.zipcode = address.zipcode;
    this.geo = new Geo(address.geo);
  }
}
