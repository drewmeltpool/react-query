import React from 'react';
import AppRoutes from 'src/view/routes/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { Query } from 'src/view/hoc';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Query>
        <AppRoutes />
      </Query>
    </BrowserRouter>
  );
};

export default App;
