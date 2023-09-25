import { Address } from './Address';
import { Company } from './Company';

export interface User_Model {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  address: Address;
  company: Company;
}
