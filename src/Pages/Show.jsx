import React from 'react'

function Show({setShow}) {
  return (
    <section className='show'>
        <button onClick={()=>setShow(false)}>back</button>
        why u killing ur eyes 
        do exercise
    </section>
  )
}

export default Show