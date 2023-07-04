import React from 'react'
import Input from './Input'

const InputMemo = React.memo(Input) // not making much difference only for setShow state

function Accordion({ data, handleToggle, setShow}) {
    console.log(data)
    return (
        <>
            <div className='accordion'>
                <div className='accordion-show' onClick={() => handleToggle(data.id)}>
                    <span>{data.name}</span>
                    <span>⬇</span>
                </div>
                
                <div className='accordion-hide'
                    style={{
                        height: data.isOpen ? '0' : '100px', opacity: data.isOpen ? '0' : '1', zIndex: data.isOpen ? '-1' : '1'
                    }} >
                    <InputMemo />
                </div>
            </div>

        </>
    )
}

export default Accordion