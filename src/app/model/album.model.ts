export interface Album {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  },
  phone: string;
  website: string;
  company: {
    name: string;
  }
};
