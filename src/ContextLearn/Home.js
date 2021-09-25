import React, {useContext} from 'react'
import { UserContext } from './UserContext'
import { login } from './Login'

export default function Home() {
    const {value, setValue} = useContext(UserContext)
    return (
        <div>
            <h3>Welcome to Home page</h3>
            <div>{JSON.stringify(value, null, 2)}</div>
            { value ? (<button onClick={() => setValue(null)}>Logout</button>) : 
            (<button 
            onClick={async () => {
                const value = await login()
             setValue(value)}}>
             Login</button>)
 }
        </div>
    )
}
