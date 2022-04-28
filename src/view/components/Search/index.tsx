import React from 'react';
import { Form, Formik } from 'formik';
import { Input, Typography } from 'src/view/common';
import { useDebouncedCallback } from 'use-debounce';

import styles from './Search.module.scss';

interface ISearchProps {
  value: string;
  setValue: (_value: string) => void;
  placeholder?: string;
  title?: string;
}

const SearchUser: React.FC<ISearchProps> = ({
  value,
  setValue,
  placeholder,
  title,
}) => {
  const debouceSearch = useDebouncedCallback(setValue, 300);

  return (
    <Formik
      initialValues={{ search: value }}
      onSubmit={({ search }) => debouceSearch(search)}
    >
      {({ submitForm }) => (
        <Form className={styles.searchForm} onChange={submitForm}>
          <Typography tag="h4" title={title} variant="text-primary" />
          <Input name="search" placeholder={placeholder} />
        </Form>
      )}
    </Formik>
  );
};

export default SearchUser;
