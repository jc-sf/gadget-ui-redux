import React, { useEffect } from 'react';
import { Spinner } from '@salesforce/design-system-react';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.scss';
import { fetchRequests } from './modules/requests/actions';

const App = ({ requests, showSpinner, fetchRequests }) => {
  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  return (
    <div className="App">
      <Header userName="My Username" />
      <div className="slds-m-top_xx-large slds-p-top_xx-large">
        <div className="slds-x-small-buttons_horizontal slds-align_absolute-center">
          {showSpinner && <Spinner size="large" variant="base" assistiveText={{ label: 'Main Frame Loading...' }} />}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {};

const mapStateToProps = (state) => ({
  requestList: state.requests,
  showSpinner: state.ui.showSpinner,
});

export default connect(mapStateToProps, { fetchRequests })(App);
