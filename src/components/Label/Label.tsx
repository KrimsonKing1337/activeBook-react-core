import * as styles from './Label.module.scss';

export type LabelProps = {
  label: string;
};

export const Label = ({ label }: LabelProps) => {
  return (
    <div className={styles.Label}>
      {label}
    </div>
  );
};
