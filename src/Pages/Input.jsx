import { useState } from 'react'



function Input() {
    console.log('input')

    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handle = (e) => {
        setValue(e.target.value)
    }



    return (
        <div>
            <div className='inputs'>
                <div className='input-container'>
                    <label htmlFor='1'> set timeout:</label>
                    <input id='1' type="number" onInput={(e) => handle(e)} value={value} step="1" min={0} max="50" />
                </div>
                <input
                    onChange={(e) => handleChange(e)}
                    type="range" value={value} min="1" max="50" step="1" name="1" className="range" />
            </div>

         
        </div>
    )
}

export default Input