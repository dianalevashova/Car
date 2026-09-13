'use client';
import Loader from '@/app/components/Loader/Loader';
import { useCarId } from '@/hooks/useCarsId';
import { useParams } from 'next/navigation';
import css from './page.module.css';
import Image from 'next/image';
import FormBooking from '@/app/components/FormBooking/FormBooking';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: car, isLoading, isError } = useCarId(id);

  if (!id || isLoading) return <Loader />;
  if (isError || !car) return <p>Car not found</p>;

  return (
    <main className={css.main}>
      <div className={css.leftBlock}>
        <Image
          src={car.img}
          alt={car.description}
          className={css.image}
          width={640}
          height={512}
          sizes="640px"
        />
        <FormBooking carId={car.id} />
      </div>
      <div className={css.rightBlock}></div>
    </main>
  );
}
