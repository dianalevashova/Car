import css from './LoadMore.module.css';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function LoadMore({ onClick, isLoading }: LoadMoreButtonProps) {
  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={css.button}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
}
