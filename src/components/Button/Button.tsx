import React from 'react';

type ButtonPropType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  [name: string]: any;
}

export const Button = (props: ButtonPropType) => {
  return (
    <button type="button" {...props}>
      Push me
    </button>
  );
};
