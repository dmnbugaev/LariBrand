"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// рекурсивный рендер
function Field({ path, value, onChange, uploadFile }) {

  const isImageKey = (key)=> key.toLowerCase().includes("image") || key.toLowerCase().includes("img")

  // массив
  if (Array.isArray(value)) {
    // определяем шаблон объекта для "нового"
    let template = null
    if (value.length > 0 && typeof value[0] === "object") {
      template = Object.fromEntries(Object.keys(value[0]).map(k=>[k,""]))
    }

    return (
      <div style={{ border:"1px solid #eee", padding:12, marginBottom:12 }}>
        <b>{path}</b>

        {value.map((item, i)=>(
          <div key={i} style={{ marginLeft:12, marginTop:12, position:"relative", padding:"8px 12px", border:"1px solid #ddd" }}>
            
            {/* удаление элемента */}
            <button
              style={{position:"absolute", top:4, right:4, background:"red", color:"#fff", border:"none", padding:"2px 6px", cursor:"pointer"}}
              onClick={()=>{
                const copy = [...value]
                copy.splice(i,1)
                onChange(copy)
              }}
            >x</button>

            <Field
              path={`${path}[${i}]`}
              value={item}
              onChange={(v)=>{
                const copy = [...value]
                copy[i] = v
                onChange(copy)
              }}
              uploadFile={uploadFile}
            />
          </div>
        ))}

        <button
          style={{marginTop:12}}
          onClick={()=> onChange([...value, template !== null ? template : ""])}
        >
          + добавить элемент
        </button>
      </div>
    )
  }

  // объект
  if (typeof value === "object" && value !== null) {
    return (
      <fieldset style={{ border:"1px solid #ccc", padding:12, marginBottom:12 }}>
        <legend>{path||"root"}</legend>
        {Object.entries(value).map(([k,v])=>(
          <Field
            key={k}
            path={path ? `${path}.${k}` : k}
            value={v}
            onChange={(nv)=> onChange({ ...value, [k]:nv })}
            uploadFile={uploadFile}
          />
        ))}
      </fieldset>
    )
  }

  // простое поле
  return (
    <div style={{ marginBottom:12 }}>
      <label style={{display:"block",marginBottom:4}}>{path}</label>

      {/* если сейчас фото */}
      {typeof value === "string" && value.startsWith("http") ? (
        <div>
          <img src={value} style={{maxWidth:200,display:"block",marginBottom:8}} />

          <div style={{display:"flex", gap:8}}>
            <input type="file" onChange={e=>uploadFile(path, e.target.files[0])} />

            <button
              type="button"
              onClick={()=> onChange("")}
            >
              ⇄ текст
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* текстовое поле */}
          <textarea
            style={{display:"block", width:"100%", height:60}}
            value={value}
            onChange={e=>onChange(e.target.value)}
          />

          <div style={{display:"flex", gap:8, marginTop:6}}>

            <input type="file" onChange={e=>uploadFile(path, e.target.files[0])} />

            {value !== "" && (
              <button type="button" onClick={()=> onChange("")}>
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

  useEffect(()=>{
    if (typeof window === "undefined") return

    const isAdmin = sessionStorage.getItem("admin") === "1"

    if (!isAdmin) {
      router.replace("/admin/login")
    } else {
      setAuth(true)
    }
  },[])

  useEffect(()=>{
    if(!auth) return
    fetch("/api/content")
      .then(r => r.json())
      .then(json => setData(json))
      .catch(err => console.error("Ошибка /api/content:", err))
      .finally(()=> setLoading(false))
  }, [auth])

  async function uploadFile(key, file) {
    const form = new FormData()
    form.append("file", file)

    const r = await fetch("/api/upload", { method:"POST", body:form })
    const json = await r.json()

    // в key приходит типа "hero_image" или "keratin_and_botox.hero.image"
    // надо разложить key и обновить nested объект
    setData(prev=>{
      const copy = structuredClone(prev)

      let p = key.replace(/\[(\d+)\]/g,".$1").split(".") // hero, image
      let last = p.pop()
      let obj = p.reduce((o,k)=> o[k], copy)
      obj[last] = json.url

      return copy
    })
  }

  async function save() {
    await fetch("/api/content", {
      method:"POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(data)
    })
    alert("сохранено")
  }

  if(!auth) return null
  if (loading) return "загрузка..."
  if (!data) return "нет данных"

  return (
    <div style={{padding:20}}>
      <Field
        path=""
        value={data}
        onChange={v=>setData(v)}
        uploadFile={uploadFile}
      />
      <button style={{marginTop:20, padding:"10px 20px"}} onClick={save}>Сохранить</button>
    </div>
  )
}
