export type CarsPrice = {
  min: number;
  max: number;
};
export interface CarsLocation {
  country: string;
  city: string;
  address: string;
}
export interface CarsList {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: number | string;
  engine: string;
  features: string[];
  rentalPrice: string;
  rentalCompany: string;
  location: CarsLocation;
  rentalConditions: string[];
  mileage: number;
  stockNumber?: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface CarsResponse {
  cars: CarsList[];
  totalCars: number;
  page: number;
  totalPages: number;
}
export type CarDetails = CarsList;
export interface CarsFilters {
  brands: string[];
  price: CarsPrice;
}
export interface BookingRequest {
  name: string;
  email: string;
  comment: string;
}
export interface BookingResponse {
  message: string;
}
