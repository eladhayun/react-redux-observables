import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default props => (
  <MuiThemeProvider>
    <div className="app">
      <AppBar
        title="React Redux Observables"
        className="app-bar"
        showMenuIconButton={false}
      />
      <div className="root-container">{props.children}</div>
    </div>
  </MuiThemeProvider>
);
