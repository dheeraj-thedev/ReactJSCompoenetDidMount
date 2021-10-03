import { useEffect, useState } from "react";



function LifecycleDemo() {
    // to use componentDidMount s functionality we have useEffect in 
    // funtion 
    useEffect(()=>{
        //this gets called after every render 
        console.log("Reder !")
        //componentWillUnmount can be implemented this way 
        return() => console.log("Unmounting....");
    })
    return "I am a lifecycle demo ";
}



function ParentComponent() {
    // setup a state that will result into re-render ? 
        const [random , setRandom]= useState(Math.random());
        const [mounted, setMounted]= useState(true)
        const reRender= ()=>setRandom(Math.random());
        const toggle = ()=>{
            setMounted(!mounted);

        }
        return(
            <>
            <button onClick={reRender}>Re-Render</button>
            <button onClick={toggle}>Show / Hide Lifecycle Demo</button>

            {mounted && <LifecycleDemo></LifecycleDemo>}
            </>
        )

}

export default ParentComponent