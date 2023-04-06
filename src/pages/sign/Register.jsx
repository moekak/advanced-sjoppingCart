
import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, provider } from '../../firebase'
import {signInWithPopup} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './SignIn';
import { Link } from "react-router-dom";

const Register = () => {
    const [user] = useAuthState(auth);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
      };
      const [registerEmail, setRegisterEmail] = useState("");
      const [registerPassword, setRegisterPassword] = useState("");

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
        } catch(error) {
          alert("正しく入力してください");
        }
      };
  return (
    <div className="register container">
        <div className="sign-in">
        {user ? (
            <> 
                <button onClick={() => auth.signOut()}>
                  <p>sign out</p>
                </button>
             
            </>
        ): (
            <>
                <Link to='/sign-in' className='link'> Menu</Link>
                <div className="email">
                    <h1>新規登録</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label>メールアドレス</label>
                        {/* ↓「value」と「onChange」を追加 */}
                        <input
                            name="email"
                            type="email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        </div>
                        <div>
                        <label>パスワード</label>
                        {/* ↓「value」と「onChange」を追加 */}
                        <input
                            name="password"
                            type="password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                        </div>
                        <button>登録する</button>
                    </form>
                </div>
                <div className="google">
                <button onClick={signInWithGoogle}>
                    <p>グーグルでサインイン</p>
                </button>
            
                </div>
            </>
            
        )}
    
      </div>
        
    </div>
  )
}

export default Register