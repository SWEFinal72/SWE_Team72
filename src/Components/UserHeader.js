
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate,Link,useLocation} from 'react-router-dom'
import { faSignOutAlt as farRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react'
import { useSendLogoutMutation } from '../Features/auth/authApiSlice'

const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/

const DashHeader = () => {
const navigate = useNavigate()
const pathname = useLocation()

const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useSendLogoutMutation()


useEffect(() => {
    if (isSuccess) {
        navigate('/')
    }
} ,[isSuccess, navigate])

const onLogoutClicked = () => sendLogout()

if(isLoading) return <div>Logging out...</div>

if (isError) return <div>An error occurred: {error}</div>

let dashClass = null
if (DASH_REGEX.test(pathname) && !NOTES_REGEX.test(pathname) && !USERS_REGEX.test(pathname)){
    dashClass = 'dash-header__cointainer--small'
}


const logoutButton = (
    <button 
    className='icon-button'
    onClick={onLogoutClicked}
    title='Logout'
    > 
    <FontAwesomeIcon icon={farRightFromBracket}/>
    </button>

)





    const content = (
        <header className="dash-header">
            <div className={`dash-header__container${dashClass}`}>
                <Link to="/">
                    <h1 className="dash-header__title">Roadster Rentals</h1>
                </Link>
                <nav className="dash-header__nav">
                {logoutButton}
                    <ul className="dash-header__list">

                        <li className="dash-header__item">
                            <Link to="user_reservations">Reservations</Link>
                        </li>
                      
                    </ul>
                </nav>
            </div>
        </header>
    )

    return content
}
export default DashHeader

// maybe put a state here to determine which links to show or route to go to