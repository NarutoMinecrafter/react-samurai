import React, { Suspense } from 'react'
import Preloader from '../components/common/Preloader'

const WithSuspense = Component => props => <Suspense fallback={<Preloader/>} ><Component {...props} /></Suspense>

export default WithSuspense