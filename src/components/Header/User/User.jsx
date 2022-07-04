import './User.css'
import {signOut} from 'firebase/auth'
import {auth} from '../../../firebase-config'

const User = (props) => {
    const logOut = async () => {
        await signOut(auth)
    }

    if (props) {
        return <div>
            {props.test?.email}
            <button onClick={logOut}>Logout</button>
        </div>
    }
}

export default User