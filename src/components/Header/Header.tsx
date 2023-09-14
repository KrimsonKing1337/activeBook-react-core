import styles from './Header.scss';

export type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        {label}
      </div>
    </>
  );
};
