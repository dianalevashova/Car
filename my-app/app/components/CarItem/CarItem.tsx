import { CarDetails } from '@/types/cars';
import css from './CarItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface CarItemProps {
  car: CarDetails;
  isPriority?: boolean;
}
export default function CarItem({ car, isPriority }: CarItemProps) {
  const {
    id,
    year,
    brand,
    model,
    img,
    type,
    rentalPrice,
    description,
    rentalCompany,
    location,
    mileage,
  } = car;
  return (
    <li className={css.oneCard}>
      <div className={css.imageWrapper}>
        <Image
          src={img}
          alt={description}
          fill
          className={css.image}
          priority={isPriority}
          sizes="244px"
        />
      </div>
      <div className={css.info}>
        <div className={css.title}>
          <h3 className={css.name}>
            {brand} <span className={css.model}>{model}</span>, {year}
          </h3>
          <p className={css.price}>${rentalPrice}</p>
        </div>
      </div>
      <div className={css.descr}>
        <ul className={css.tags}>
          <li className={css.tag}> {location.city}</li>
          <li className={css.tag}> {location.country}</li>
          <li className={css.tag}>{rentalCompany}</li>
        </ul>
        <ul className={css.tags}>
          <li className={css.tag}>{type}</li>
          <li className={css.tag}>{mileage.toLocaleString('en-US')} km</li>
        </ul>
      </div>
      <Link
        href={`/catalog/${id}`}
        rel="noopener noreferrer"
        className={css.ReadMore}
      >
        Read more
      </Link>
    </li>
  );
}
