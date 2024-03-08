import React from 'react'
import logo from "../Inputs/img_group_47927.svg"
import '../Inputs/Input.css'
const Input = () => {
    return (
        <div className='mainInputs'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='inputs'>
                <div style={{ position: "relative", right: "-4%" }}>
                    <input style={{ background: "#0e152c", color: "white", alignItems: "end", outline: "none", marginRight: "20px", padding: "2%", borderRadius: "5px", textAlign: "end" }} type="text" placeholder="*البريد الالكتروني" />
                    <input style={{ background: "#0e152c", color: "white", alignItems: "end", outline: "none", borderRadius: "5px", padding: "2%", textAlign: "end" }} type="email" placeholder="*الاسم" />
                </div>
                <div>
                    <textarea style={{ background: "#0e152c", color: "white", outline: "none", margin: "20px", width: "446px", height: "70px", borderRadius: "5px", textAlign: "end", padding: "2%" }} type="text" placeholder="...اكتب رسالتك هنا" />
                </div>
            </div>
        </div>
    )
}

export default Input