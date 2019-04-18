import React from 'react'
import { connect } from 'react-redux'

import { logOut } from './state/auth'

const App = (props) => (
  <div>
    <button
      onClick={props._logOut}
    >
      LOG OUT
    </button>
    SECRET CONTENT
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    _logOut: () => dispatch(logOut()),
  }
}

export default connect (
  null,
  mapDispatchToProps
)(App)
