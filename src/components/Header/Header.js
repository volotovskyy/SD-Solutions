import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import gotoLink from 'utils/gotoLink';


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {open:false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {

    const styles = {
      title: {
        flex: 'none',
        margin: '0px auto',
        cursor: 'pointer'
      }
    }

    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={() => gotoLink('/')}>Task</MenuItem>
          <MenuItem onTouchTap={() => gotoLink('/description')}>Description</MenuItem>
        </Drawer>
        <AppBar
          title='SD Solutions'
          titleStyle={styles.title}
          onTitleTouchTap={() => gotoLink('/')}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}

Header.contextTypes = {
  muiTheme: PropTypes.object,
}

export default Header;
