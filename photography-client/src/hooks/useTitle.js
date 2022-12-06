import { useEffect } from "react"


const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - QUICK SNAP`
    },[title])
}

export default useTitle;