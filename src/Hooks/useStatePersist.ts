import { useEffect, useState,Dispatch,SetStateAction } from "react";

type Response<T> =[
    T,
    Dispatch<SetStateAction<T>>
]
export default function useStatePersist<T>(key:string,value:any):Response<T>{
    const [state, setState ] = useState(
        ()=>{
            const storageValue = localStorage.getItem(key)

            if(storageValue){
                return JSON.parse(storageValue)
            }

            return value
        }
    )

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state))
    },[key,state])


    return [state,setState]

}