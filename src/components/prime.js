
import Spline from '@splinetool/react-spline';

import  Fromto  from "./ui/fromto.js"


export function Prime() {
    return (
        <div className=''>
           <div className='w-full h-full bg-transparent absolute top-0 left-0 z-1'>
<Fromto/>
           </div>
            <div className="w-screen h-screen" >
            <Spline scene="https://prod.spline.design/q4hqRqY8xaZ07-QZ/scene.splinecode" />
 

        </div>
        </div>
    )
}