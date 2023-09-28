import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
// import { {{> comandoPascal}}Router } from 'app/feature/{{comando}}/{{> comandoPascal}}Router';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/productos" component={ProductoRouter} />
        {/* <Route path="/{{comando}}s" component={ {{> comandoPascal}}Router} /> */}
      </Switch>
    </BrowserRouter>
  );
};
