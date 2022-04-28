import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Typography } from 'src/view/common';

export const Common: React.FC = () => {
  return (
    <Container size="md">
      <Typography
        variant="primary"
        align="center"
        tag="h1"
        title="Github Searcher"
      />
      <Outlet />
    </Container>
  );
};
