import './User.css'
import {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {signOut} from 'firebase/auth'
import {auth} from '../../../firebase-config'

const User = (props) => {

    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const logOut = async () => {
        await signOut(auth)
    }

    if (props) {
        return <div>
            <button onClick={logOut}>Logout</button>
        </div>
    }
}

export default User