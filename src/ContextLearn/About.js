import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export default function About() {
    const {value} = useContext(UserContext)

    return (
        <div>
            <h3>You are on About page</h3>
            <div>{JSON.stringify(value, null)}</div>
        </div>
    )
}
