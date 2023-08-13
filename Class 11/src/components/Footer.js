import { useContext } from 'react'
import UserContext from '../utils/userContext'
const Footer = () => {
  const { user } = useContext(UserContext)
  return (
    <h4 className="p-6 m-5 bg-slate-400">
      This site is developed by {user.name} - {user.login}
    </h4>
  )
}

export default Footer
