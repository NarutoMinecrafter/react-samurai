import React, { Suspense, ComponentType } from 'react'
import Preloader from '../components/common/Preloader'

function WithSuspense<T>(Component:ComponentType){return(props:T)=> <Suspense fallback={<Preloader />} ><Component {...props} /></Suspense>}

export default WithSuspense