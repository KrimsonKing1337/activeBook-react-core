type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  [name: string]: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <button type="button" {...props}>
      Push me
    </button>
  );
};
