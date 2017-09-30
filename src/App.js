import React from 'react';
import {red400, orange500, brown900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route} from 'react-router-dom';
import history from 'utils/history';
import Task from 'routes/Task/Task';
import Description from 'routes/Description/Description';
// import Header from './components/Header/Header';
import PropTypes from 'prop-types';
import 'styles/main.css';

// Make material-ui happy
import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin(); MUST go after all imports! and be invoked only once
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: brown900,
    primary1Color: red400,
    primary2Color: orange500,
  },
  appBar: {
    height: 50,
  },
});

// const App = () => {

class App extends React.Component {

  // childContextTypes: {
  //  muiTheme: PropTypes.object,
  // },

 // getDefaultProps() {
 //   return {
 //     themeManager: new Material.Styles.ThemeManager();
 //   }
 // },

 getChildContext() {
   return {
     muiTheme: muiTheme
    //  muiTheme: PropTypes.object,
    //  muiTheme: this.props.muiTheme
   }
 }

  render() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history} basename="/">
        <div>
          <Route exact path="/" component={Task}/>
          <Route path="/description" component={Description}/>
        </div>
      </Router>
    </MuiThemeProvider>
  );
  }
};


// Header.childContextTypes = {
//   muiTheme: PropTypes.object.isRequired,
// };
App.childContextTypes = {
  muiTheme: PropTypes.object
};


export default App;
