import React from 'react';
import { useField } from 'formik';

import styles from './Input.module.scss';

export interface IInputProps {
  name: string;
  placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({ name, placeholder }) => {
  const [field] = useField(name);

  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} placeholder={placeholder} {...field} />
    </div>
  );
};
