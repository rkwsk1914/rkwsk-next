import * as React from 'react';


type Props = {
  children?: React.ReactNode;
};

export const FunctionComponent: React.FC<Props> = (
  {children}
): JSX.Element => {
  return (<>{children}</>);
}
