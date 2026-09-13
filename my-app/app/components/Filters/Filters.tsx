'use client';

import { useCarsFilters } from '@/hooks/useCarsFilters';
import css from './Filters.module.css';

interface FilterValues {
  brand: string;
  price: string;
  minMileage: string;
  maxMileage: string;
}
interface FiltersProps {
  values: FilterValues;
  onChange: (values: FilterValues) => void;
  onSearch: () => void;
  onClear: () => void;
}
export default function Filters({
  values,
  onChange,
  onSearch,
  onClear,
}: FiltersProps) {
  const { data: options } = useCarsFilters();
  const priceOptions = options?.price
    ? Array.from(
        {
          length: Math.floor((options.price.max - options.price.min) / 10) + 1,
        },
        (_, i) => options.price.min + i * 10
      )
    : [];
  return (
    <div className={css.filters}>
      <div className={css.brand}>
        <label htmlFor="brand" className={css.brandLabel}>
          Car brand
        </label>
        <select
          id="brand"
          value={values.brand}
          onChange={e => onChange({ ...values, brand: e.target.value })}
          className={css.select}
        >
          <option className={css.optionNone} value="" disabled>
            Choose a brand
          </option>
          {options?.brands.map(brand => (
            <option className={css.option} key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={css.price}>
        <label htmlFor="price" className={css.priceLabel}>
          Price/1 hour
        </label>
        <select
          id="price"
          value={values.price}
          onChange={e => onChange({ ...values, price: e.target.value })}
          className={css.select}
        >
          <option className={css.optionNone} value="" disabled>
            Choose a price
          </option>
          {priceOptions.map(price => (
            <option className={css.option} key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <div className={css.mileage}>
        <label className={css.mileageLabel}>Car mileage / km</label>
        <div className={css.mileageInputs}>
          <input
            type="text"
            inputMode="numeric"
            placeholder="From"
            value={values.minMileage}
            onChange={e => {
              const val = e.target.value.replace(/\D/g, '');
              onChange({ ...values, minMileage: val });
            }}
            className={css.mileageInput}
          />
          <input
            type="text"
            inputMode="numeric"
            placeholder="To"
            value={values.maxMileage}
            onChange={e => {
              const val = e.target.value.replace(/\D/g, '');
              onChange({ ...values, maxMileage: val });
            }}
            className={css.mileageInput}
          />
        </div>
      </div>
      <div className={css.actions}>
        <button type="button" onClick={onSearch} className={css.searchBtn}>
          Search
        </button>
        <button type="button" onClick={onClear} className={css.clearBtn}>
          Clear filters
        </button>
      </div>
    </div>
  );
}
