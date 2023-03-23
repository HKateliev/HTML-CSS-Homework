import React, { useState } from 'react';
import { Row, Col } from 'react-flexa';
import { StyledImage } from '../../../styles/app.css';
import { StyledSideBarOption } from './style.css';
import { useHistory } from 'react-router-dom';
import arrow from '../../../assets/arrow.png';

export const SideBar = ({ logoWidth }) => {
    const history = useHistory();

    const optionImageWidth = logoWidth / 3;

    const menuOptions = [
        { label: 'Form', route: '/form' },
        { label: 'Table', route: '/table' }
    ];

    const [options, setOptions] = useState(menuOptions);

    const hadleOptionClick = (label) => {
        setOptions((prev) =>
            prev.map((item) => ({
                ...item,
                background: item.label === label ? '#E9EFF4' : 'transparent'
            }))
        );
    };

    return (
        <Row gutter='0px' style={{ background: 'white' }}>
            <Col
                xs={`${logoWidth}px`}
                gutter='0px'
                style={{
                    justifyContent: 'center',
                    height: `calc(100vh - ${logoWidth}px)`
                }}
            >
                {options.map((option) => (
                    <StyledSideBarOption
                        key={option.label}
                        onClick={() => {
                            history.push(option.route);
                            hadleOptionClick(option.label);
                        }}
                        background={option.background || 'transparent'}
                    >
                        <StyledImage
                            src={arrow}
                            width={`${optionImageWidth}px`}
                            height={`${optionImageWidth}px`}
                            style={{ marginTop: '10px' }}
                        />
                        <StyledSideBarOption>{option.label}</StyledSideBarOption>
                    </StyledSideBarOption>
                ))}
            </Col>
        </Row>
    );
};
