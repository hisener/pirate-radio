import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { deepOrange500 } from 'material-ui/styles/colors'

import AppBar from 'material-ui/AppBar'
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

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.container}>
      <AppBar title={title} showMenuIconButton={false} />
      <ActiveRadio />
      <Content />
    </div>
  </MuiThemeProvider>
)

export default App
