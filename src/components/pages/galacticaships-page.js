import React from 'react';
import { GalacticashipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const GalacticashipsPage = ({ history }) => {
  return (
    <GalacticashipList
      onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(GalacticashipsPage);
