import React, { Component } from 'react';
import {MdLocationOn, MdPhone} from 'react-icons/md'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import ProgressBar from '../components/progressbar/ProgressBar';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="about-content">
                                <h2>Hi, there! I'm Bongmin Shin</h2>
                                <p>I am a professional web designer from Manchester, England. 
                                    I create beautiful professional websites using best practice accessibility. 
                                    I enjoy turning complex problems into simple, beautiful and intuitive interface designs.
                                </p>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <ul>
                                            <li>
                                                <span>
                                                    <b><AiOutlineMail/> Email :</b>
                                                </span> bongmin0224@gmail.com
                                            </li>
                                            <li>
                                                <span>
                                                    <b><MdLocationOn/> Location :</b>
                                                </span>  Hobsonville, Auckland
                                            </li>
                                            <li>
                                                <span>
                                                    <b><MdPhone/> Phone No. :</b>
                                                </span> 021-257-2935
                                            </li>
                                            <li>
                                                <span>
                                                    <b><FaRegCalendarAlt/> Date of Birth :</b>
                                                </span> 24/02/1985
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <ProgressBar barText="HTML5, CSS" percentage={82}></ProgressBar>
                            <ProgressBar barText="JavaScript, ActionScript" percentage={76}></ProgressBar>
                            <ProgressBar barText="React, Redux" percentage={64}></ProgressBar>
                            <ProgressBar barText="Java" percentage={80}></ProgressBar>
                            <ProgressBar barText="Oracle, MySql, MariaDB" percentage={68}></ProgressBar>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;