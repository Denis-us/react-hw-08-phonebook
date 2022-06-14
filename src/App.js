import { useEffect, lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/authOperations';
import {getIsFetchingCurrentUser} from './redux/auth/authSelectors'
import AppBar from './components/Navigation/AppBar'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute'

const HomeView = lazy(() => import('./views/HomeView/HomeView'))
const PhonebookView = lazy(() => import('./views/PhonebookView/PhonebookView'))
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView/LoginView'))
const NotFoundPage = lazy(() => import('./views/NotFoundPage/NotFoundPage'))

export default function App() {

const dispatch = useDispatch()

const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser)

useEffect(() => {
    dispatch(authOperations.getCurrentUser())
}, [dispatch])

    return (
      !isFetchingCurrentUser && (
      <>
      <AppBar/>
      
      <Suspense fallback={<p>Загружаем...</p>}>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <HomeView/>
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute restricted>
              <RegisterView/>
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute restricted redirectTo='/contacts'>
              <LoginView/>
            </PublicRoute>
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute redirectTo='/login'>
              <PhonebookView/>
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={
            <PublicRoute>
              <NotFoundPage/>
            </PublicRoute>
          }
        />
      </Routes>
      </Suspense>
      
      
      </>
      )
      
    )
  }
