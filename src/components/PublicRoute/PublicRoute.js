import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {getIsLoggedIn} from '../../redux/auth/authSelectors'

export default function PublicRoute({children, restricted = false, redirectTo = '/', ...routeProps}) {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const shouldRedirect = isLoggedIn && restricted
    return (
        shouldRedirect ? <Navigate to={redirectTo}/> : children
    )
}