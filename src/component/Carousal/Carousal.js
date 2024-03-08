import React from 'react';
import img1 from '../Carousal/img_frame_47856.png';
import img2 from '../Carousal/img_rectangle_440.png';
import "../Carousal/Carousal.css"
const Carousal = () => {
    return (

        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">

                    <img style={{ width: "100vw", height: "70vh" }} src={img1} class="d-block w-100" alt="..." />
                    <div style={{ position: "relative", top: "-20rem", textAlign: "center", color: "white" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "80px" }}>القاهره</h1>
</div>
                </div>
                <div className="carousel-item">
                    <img style={{ width: "100vw", height: "70vh" }} src={img2} class="d-block w-100" alt="..." />
                    <div style={{ position: "relative", top: "-20rem", textAlign: "center", color: "white" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "80px" }}>دبي</h1>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev" >
                <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
                <span className="visually-hidden" >Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden" >Next</span>
            </button>
        </div>


    )
}

export default Carousal;

