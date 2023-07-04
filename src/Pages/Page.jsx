import Tab from "./Tab"
import Show from "./Show"
import { useState } from "react"

function Page() {
    console.log('page')
   const [show, setShow] = useState(false)
  return (
    <main className="page">
       <Tab/>
       {show? <Show/>:''}
    </main>
  )
}

export default Page