import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Pages/Login/Firebase/firebase.config';

const useAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    React.useEffect(()=>{
      setIsAdmin(true);
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data=> {
        setAdmin(data.admin)
      })
      .catch(

      )
      .finally(
        setIsAdmin(false)
      )
    },[user.email, admin])
    return {
        admin,
        user,
        loading,
        isAdmin
    }
};

export default useAdmin;