import { useContext } from "react"
import { valueContext } from '../context/ContextValue'
export default function Search() {
    const { value, setValue } = useContext(valueContext)
    return (
        <>
            <h1>Search : </h1>
            <input type="text" placeholder='Search' className='form-control w-50'
                onChange={e => setValue(e.target.value)}
                value={value}
            />
        </>
    )
}
