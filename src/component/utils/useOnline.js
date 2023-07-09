import { useEffect, useState } from "react"

const useOnline = () => {
    const [status, setStatus] = useState(true);

    const handleOnline = ()=>{
        setStatus(true);
    }
    const handleOffline = ()=>{
        setStatus(false);
    }

    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)
    },[]);

    return status;

    return () =>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    }
}

export default useOnline;