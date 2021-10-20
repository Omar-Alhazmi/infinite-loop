import React, { Component } from 'react'
import * as SectionsStyled from '../plans/SectionsStyled'
import AboutImage from '../../image/AboutImage.svg';
export default class About extends Component {
    render() {
        return (
            <SectionsStyled.InfoContainer lightBg id='About'>
                <SectionsStyled.InfoWrapper>
                    <SectionsStyled.AboutInfoRow >
                        <SectionsStyled.Column1>
                            <SectionsStyled.TextWrapper>
                                <SectionsStyled.Heading>
                                    About Us
                                </SectionsStyled.Heading>
                                <SectionsStyled.Subtitle darkText>
                                    Through our storing  solutions,
                                    we help e-commerce platforms and their customers reach their goals
                                    by delivering the necessary logistics services. 
                                    Our goal is to help our clients achieve their goals 
                                    by delivering the best possible service.
                                    Through our technology and processes, 
                                    we can provide our clients with a better and faster order processing process.
                                </SectionsStyled.Subtitle>
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
