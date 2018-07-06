import { IUserAddress, UserAddress } from './user-address.model';
import { Company, ICompany } from './company.model';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: Company;

  constructor( user: IUser ) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.address = new UserAddress(user.address);
    this.phone = user.phone;
    this.website = user.website;
    this.company = new Company(user.company);
  }
}
