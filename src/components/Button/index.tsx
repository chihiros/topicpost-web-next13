import React, { ReactNode } from 'react';
import { Button } from './Button';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

const SuccessButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} success>{children}</Button>;
};

const WarnButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} warn>{children}</Button>;
};

const ErrorButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} error>{children}</Button>;
};

const SubmitButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} submit>{children}</Button>;
};

export {
  Button,
  SuccessButton,
  WarnButton,
  ErrorButton,
  SubmitButton,
}
