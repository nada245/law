import React from 'react'
import './Header.css'
import imgHeader from '../Header/img_pattern.svg'

const Header = () => {
    return (
<>
            <div className='header'>

                <img className='imgheader' src={imgHeader} alt="" />

                <div className='infoHeader'>
                    <h1 style={{ color: "white", textAlign: "end", fontWeight: "bold", fontSize: "80px", padding: "40px" }} > مستوي جديد من الحلول القانونية</h1>
                    <p style={{ color: "white", fontSize: "20px", textAlign: "end", padding: "30px", position: "relative", bottom: "9%" }}>
                        باستخدام نهج مبتكر، يقدم المكتب حلاً قانونياً يُلقي الضوء على آفاق جديدة لتحديات الشركات القانونية، مما
                        يسهم في تحقيق حلول فعّالة ومستدامة</p>
                </div>

            </div>
            
</>
        
        
    )
}

export default Header