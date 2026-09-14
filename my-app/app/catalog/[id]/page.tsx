'use client';
import Loader from '@/app/components/Loader/Loader';
import { useCarId } from '@/hooks/useCarsId';
import { useParams } from 'next/navigation';
import css from './page.module.css';
import Image from 'next/image';
import FormBooking from '@/app/components/FormBooking/FormBooking';
import { GrLocation } from 'react-icons/gr';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { BsCalendar2Week } from 'react-icons/bs';
import { IoCarSportOutline } from 'react-icons/io5';
import { BsFuelPump } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';
import { GiRoad } from 'react-icons/gi';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: car, isLoading, isError } = useCarId(id);

  if (!id || isLoading) return <Loader />;
  if (isError || !car) return <p>Car not found</p>;

  return (
    <div className={css.layout}>
      <main className={css.main}>
        <div className={css.leftBlock}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            className={css.image}
            width={640}
            height={512}
            sizes="640px"
          />
          <FormBooking carId={car.id} />
        </div>
        <div className={css.rightBlock}>
          <div className={css.title}>
            <h2 className={css.h}>
              {car.brand} {car.model}, {car.year}
            </h2>
            <span className={css.titleSpan}> Article: {car.stockNumber} </span>
          </div>

          <div className={css.location}>
            <GrLocation />
            <span className={css.locationSpan}>
              {car.location.city}, {car.location.country}
            </span>
          </div>
          <p className={css.price}>${car.rentalPrice}</p>
          <p className={css.desc}>{car.description}</p>

          <div className={css.lists}>
            <div className={css.list}>
              <h3 className={css.listTitle}>Rental Conditions: </h3>
              <ul className={css.listItems}>
                {car.rentalConditions.map((condition, index) => (
                  <li className={css.listItem} key={index}>
                    <IoIosCheckmarkCircleOutline />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.list}>
              <h3 className={css.listTitle}>Car Specifications:</h3>
              <ul className={css.listItems}>
                <li className={css.listItem}>
                  <BsCalendar2Week />
                  Year: {car.year}
                </li>
                <li className={css.listItem}>
                  <IoCarSportOutline />
                  Type: {car.type}
                </li>
                <li className={css.listItem}>
                  <BsFuelPump />
                  Fuel Consumption: {car.fuelConsumption}
                </li>
                <li className={css.listItem}>
                  <GoGear />
                  Engine: {car.engine}
                </li>
                <li className={css.listItem}>
                  <GiRoad />
                  Mileage: {car.mileage.toLocaleString('en-US')} km
                </li>
              </ul>
            </div>
            <div className={css.list}>
              <h3 className={css.listTitle}>Features</h3>
              <ul className={css.listItems}>
                {car.features.map((feature, index) => (
                  <li className={css.listItem} key={index}>
                    <IoIosCheckmarkCircleOutline />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
