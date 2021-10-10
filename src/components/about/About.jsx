import React, { Component } from 'react'
import * as SectionsStyled from '../plans/SectionsStyled'
import AboutImage from '../../image/AboutImage.svg';
export default class About extends Component {
    render() {
        return (
            <SectionsStyled.InfoContainer lightBg>
                <SectionsStyled.InfoWrapper>
                    <SectionsStyled.AboutInfoRow >
                        <SectionsStyled.Column1>
                            <SectionsStyled.TextWrapper>
                                <SectionsStyled.TopLine>
                                    About Us
                                </SectionsStyled.TopLine>
                                <SectionsStyled.Heading>
                                    Through our storing  solutions,
                                    we help e-commerce platforms and their customers reach their goals
                                    by delivering the necessary logistics services. 
                                    Our goal is to help our clients achieve their goals 
                                    by delivering the best possible service.
                                    Through our technology and processes, 
                                    we can provide our clients with a better and faster order processing process.
                                </SectionsStyled.Heading>
                            </SectionsStyled.TextWrapper>
                        </SectionsStyled.Column1>
                        <SectionsStyled.Column2>
                            <SectionsStyled.ImgWrap>
                                <SectionsStyled.Img src={AboutImage} alt="" />
                            </SectionsStyled.ImgWrap>
                        </SectionsStyled.Column2>
                    </SectionsStyled.AboutInfoRow>
                </SectionsStyled.InfoWrapper>
            </SectionsStyled.InfoContainer>
        )
    }
}
