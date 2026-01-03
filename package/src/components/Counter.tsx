import { useCallback, useEffect, useState } from "react"

export const Counter = () => {

    const [ count, setCount ] = useState(0)

    const onHandleClick = useCallback(() => {
        setCount(count => count + 1)
    }, [ setCount ])

    useEffect(() => {
        console.log(`This count is : ${ count }`)
    }, [ count ])

    return(
        <div>
            <h1>Count : { count } </h1>
            <button onClick={ onHandleClick }>
                <span className="add-btn"> + </span>
            </button>
        </div>
    )
}