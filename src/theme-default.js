import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';
import {blueGrey50} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 67
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;
