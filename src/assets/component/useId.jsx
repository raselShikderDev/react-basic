import {useId} from 'react'

export default function UseId() {
  
    const para = useId()
  
    return (
        <div>
            <p id={para + 'p1'}>Para 01</p>
            <p id={para + 'p2'}>Para 02</p>
            <p id={para + 'p3'}>Para 03</p>
            <p id={para + 'p4'}>Para 04</p>
    </div>
  )
}
