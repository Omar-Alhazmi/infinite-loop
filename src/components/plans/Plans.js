import React, { Component } from 'react'
import '../styles/splans.css'
import * as SectionsStyled from './SectionsStyled'
import { Link } from 'react-router-dom'

export default class Plans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SubscriptionPlan: ""
        }
    }

    render() {
        return (
            <SectionsStyled.PlanContainer id='Plans'>
                <SectionsStyled.InfoWrapper>
                    <SectionsStyled.CardRow >
                        <h2 className="heading-secondary">
                            Storage Plans
                        </h2>
                        <SectionsStyled.PlanCardContainer>
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front-1">
                                        <div className="card__title card__title--1">
                                            <i className="fas fa-paper-plane"></i>
                                            <h4 className="card__heading">Basic</h4>
                                        </div>

                                        <div className="card__details">
                                            <ul>
                                                <li>Unconditioned Space</li>
                                                <li>piking</li>
                                                <li>Storing</li>
                                                <li>Packaging 1 SAR/ pack</li>
                                                <li>35 sar /Local Delivering</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-value basic">5 SAR Per 1 Cubic Meters / Day</p>
                                            </div>
                                            <Link to="/SignUp" className="btn btn--white">Select</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-1-of-3">
                                <div className="card active" >
                                    <div className="card__side card__side--front-2">
                                        <div className="card__title card__title--2">
                                            <i className="fas fa-plane"></i>
                                            <h4 className="card__heading">Plus</h4>
                                        </div>

                                        <div className="card__details">
                                            <ul>
                                                <li>50  Square Meter</li>
                                                <li>piking</li>
                                                <li>UnPacking</li>
                                                <li>Packaging 0.50SAR/ pack</li>
                                                <li>100 Delivering Credit</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-value">10K SAR/mo*</p>
                                            </div>
                                            <Link to="/SignUp" className="btn btn--white">Select</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front-3">
                                        <div className="card__title card__title--3">
                                            <i className="fas fa-rocket"></i>
                                            <h4 className="card__heading">Pro</h4>
                                        </div>

                                        <div className="card__details">
                                            <ul>
                                                <li>100  Square Meter</li>
                                                <li>piking</li>
                                                <li>UnPacking</li>
                                                <li>Free Packaging</li>
                                                <li>500 Delivering Credit</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-value">15K SAR/mo*</p>
                                            </div>
                                            <Link to="/SignUp" className="btn btn--white">Select</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SectionsStyled.PlanCardContainer>
                    </SectionsStyled.CardRow>
                </SectionsStyled.InfoWrapper>
            </SectionsStyled.PlanContainer>
        )
    }
}
