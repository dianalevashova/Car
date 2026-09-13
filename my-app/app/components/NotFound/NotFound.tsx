import css from './NotFound.module.css';
import Image from 'next/image';

interface NotFoundProps {
  onClearFilters: () => void;
}
export default function NotFound({ onClearFilters }: NotFoundProps) {
  return (
    <div className={css.wrapper}>
      <Image
        src="/images/notFound.png"
        alt="No campers found"
        width={414}
        height={388}
        className={css.illustration}
      />

      <h2 className={css.title}>No cars found</h2>
      <p className={css.subtitle}>
        We couldn`t find any cars that match your
        <br /> current filters.Try changing your search
        <br /> criteria or reset filters.
      </p>

      <div className={css.actions}>
        <button type="button" onClick={onClearFilters} className={css.clearBtn}>
          Reset filters
        </button>
      </div>
    </div>
  );
}
