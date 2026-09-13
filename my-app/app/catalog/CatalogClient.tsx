'use client';

import { useState } from 'react';
import { CarsQueryParams } from '../services/cars';
import { useCars } from '@/hooks/useCars';
import css from './page.module.css';
import Filters from '../components/Filters/Filters';
import Loader from '../components/Loader/Loader';
import NotFound from '../components/NotFound/NotFound';
import CarItem from '../components/CarItem/CarItem';
import LoaderMoreBtn from '../components/LoaderMoreBtn/LoaderMoreBtn';
import LoadMore from '../components/LoadMore/LoadMore';
const emptyFormValues = {
  brand: '',
  price: '',
  minMileage: '',
  maxMileage: '',
};
export default function CatalogClient() {
  const [filters, setFilters] = useState<Omit<CarsQueryParams, 'page'>>({});
  const [formValues, setFormValues] = useState(emptyFormValues);
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCars(filters);

  const cars = data?.pages.flatMap(page => page.cars) ?? [];

  const handleSearch = () => {
    setFilters({
      brand: formValues.brand || undefined,
      price: formValues.price ? Number(formValues.price) : undefined,
      minMileage: formValues.minMileage
        ? Number(formValues.minMileage)
        : undefined,
      maxMileage: formValues.maxMileage
        ? Number(formValues.maxMileage)
        : undefined,
    });
  };
  const handleClearFilters = () => {
    setFormValues(emptyFormValues);
    setFilters({});
  };
  return (
    <main className={css.main}>
      <Filters
        values={formValues}
        onChange={setFormValues}
        onSearch={handleSearch}
        onClear={handleClearFilters}
      />
      <div className={css.content}>
        {isLoading && <Loader />}
        {isError && <p>Something went wrong</p>}
      </div>
      {!isLoading && cars.length === 0 ? (
        <NotFound onClearFilters={handleClearFilters} />
      ) : (
        <>
          <ul className={css.list}>
            {cars.map((car, index) => (
              <CarItem key={car.id} car={car} isPriority={index === 0} />
            ))}
          </ul>
          {isFetchingNextPage && <LoaderMoreBtn />}
          {hasNextPage && (
            <LoadMore
              onClick={() => fetchNextPage()}
              isLoading={isFetchingNextPage}
            />
          )}
        </>
      )}
    </main>
  );
}
