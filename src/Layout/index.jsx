import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const AppLayout = ({children}) => {
    const {state}  = useNavigation();
    const isLoading = state === 'loading';
    return (
        <div>
            <Header />
            {isLoading && <p>Loadind ...................................</p>}
            {!isLoading &&<Outlet />}
                {children}
            <Footer />
        </div>
    )
}

export default AppLayout