// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = () => {
  const onLogout = props => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  )
}
export default LogoutButton
