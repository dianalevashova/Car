import Image from 'next/image';
import css from './Hero.module.css';
import Btn from '../Btn/Btn';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Image
        src="/images/Hero.jpg"
        alt="Car at he sunset"
        fill
        priority
        sizes="(max-width: 1440px) 100vw, 1440px"
        className={css.heroImage}
      />
      <div className={css.overlay}>
        <div className={css.content}>
          <h1 className={css.title}> Find your perfect rental car</h1>
          <p className={css.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Btn path={'/catalog'} name={'View Catalog'} />
        </div>
      </div>
    </section>
  );
}
