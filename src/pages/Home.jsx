import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Employee from './Employee';
import AddEditEmployee from './AddEditEmployee';
import { useTranslation } from 'react-i18next';
import DashboardIcon from '../components/icons/DashboardIcon';

const Home = () => {
  const [key, setKey] = useState('home');

  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title={t('nav.articles')}>
          <Employee />
        </Tab>
        <Tab eventKey="profile" title={t('home.addedit')}>
          <div className="d-flex items-center gap-3">
            <DashboardIcon />
            <p>{t('home.details')}</p>
          </div>
          <AddEditEmployee />
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};

export default Home;
