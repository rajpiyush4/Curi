import React, { useRef, useState } from 'react'
import { accordionData } from './AccordionData';
import Accordion from './Accordion';

let timeoutId = null;


function Tab({ setShow }) {
    console.log('Tab')
    const inpRef = useRef(null)
    const [acc, setacc] = useState(accordionData)

    function handleStart() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setShow(true)
        }, value + 100);
    }

    function handleToggle(id) {
        console.log(id)
        const data = acc.map((data) => {
            if (id == data.id) {
                
                return {
                    ...data,
                    isOpen: !data.isOpen,
                }
            }
            return {
                ...data,
                isOpen: true,
            };
        })
        console.log("data", data)
        setacc(data)

    }

    return (
        <section className='tab' ref={inpRef}>

            <div className='tab-controls'>
                {acc.map((data, index) => {
                    return (
                        <Accordion key={index} data={data} acc={acc} setShow={setShow} handleToggle={handleToggle} />
                    )

                })}

            </div>

            <footer className='tab-footer'>
                <button onClick={handleStart} type='button'>start</button>
            </footer>
        </section>
    )
}

export default Tab