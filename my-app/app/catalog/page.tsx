import { Metadata } from 'next';
import CatalogClient from './CatalogClient';
export const metadata: Metadata = {
  title: 'Catalog- rent car',
  description: 'Browse and filter avalible cars for  rent on RentalCar',
};

export default function CatalogPage() {
  return <CatalogClient />;
}
