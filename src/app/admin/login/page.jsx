"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      })

      const data = await response.json()

      if (data.ok) {
        sessionStorage.setItem("admin", "1")
        router.push("/admin")
      } else {
        setError("Неверный пароль")
      }
    } catch (err) {
      setError("Ошибка соединения")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#E1DCD8'
    }}>
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Вход в админку</h1>
        
        {error && (
          <div style={{
            color: 'red',
            background: '#E1DCD8',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Пароль:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '95%',
              padding: '10px',
              border: '1px solid #E1DCD8',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            required
            disabled={loading}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            background: loading ? '#E1DCD8' : '#891D1A',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  )
}