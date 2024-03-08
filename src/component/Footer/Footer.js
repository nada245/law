import React from 'react'
import '../Footer/Footer.css'
import social from "../Footer/img_group_47917.svg"
import ButtonFooter from '../ButtonFooter/ButtonFooter'
// import arrowLeft from '../Footer/img_arrow_left.svg'
const Footer = () => {
    return (
        <>
            <div className='mainFooter'>
                {/* <div className='footer1'>
                    <div>

                        <h1>انضم الينا</h1>
                        
                        <img style={{ position: "relative", right: "90px", top: "-45px" }} src={arrowLeft} alt="" />

                    </div>
                    <div>
                        <h1> اسال محامي</h1>
                        <img style={{ position: "relative", right: "90px", top: "-45px" }} src={arrowLeft} alt="" />
                        
                    </div>
                </div> */}
                <ButtonFooter/>
                <div className='footer2'>
<div className='part1'>
<h3>فريق العمل</h3>
                        <h3>لماذا تختارنا</h3>
                        <h3>اراء العملاء</h3>
</div>
<div className='part2'>
<img src={social} alt=""/>
</div>
<div className='part3'>
<h3>اخبار وروي</h3>
                        <h3>توصلوا معانا</h3>
                        <h3> الخدمات القانونيه</h3>
                        <h3> الاستشارات القانونيه</h3>
</div>
                </div>
                <div className='footer3' style={{display:"flex",justifyContent:"space-around",color:"white"}}>
                    <h3>
خريطه الموقع
                    </h3>
                    <h3>
سياسه الخصوصيه
                    </h3>
                    <h3>
الاشعارات القانونيه
                    </h3>
                </div>
                <div className='footer4' style={{color:"white",textAlign:"center",padding:"20px"}}>
                    <p>   هو اكبر مكتب محاماة في الشرق الاوسط يعمل من خلال كيانات قانونية منفصلة ومتميزة مختلفة.
                        <br />
                        جميع حقوق النسخ والنشر محفوظة ©2024 المجموعة التجارية والبحرية للمحاماة</p>
                </div>
            </div>
        </>
    )
}

export default Footer