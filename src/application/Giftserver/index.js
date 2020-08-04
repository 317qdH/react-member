import React,{useState,memo,useMemo,useCallback} from 'react';

function SubCounter({onClick,data}){
    console.log('SubCounter render');
    return (
        <button onClick={onClick}>{data.number}</button>
    )
}
SubCounter = memo(SubCounter);
export  default  function Giftserver(){
    console.log('Counter render');
    const [name,setName]= useState('计数器');
    const [number,setNumber] = useState(0);
    const data =useMemo(()=>({number}),[number]);
    const addClick = useCallback(()=>{
        setNumber(number+1);
    },[number]);
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <SubCounter data={data} onClick={addClick}/>
        </>
    )
}


  
// export default React.memo(Giftserver)