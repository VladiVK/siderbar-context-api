import React, {useContext} from 'react'
import {FaBars} from 'react-icons/fa'

import { AppContext, useGlobalContext } from './context';

const Home = () => {

    // const data = useContext(AppContext);
    // or ...
    // const data = useGlobalContext();
    // console.log(data);
    const {
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
    } = useGlobalContext();
    

    return (
        <main>
            
            <button className='sidebar-toggle' onClick={openSideBar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
               show modal
            </button>

        </main>
    )
}

export default Home
