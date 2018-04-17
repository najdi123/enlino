import React, { Component } from 'react';
import './cards2.css';
import pic1 from '../images/pic (3).jpg';
import pic2 from '../images/pic (4).jpg';
import pic3 from '../images/pic (3).png';
import pic4 from '../images/pic (1).png';


class FlexPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row small">
                    <div className="card col-xs-12 col-md-6 col-lg-3" >
                        <img className="card-img-top" src={pic1} alt="Card image cap" />
                            <div className="card-block">
                                <h4 className="card-title">بورس و تحلیل تکنیکال</h4>
                                <p className="card-text">بورس، اوراق بهادار، تحلیل</p>
                            </div>
                    </div>
                    <div className="card col-xs-12 col-md-6 col-lg-3" >
                        <img className="card-img-top" src={pic2} alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">دروس دانشگاهی </h4>
                            <p className="card-text">تدریس، پروژه</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-md-6 col-lg-3" >
                        <img className="card-img-top" src={pic3} alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">کنکور و دبیرستان</h4>
                            <p className="card-text">تدریس، تست، مشاوره</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-md-6 col-lg-3" >
                        <img className="card-img-top" src={pic4} alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">نرم افزارهای مهندسی</h4>
                            <p className="card-text">آموزش مقدماتی نرم افزار</p>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default FlexPage;