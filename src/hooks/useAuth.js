import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../Features/auth/authSlice'
import { jwtDecode } from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isEmployee = false
    let isAdmin = false
    let status = "user"

    if(token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isEmployee = roles.includes('employee')
        isAdmin = roles.includes('admin')

        if(isEmployee) status = "employee"
        if(isAdmin) status = "admin"

        return { username, roles, status, isEmployee, isAdmin }
    }

    return { username: '', roles: [], isEmployee, isAdmin, status }
}
export default useAuth