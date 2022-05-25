import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminWaiting, setAdminWaiting] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://stark-bayou-71570.herokuapp.com/admin/${email}`, {
                method:'GET',
                 headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                } 
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminWaiting(false);
            })
        }
    }, [user])

    return [admin, adminWaiting]
}

export default useAdmin;