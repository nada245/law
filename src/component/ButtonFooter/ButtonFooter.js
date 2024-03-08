import React from 'react'
import '../ButtonFooter/ButtonFooter.css'
import arrowLeft from '../ButtonFooter/img_arrow_left.svg'
const ButtonFooter = () => {
    return (
        <div>
            <div className='footer1'>
                <div>

                    <a href='/' style={{ textDecoration: "none", background: "#0e152c", color: "white", fontWeight: "bold", fontSize: "30px" }}>انضم الينا</a>

                    <img style={{ position: "relative", right: "160px", top: "-2px" }} src={arrowLeft} alt="" />

                </div>
                <div>
                    <a href='/' style={{ textDecoration: "none", background: "#0e152c", color: "white", fontWeight: "bold", fontSize: "30px" }}> اسال محامي</a>

                    <img style={{ position: "relative", right: "180px", top: "-1px" }} src={arrowLeft} alt="" />



                </div>
            </div>
        </div>
    )
}

export default ButtonFooter