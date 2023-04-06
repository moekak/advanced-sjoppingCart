import React, {useState, useEffect} from 'react'
import {onAuthStateChanged} from "firebase/auth";
import { auth} from '../../firebase'
import Top from './Top'




const Store = () => {
    const [user, setUser] = useState();
    

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });
  return (
    <div className="store-container">
        {user? (
            <div className="text">
                lll
            </div>
        ): (
            <div className="text">
                
                <Top/>
            </div>
        )}
    </div>
  )
}

export default Store