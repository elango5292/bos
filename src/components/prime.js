
import Spline from '@splinetool/react-spline';

import  Fromto  from "./ui/fromto.js"
import Nav from './nav.js';


export function Prime() {
    return (
        <div className=''>
           <div className='w-full h-full flex flex-col gap-y-5 mt-[10px]  absolute top-0 left-0 z-1'>
           <Nav/>
<Fromto/>
           </div>
            <div className="w-screen h-screen" >
            <Spline scene="https://prod.spline.design/q4hqRqY8xaZ07-QZ/scene.splinecode" />
 

        </div>
        </div>
    )
}