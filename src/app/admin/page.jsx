"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// рекурсивный рендер
function Field({ path, value, onChange, uploadFile }) {

  const isImageKey = (key) => key.toLowerCase().includes("image") || key.toLowerCase().includes("img")

  // массив
  if (Array.isArray(value)) {
    // определяем шаблон объекта для "нового"
    let template = null
    if (value.length > 0 && typeof value[0] === "object") {
      template = Object.fromEntries(Object.keys(value[0]).map(k => [k, ""]))
    }

    return (
      <div style={{ border: "1px solid #eee", padding: 12, marginBottom: 12 }}>
        <b>{path}</b>

        {value.map((item, i) => (
          <div key={i} style={{ marginLeft: 12, marginTop: 12, position: "relative", padding: "8px 12px", border: "1px solid #ddd" }}>
            
            {/* удаление элемента */}
            <button
              style={{ position: "absolute", top: 4, right: 4, background: "red", color: "#fff", border: "none", padding: "2px 6px", cursor: "pointer" }}
              onClick={() => {
                const copy = [...value]
                copy.splice(i, 1)
                onChange(copy)
              }}
            >
              x
            </button>

            <Field
              path={`${path}[${i}]`}
              value={item}
              onChange={(v) => {
                const copy = [...value]
                copy[i] = v
                onChange(copy)
              }}
              uploadFile={uploadFile}
            />
          </div>
        ))}

        <button
          style={{ marginTop: 12, padding: "8px 16px", cursor: "pointer" }}
          onClick={() => onChange([...value, template !== null ? template : ""])}
        >
          + добавить элемент
        </button>
      </div>
    )
  }

  // объект
  if (typeof value === "object" && value !== null) {
    return (
      <fieldset style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
        <legend>{path || "root"}</legend>
        {Object.entries(value).map(([k, v]) => (
          <Field
            key={k}
            path={path ? `${path}.${k}` : k}
            value={v}
            onChange={(nv) => onChange({ ...value, [k]: nv })}
            uploadFile={uploadFile}
          />
        ))}
      </fieldset>
    )
  }

  // простое поле
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
        {path}
      </label>

      {/* если сейчас фото */}
      {typeof value === "string" && (value.startsWith("http") || value.startsWith("/upload/")) ? (
        <div>
          <img 
            src={value} 
            style={{ maxWidth: 200, display: "block", marginBottom: 8, border: "1px solid #ddd" }} 
            alt={path}
          />

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input 
              type="file" 
              onChange={e => uploadFile(path, e.target.files[0])} 
              style={{ flex: 1 }}
            />

            <button
              type="button"
              onClick={() => onChange("")}
              style={{ padding: "5px 10px", cursor: "pointer" }}
            >
              ⇄ текст
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* текстовое поле */}
          <textarea
            style={{ display: "block", width: "100%", height: 60, padding: 8, border: "1px solid #ddd", borderRadius: 4 }}
            value={value}
            onChange={e => onChange(e.target.value)}
          />

          <div style={{ display: "flex", gap: 8, marginTop: 6, alignItems: "center" }}>
            <input 
              type="file" 
              onChange={e => uploadFile(path, e.target.files[0])} 
              style={{ flex: 1 }}
            />

            {value !== "" && (
              <button 
                type="button" 
                onClick={() => onChange("")}
                style={{ padding: "5px 10px", cursor: "pointer" }}
              >
                очистить
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}


export default function Admin() {
  const router = useRouter()

  const [auth, setAuth] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const isAdmin = sessionStorage.getItem("admin") === "1"

    if (!isAdmin) {
      router.replace("/admin/login")
    } else {
      setAuth(true)
    }
  }, [])

  useEffect(() => {
    if (!auth) return
    
    fetch("/api/content")
      .then(r => r.json())
      .then(json => setData(json))
      .catch(err => {
        console.error("Ошибка /api/content:", err)
        alert("Ошибка загрузки данных")
      })
      .finally(() => setLoading(false))
  }, [auth])

  async function uploadFile(key, file) {
    if (!file) return
    
    const form = new FormData()
    form.append("file", file)

    try {
      const r = await fetch("/api/upload", { method: "POST", body: form })
      const json = await r.json()

      if (!r.ok) {
        throw new Error(json.error || "Ошибка загрузки")
      }

      // обновляем данные
      setData(prev => {
        const copy = JSON.parse(JSON.stringify(prev)) // безопасное копирование
        
        const path = key.replace(/\[(\d+)\]/g, ".$1").split(".")
        const last = path.pop()
        let obj = copy
        
        // находим нужный объект по пути
        for (const part of path) {
          if (obj[part] === undefined) {
            obj[part] = {}
          }
          obj = obj[part]
        }
        
        // устанавливаем новое значение
        if (obj && last !== undefined) {
          obj[last] = json.url
        }
        
        return copy
      })
      
      alert("✅ Файл загружен")
      
    } catch (error) {
      console.error("Ошибка загрузки файла:", error)
      alert("❌ Ошибка загрузки файла: " + error.message)
    }
  }

  async function save() {
    if (!data) return
    
    setSaving(true)
    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error("Ошибка сохранения")
      }
      
      alert("✅ Данные сохранены")
    } catch (error) {
      console.error("Ошибка сохранения:", error)
      alert("❌ Ошибка сохранения: " + error.message)
    } finally {
      setSaving(false)
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin")
    router.replace("/admin/login")
  }

  if (!auth) return null
  if (loading) return <div style={{ padding: 40, textAlign: "center" }}>Загрузка данных...</div>
  if (!data) return <div style={{ padding: 40, textAlign: "center" }}>Нет данных</div>

  return (
    <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>
      {/* Шапка */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        paddingBottom: 20,
        borderBottom: "2px solid #eee"
      }}>
        <div>
          <h1 style={{ margin: 0 }}>Админ панель LariBrand</h1>
          <p style={{ margin: "5px 0 0 0", color: "#666" }}>
            Ключей: {Object.keys(data).length} | Редактируйте поля ниже
          </p>
        </div>
        
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={save}
            disabled={saving}
            style={{
              padding: "10px 20px",
              background: saving ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: saving ? "not-allowed" : "pointer",
              fontWeight: "bold"
            }}
          >
            {saving ? "Сохранение..." : "💾 Сохранить"}
          </button>
          
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            🚪 Выйти
          </button>
        </div>
      </div>

      {/* Основное содержимое */}
      <div style={{
        background: "white",
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 20,
        marginBottom: 20
      }}>
        <Field
          path=""
          value={data}
          onChange={setData}
          uploadFile={uploadFile}
        />
      </div>

      {/* Футер */}
      <div style={{
        textAlign: "center",
        padding: 20,
        color: "#666",
        borderTop: "1px solid #eee",
        fontSize: "0.9em"
      }}>
        <p>Админ панель LariBrand • {new Date().toLocaleDateString("ru-RU")}</p>
        <p style={{ fontSize: "0.8em", marginTop: 5 }}>
          После редактирования не забудьте нажать "Сохранить"
        </p>
      </div>
    </div>
  )
}