import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default props => (
  <MuiThemeProvider>
    <div className="App">
      <AppBar
        title="React Redux Observables"
        className="app-bar"
        showMenuIconButton={false}
      />
      {props.children}
    </div>
  </MuiThemeProvider>
);
