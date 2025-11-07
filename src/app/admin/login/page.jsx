"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  function login() {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem("admin", "1")
      router.replace("/admin")
    } else {
      alert("неверный пароль")
    }
  }

  return (
    <div style={{maxWidth:300,margin:"100px auto",textAlign:"center"}}>
      <h3>Вход в админку</h3>
      <input
        type="password"
        placeholder="пароль"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        style={{
          width:"100%",
          padding:8,
          marginBottom:10,
          border:"1px solid #ccc"
        }}
      />
      <button onClick={login}>войти</button>
    </div>
  )
}
