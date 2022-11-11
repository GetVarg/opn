import { useEffect, useState } from "react"
const getTask() {
    const [carregando, setCarregando]=useState(true)
    const [dados, setDados]=useState({})

    useEffect(
        ()=>(
            fetch('http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/')
                .then ((resp) => resp.json())
                .then ((json)=>setDados(json))
                .catch(()=>alert("fudeu"))
                .finally(()=>setCarregando(false))
        ),{}
    )
    return dados;
}