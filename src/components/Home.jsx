import React, { useState } from 'react'

function Home() {
    const[Name, Setname] = useState("")
  return (
    <div>
      <h1>forms</h1>
      <form action="">
        <input type="text" placeholder='Name' onChange={(e)=> Setname(e.target.value)} />

        <button>submit</button>
      </form>
    </div>
  )
}

export default Home
