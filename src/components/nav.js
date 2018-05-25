import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import Topbar from'../subComponents/topbar';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render(){
    // var result  = this.props.homeLink;

    return(
     <div>
         <Toolbar>
              <ToolbarGroup style="width:100%" firstChild={true}>
                  <div>
                     <img
                       src="src/images/smartCat-icon.png"
                       size={100}/>
                 </div>
                  <Link to={'/dash'}><ToolbarTitle text = "Dashboard"/></Link>

                  <Link to={'/meta'}><ToolbarTitle text="Metatags"/></Link>
              </ToolbarGroup>

              <ToolbarGroup lastChild={true}>
                  <ToolbarTitle text="Logout"/>
                  <ToolbarTitle text="Documentation"/>
                  <ToolbarTitle text="Help"/>
              </ToolbarGroup>
          </Toolbar>
     </div>
   )
  }
}
// <Link to={'/dash'}><ToolbarTitle text = {result}/></Link>
