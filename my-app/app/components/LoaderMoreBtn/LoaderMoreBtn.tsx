import css from './LoaderMoreBtn.module.css';

export default function LoaderMoreBtn() {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <span className={css.spinner} />
        <div className={css.info}>
          <p className={css.title}>Loading cars...</p>
          <p className={css.subtitle}>
            Please wait while we fetch the best cars for you
          </p>
        </div>
      </div>
    </div>
  );
}
