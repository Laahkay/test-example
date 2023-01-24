import { Navigate , Outlet} from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { history } from '_helpers';

export { PrivateRoute };




function PrivateRoute() {
   // please decode token and check if its valid
   const token = localStorage.getItem('token');
   //  const  authUser  = token;
        return token ? <Outlet /> : <Navigate to="/"  />
}