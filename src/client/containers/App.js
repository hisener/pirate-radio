import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { deepOrange500 } from 'material-ui/styles/colors'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import ActiveRadio from './ActiveRadio'
import Content from './Content'

// import RadioContainer from './components/RadioContainer'
import { title } from '../../config'

const styles = {
  container: {
    textAlign: 'center'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const RightIconMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <FlatButton
      target='_blank'
      href='https://github.com/hisener/pirate-radio'
      label='GitHub'
    />
  </IconMenu>
)

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.container}>
      <AppBar
        title={title}
        showMenuIconButton={false}
        iconElementRight={<RightIconMenu />}
      />
      <ActiveRadio />
      <Content />
    </div>
  </MuiThemeProvider>
)

export default App
