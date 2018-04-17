
import React, { Component } from 'react';
import './parallax.css';
// import pic1 from '../images/01.jpg';
// import pic2 from '../images/02.jpg';
// import pic3 from '../images/03.jpg';
// import pic4 from '../images/04.jpg';
// import Navbar from "./Navbar";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";
import Cards1 from "./cards1";
import Cards2 from "./cards2";



class Parallax extends Component {
    render() {
        return (

            <div>





                <div className="pic1" style={{}}>
                    <div className="ptext ctext">
                        <h1>خلاقیت، نوآوری، ایده پردازی</h1>
                        <h1>ENLINO ENGINEERING SOLUTION CO.</h1>
                        <p className="container">
                            همواره در پی ارائه مطالب و دانشی که در طی دوران زندگی خود کسب کردم و استفاده مفید از آنها بوده ام. بعد از تلاش بسیار و انجام کارهایی که به نوعی بسیار متفاوت از هم بودند و تحقیق و پرسش از صاحب نظران و شاغلین در امور مربوطه و همکاری با دوستان متخصص بفکر گردآوری مجموعه ای فنی در جهت آموزش و خدمات افتادم که این وبگاه حاصل این فکر و اندیشه است. مفتخرم که با دانش خود و همکاران و دوستان در ضمینه های مختلف آماده ارائه خدمات مهندسی و پروژه ای و همچنین امور آموزشی با راه‌کارهای نوین  و بروز هستیم که همواره در حال توسعه آن بکمک همین دوستان عزیز است. در حال حاضر مواردی که قابلیت انجام دارند در زیر لیست شده اند که میتوانید با کلیک بر روی منوهای بالا اطلاعات کاملتری نسبت به آن کسب کنید و در صورت نیاز نسبت به تماس، مشاوره و انجام آن اقدام فرمایید تا بتوانیم خدمتی به شما انجام دهیم. تلاش همواره بر نوآوری و استفاده از روشهای نوین مبتنی بر سادگی و کیفیت میباشد تا با کمترین هزینه بیشترین بازدهی حاصل شود تا شما رضایت تمام و کمال را داشته باشید که خود بهترین بازاریابی و توسعه کسب و کار و همچنین افتخار و تجربه و اعتباری برای ماست.</p>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>خدمات مهندسی</h2>

                </section>

                <div className="pimg3">

                        <Cards1/>

                </div>

                <section className="section section-dark">
                    <h2>دوره های آموزشی</h2>

                </section>

                <div className="pic3">

                        <Cards2/>

                </div>

            </div>
        );
    }
}

export default Parallax;