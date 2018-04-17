import React, { Component } from 'react';
import './cards1.css';
import pic1 from '../images/pic (7).jpg';
import pic2 from '../images/pic (5).jpg';
import pic3 from '../images/pic (2).jpg';
import pic4 from '../images/pic (1).jpg';


class FlexPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row small">
                    <div className="card col-xs-11 col-md-5 col-lg-2" >
                        <img className="card-img-top" src={pic1} alt="Card image cap" />
                            <div className="card-block">
                                <h4 className="card-title">طراحی سیستم های تاسیساتی</h4>
                                <p className="card-text">طراحی سیستم های تاسیساتی و تهویه مطبوع ساختمان تهیه اقلام مورد نیاز خدمات نظارت</p>

                            </div>
                    </div>
                    <div className="card col-xs-11 col-md-5 col-lg-2" >
                        <img className="card-img-top" src={pic2} alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">آنالیز مهندسی و محاسباتی</h4>
                            <p className="card-text">محاسبات عددی
                                مدل های سیالاتی
                                مدل های همزمان سیال-جامد
                                تحلیل های آماری</p>

                        </div>
                    </div>
                    <div className="card col-xs-11 col-md-5 col-lg-2" >
                        <img className="card-img-top" src={pic3} alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">خدمات طراحی وب</h4>
                            <p className="card-text">طراحی وبسایت
                                بانک اطلاعاتی
                                سیستم های رزرواسیون
                                سیستم های انبارداری
                                سیستم های محاسباتی</p>
                        </div>
                    </div>
                    <div className="card col-xs-11 col-md-5 col-lg-2" >
                        <img className="card-img-top" src={pic4} alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">ایده پردازی</h4>
                            <p className="card-text">مشاوره
                                تحلیل سیستم ها
                                ارائه راه کارهای جدید
                                بهبود عملکرد</p>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default FlexPage;