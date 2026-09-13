import { Metadata } from 'next';
import CatalogClient from './CatalogClient';
import css from './page.module.css';
export const metadata: Metadata = {
  title: 'Catalog- rent car',
  description: 'Browse and filter avalible cars for  rent on RentalCar',
};

export default function CatalogPage() {
  return (
    <div className={css.layout}>
      <CatalogClient />;
    </div>
  );
}
