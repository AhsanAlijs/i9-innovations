import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUser } from "../config/firebase";
import ForbiddenPage from "../pages/403";

export default function Protect({ children, role }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // getUser(user.uid).then((doc) => {setUser({ id: doc.id, ...doc.data()})})
        // setUser(localStorage.getItem('usertype'));
      } else {
        setUser(null);
        navigate('/', { replace: true });
      }
    });

    return unsubscribe;
  }, []);

  if (!user) return null;

  // if (!role.includes(user.type)) return <ForbiddenPage />

  return (
    <>
      {children}
    </>
  )
}