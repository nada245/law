import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import logo from "../Navbar/img_logo.png"
import menu from '../Navbar/img_vector.svg'
import downicon from '../Navbar/img_ic_round_navigate_next.svg'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className='parentNav'>
                <div>
                    <img style={{ width: "30%", height: "100%" }} src={logo} alt="logo" />
                </div>

                <div className="navIcons">
                    <img style={{ borderRadius: "50px", border: "solid" }} src={downicon} alt="" />
                    <div>

                        AR
                    </div>
                    <div className='line'>

                    </div>
                    <div >
                        فروعنا
                    </div>
                </div>
                <div style={{ position: "relative", top: "10px" }}>
                    <input style={{ width: "120%", height: "50%", borderRadius: "5px", textAlign: "end", padding: "4px" }}
                        variant="fill"
                        name="search"
                        placeholder="كيف يمكنني مساعدتك ؟"

                    />
                    <RiSearchLine style={{ position: "relative", top: "-28px", right: "-10%", color: "black" }} />
                </div>
                <div>
                    {/* <RiMenu3Line style={{position:"relative",top:"25px",cursor:"pointer"}}/> */}
                    <img src={menu} alt='menu' style={{ position: "relative", top: "20px", cursor: "pointer" }} />
                </div>
                
            </div>
            
        </>
    )
}

export default Navbar