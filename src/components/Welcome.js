import {useState, useEffect} from 'react';

export default function Welcome(props){
    console.log("mensaje",props)
    const [counter,setCounter] = useState(0);
    const [semaforo, setSemafaro] = useState(false);
    const { message,name }=props;
    useEffect(() =>{
        console.log("useEfect",semaforo)
    },[semaforo])

    const contar = ()=>{
        console.log("Entrando en la funcion de contar");
        setCounter(counter+1);
        setSemafaro(!semaforo)
    };
    console.log(semaforo)

    return (
    <div>
        <p>Hello,{name}</p>
        <p>{message}</p>
        <h2>Contador de React con Hooks</h2>
        <h4>El número del contador es {counter}</h4>
        <p>El semaforo esta en color {semaforo ? "red" : "green"}</p>
        <button type="submit" onClick={contar}>
            Sumar contador
        </button>
    </div>
    );
}