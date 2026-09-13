import type { Metadata } from 'next';
import css from './page.module.css';
export const metadata: Metadata = {
  title: 'Car Details - RentCar',
  description: 'View camper details, gallery, reviews and book your trip.',
};

export default function CamperDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={css.layout}>{children}</div>;
}
