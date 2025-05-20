
export interface CarType {
  id: string;
  make: string;
  model: string;
  year: number;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  engineSize: number;
  transmission: 'Automatic' | 'Manual';
  mileage: number;
  price: number;
  monthlyPayment: number;
  discountedPrice?: number;
  discountedMonthly?: number;
  specialOffer: boolean;
  auction?: boolean;
  forSale?: boolean;
  image: string;
}

// Sample car listing data
export const carListingData: CarType[] = [
  {
    id: '1',
    make: 'Ford',
    model: 'Ranger',
    year: 2019,
    fuelType: 'Petrol',
    engineSize: 2.5,
    transmission: 'Automatic',
    mileage: 242000,
    price: 720000,
    monthlyPayment: 48715,
    discountedPrice: 850000,
    specialOffer: true,
    forSale: true,
    image: '/lovable-uploads/68ad44f7-db28-47d3-9073-3d47411d671b.png'
  },
  {
    id: '2',
    make: 'Subaru',
    model: 'Forester',
    year: 2000,
    fuelType: 'Petrol',
    engineSize: 2.0,
    transmission: 'Automatic',
    mileage: 182645,
    price: 470000,
    monthlyPayment: 33292,
    discountedPrice: 550000,
    specialOffer: true,
    forSale: true,
    image: '/lovable-uploads/df29c2f1-4e43-488a-9cde-d1471917c7d4.png'
  },
  {
    id: '3',
    make: 'Suzuki',
    model: 'Alto',
    year: 2013,
    fuelType: 'Petrol',
    engineSize: 0.7,
    transmission: 'Automatic',
    mileage: 355000,
    price: 350000,
    monthlyPayment: 21731,
    discountedPrice: 450000,
    specialOffer: true,
    forSale: true,
    image: '/lovable-uploads/70d494f9-9b20-4c29-b3d7-6e1accc8d54b.png'
  },
  {
    id: '4',
    make: 'Toyota',
    model: 'Mark X',
    year: 2010,
    fuelType: 'Petrol',
    engineSize: 2.5,
    transmission: 'Automatic',
    mileage: 114747,
    price: 740000,
    monthlyPayment: 51498,
    discountedPrice: 850000,
    specialOffer: true,
    auction: true,
    image: '/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png'
  },
  {
    id: '5',
    make: 'Nissan',
    model: 'Note',
    year: 2015,
    fuelType: 'Petrol',
    engineSize: 1.2,
    transmission: 'Automatic',
    mileage: 188535,
    price: 680000,
    monthlyPayment: 47323,
    discountedPrice: 750000,
    specialOffer: true,
    forSale: true,
    image: '/lovable-uploads/b347dcbf-1702-4575-881d-0ead96b1289e.png'
  },
  {
    id: '6',
    make: 'Subaru',
    model: 'Legacy',
    year: 2007,
    fuelType: 'Petrol',
    engineSize: 2.0,
    transmission: 'Automatic',
    mileage: 209196,
    price: 640000,
    monthlyPayment: 45334,
    discountedPrice: 700000,
    specialOffer: true,
    auction: true,
    image: '/lovable-uploads/86bf36f4-2b7c-4662-af5a-fe1e64fff45b.png'
  },
];
