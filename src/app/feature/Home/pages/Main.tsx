import * as React from 'react';
import { HolaMundo } from '../components/HolaMundo';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <HolaMundo msg="Presentación Demo Front en React"/>
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
