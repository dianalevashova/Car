import Link from 'next/link';
import css from './Btn.module.css';

interface BtnProps {
  path: string;
  name: string;
}

export default function Btn({ path, name }: BtnProps) {
  return (
    <Link href={path} className={css.btn}>
      {name}
    </Link>
  );
}
