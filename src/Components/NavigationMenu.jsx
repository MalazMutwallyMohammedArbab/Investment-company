import React from 'react'
import setShowMenu from './Navigation'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="py-4 mx-3 text-center text-white font-semibold">شركة اعتمد للاستثمار</div>
            <ul className='m-auto w-[90%] text-center text-white'>
                <li>
                    <Link 
                        to="/" 
                        className="py-3 border-t border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        الرئيسية
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="py-3 border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        نبذة عنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/whatWeDo" 
                        className="py-3 border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        ما الذي نفعله
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/vision" 
                        className="py-3 border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        الرؤية
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/letter" 
                        className="py-3 border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        الرسالة
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/whyAtimid" 
                        className="py-3 border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        لماذا اعتمد للاستثمار
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="py-3 border-b border-white block"
                        onClick={() => setShowMenu(false)}
                    >
                        تواصل معنا
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;