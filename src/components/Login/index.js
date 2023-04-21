// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <h1>Please Login</h1>
        <button type="submit">Login with Sample Creds</button>
      </form>
    )
  }
}

export default Login
