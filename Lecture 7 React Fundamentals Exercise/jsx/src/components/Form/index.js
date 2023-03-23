import { Buttons } from '../Buttons';
import React, { useState, useMemo } from 'react';
import { Row, Col } from 'react-flexa';
import { StyledInput } from '../../styles/app.css';

export function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [showSummary, setShowSummary] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const userSummary = useMemo(() => {
        if (formData.firstName && formData.lastName && formData.email && formData.phone) {
            return `User with name ${formData.firstName} ${formData.lastName}, email ${formData.email} and phone number ${formData.phone}`;
        }

        return null;
    }, [formData.firstName, formData.lastName, formData.email, formData.phone]);

    return (
        <Row style={{ margin: '40px' }}>
            <Col xs={24}>
                <h1 style={{ padding: '0 0.65rem', marginBottom: '1.5rem', font: 'Garamond' }}>User Data</h1>
                <Row style={{ marginTop: '24px', marginBottom: '24px' }}>
                    <Col xs={1}>
                        First Name
                        <StyledInput name='firstName' value={formData.firstName} onChange={handleChange} />
                    </Col>
                    <Col xs={1}>
                        Last Name
                        <StyledInput name='lastName' value={formData.lastName} onChange={handleChange} />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px' }}>
                    <Col xs={1}>
                        Email
                        <StyledInput name='email' value={formData.email} onChange={handleChange} />
                    </Col>
                    <Col xs={1}>
                        Phone
                        <StyledInput name='phone' value={formData.phone} onChange={handleChange} />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px' }}>
                    <Col xs={1}></Col>
                    <Col xs={1} display='flex' style={{ justifyContent: 'flex-end' }}>
                        <Buttons
                            showCancel={true}
                            showSave={true}
                            onCancelClick={() => {
                                setFormData({
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phone: ''
                                });
                            }}
                            onSaveClick={() => {
                                if (userSummary) {
                                    setShowSummary(formData);
                                }
                            }}
                        />
                    </Col>
                </Row>
                {showSummary && (
                    <Row>
                        <Col>
                            <Row>
                                <h1 style={{ padding: '0 0.65rem', marginBottom: '1.5rem', font: 'Garamond' }}>
                                    User Summary:
                                </h1>
                            </Row>
                            <Row>{userSummary}</Row>
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    );
}
