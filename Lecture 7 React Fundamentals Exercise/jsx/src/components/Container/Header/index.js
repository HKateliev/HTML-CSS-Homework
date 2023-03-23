import { StyledImage } from '../../../styles/app.css';
import { StyleHeader } from './style.css';
import React from 'react';
import { Row, Col } from 'react-flexa';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { StyledTextLine } from './style.css';

export const Header = ({ logoWidth }) => {
    const history = useHistory();

    return (
        <StyleHeader>
            <Row gutter='0px'>
                <Col xs={`${logoWidth}px`} gutter='0px'>
                    <StyledImage
                        src={logo}
                        onClick={() => {
                            history.push('/');
                        }}
                        cursor='pointer'
                        width={logoWidth}
                        height={logoWidth}
                    />
                </Col>

                <Col
                    xs={`calc(100vw - ${logoWidth}px)`}
                    gutter='0px'
                    display='flex'
                    style={{ alignContent: 'center', padding: '10px', alignItems: 'center' }}
                >
                    <StyledTextLine>Digitalizing agriculture worldwide</StyledTextLine>
                </Col>
            </Row>
        </StyleHeader>
    );
};
