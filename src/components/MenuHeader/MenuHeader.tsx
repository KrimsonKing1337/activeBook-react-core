import * as styles from './MenuHeader.scss';

export type MenuHeaderProps = {
  label: string;
};

export const MenuHeader = ({ label }: MenuHeaderProps) => {
  return (
    <>
      <div className={styles.Header}>
        {label}
      </div>
    </>
  );
};
