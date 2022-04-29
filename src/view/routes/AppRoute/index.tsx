import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Page from 'src/view/pages';
import * as Layout from 'src/view/layouts';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout.Common />}>
        <Route path="react-query" element={<Page.Home />} />
        <Route path="react-query/:username" element={<Page.User />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
