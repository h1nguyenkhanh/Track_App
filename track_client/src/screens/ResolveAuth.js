import { useEffect, useContext } from 'react'
import { Context as authContext} from '../context/authContext'

const ResolveAuth = () => {
    const { tryLocalSignin } = useContext(authContext)

    useEffect(()=> {
        tryLocalSignin();
    }, [])

    return null
}

export default ResolveAuth
