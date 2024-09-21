
import { useDataContext, DataContext } from "./allData"
import {use} from "react"

export default function Home() {
    const { myName, age } = use(DataContext)
    // const { myName, age } = useDataContext()
    return <div>This is Home and my name is {myName}. a boy of {age} years old</div>;
}
