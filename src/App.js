import React, { useEffect } from 'react';
import { Spinner, Button, Checkbox } from '@salesforce/design-system-react';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.scss';
import { fetchRequests } from './modules/requests/actions';
import { toggleButtonStatus } from './modules/ui/actions';

const App = ({ requestList, showSpinner, fetchRequests, showButton, toggleButtonStatus }) => {
  useEffect(() => {
    // fetchRequests();
  }, [fetchRequests]);

  const handleToggleButton = (e) => {
    toggleButtonStatus();
  };

  return (
    <div className="App">
      <Header userName="My Username" />
      <div className="slds-m-top_xx-large slds-p-top_xx-large">
        <div className="slds-x-small-buttons_horizontal slds-align_absolute-center">
          {showButton && <Button variant="brand">Button</Button>}
        </div>
        <div className="slds-x-small-buttons_horizontal slds-align_absolute-center">
          <Checkbox
            labels={{
              label: 'Show/Hide Button',
            }}
            onChange={handleToggleButton}
          ></Checkbox>
        </div>

        {showSpinner && <Spinner size="large" variant="base" assistiveText={{ label: 'Main Frame Loading...' }} />}
      </div>
    </div>
  );
};

App.propTypes = {};

const mapStateToProps = (state) => ({
  requestList: state.requests,
  showSpinner: state.ui.showSpinner,
  showButton: state.ui.showButton,
});

export default connect(mapStateToProps, { fetchRequests, toggleButtonStatus })(App);
