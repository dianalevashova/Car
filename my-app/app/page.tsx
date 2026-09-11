import styles from './page.module.css';
import { Metadata } from 'next';
import Hero from './components/Hero/Hero';

export const metadata: Metadata = {
  title: 'RentalCar - Find Your Perfect CaR',
  description: 'Rent the car of your dreams for your next road trip adventure.',
};

export default function Home() {
  return (
    <main>
      <div className={styles.page}>
        <Hero />
      </div>
    </main>
  );
}
