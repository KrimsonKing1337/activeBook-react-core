import styles from './Label.scss';

export type LabelProps = {
  label: string;
};

export const Label = ({ label }: LabelProps) => {
  return (
    <div className={styles.label}>
      {label}
    </div>
  );
};
