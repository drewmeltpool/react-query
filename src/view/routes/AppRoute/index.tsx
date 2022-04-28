import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Page from 'src/view/pages';
import * as Layout from 'src/view/layouts';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout.Common />}>
        <Route path="*/:username" element={<Page.User />} />
        <Route path="*" element={<Page.Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
