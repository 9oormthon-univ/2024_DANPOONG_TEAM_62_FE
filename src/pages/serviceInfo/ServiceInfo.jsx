import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = () => {
    return (
        <div className="service-info-container">
            <h1 className="service-info-title">서비스 소개</h1>
            <div className="service-cards">
                <div className="service-card">
                    <h2>여름지기란?</h2>
                    <p><span className="bold-text">'여름지기'</span>는 청년농부의 순우리말입니다.</p>

                </div>
                <div className="service-card">
                    <h2>어떤 웹사이트인가요?</h2>
                    <p>저희 <span className="bold-text">‘새싹 여름지기'</span>는 농업을 도전하는, 그리고 농업에 종사하고 있는 
청년들을 대상으로 한 커뮤니티입니다.</p>
                </div>
                <div className="service-card">
                    <h2>어떤 기능이 있나요?</h2>
                    <p>저희 사이트는 청년농부에게 <span className="bold-text">주거, 일자리, 커뮤니티 등 다양한 리소스</span>를 
제공하며 <span className="bold-text">지역 불균형 문제와 청년 문제 해결</span>을 위해 노력하고 있습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;
