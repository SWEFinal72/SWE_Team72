
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faFilePen, faUserGear, faUserPlus, faRightFromBracket} from "@fortawesome/react-fontawesome"
import {useNavigate,Link,useLocation} from 'react-router-dom'
import { faSignOutAlt as farRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react'
import { useSendLogoutMutation } from '../Features/auth/authApiSlice'

import useAuth from '../hooks/useAuth'

const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/

const DashHeader = () => {
const  { isEmployee, isAdmin } = useAuth()

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

// const onNewNoteClicked = () => navigate('/dash/notes/new')
// const onNewUserClicked = () => navigate('/dash/users/new')
// const onNotesClicked = () => navigate('/dash/notes')
// const onUsersClicked = () => navigate('/dash/users')

const onLogoutClicked = () => sendLogout()

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

    const errClass = isError ? "errmsg" : "offscreen"

    let buttonContent
    if(isLoading) {
        buttonContent = <p>Logging Out...</p>
    } else {
        buttonContent = (
            <>
                {logoutButton}
            </>
        )
    }

    const content = (
        <>
        <p className={errClass}>{error?.data?.message}</p>

        <header className="dash-header">
            <div className={`dash-header__container${dashClass}`}>
                <Link to="/">
                    <h1 className="dash-header__title">Roadster Rentals</h1>
                </Link>
                <nav className="dash-header__nav">
                {buttonContent}
                    <ul className="dash-header__list">

                        <li className="dash-header__item">
                            <Link to="user_reservations">Reservations</Link>
                        </li>
                      
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )

    return content
}
export default DashHeader

// maybe put a state here to determine which links to show or route to go to