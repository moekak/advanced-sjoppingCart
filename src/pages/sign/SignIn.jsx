import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from '../../firebase'
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
        } catch(error) {
          alert("メールアドレスまたはパスワードが間違っています");
        }
      };

    /* ↓ログインを判定する設定 */
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <div className="signIn">
        {user? (
           <button onClick={() => auth.signOut()}>
           
         <p>sign out</p>
       </button>
    
            
        ): (
            <div className="signIn-container" id='signin'>
                <h1>ログインページ</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>メールアドレス</label>
                    {/* ↓「value」と「onChange」を追加 */}
                    <input
                        name="email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <label>パスワード</label>
                    {/* ↓「value」と「onChange」を追加 */}
                    <input
                        name="password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    </div>
                    <button>ログイン</button>
                </form>
            </div>

        )}
        
    </div>

    
    
  )
}

export default SignIn