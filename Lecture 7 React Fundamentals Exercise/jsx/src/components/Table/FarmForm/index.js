import React, { useState } from 'react';
import { Row, Col } from 'react-flexa';
import { StyledInput } from '../../../styles/app.css';
import { Buttons } from '../../Buttons';

export const FarmForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        farm: '',
        cropType: '',
        acres: ''
    });

    return (
        <Row style={{ marginTop: '40px' }}>
            <Col xs={12}>
                <h1 style={{ padding: '0 0.65rem', marginBottom: '1.5rem', font: 'Garamond' }}>Add Farm</h1>
                <Row style={{ marginTop: '24px', marginBottom: '24px' }}>
                    <Col xs={1}>
                        Farm name
                        <StyledInput
                            value={formData.farm}
                            onChange={(e) => {
                                setFormData((prev) => ({ ...prev, farm: e.target.value }));
                            }}
                        />
                    </Col>
                    <Col xs={1}>
                        Crop Type
                        <StyledInput
                            value={formData.cropType}
                            onChange={(e) => {
                                setFormData((prev) => ({ ...prev, cropType: e.target.value }));
                            }}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px' }}>
                    <Col xs={1}>
                        Acres
                        <StyledInput
                            value={formData.acres}
                            onChange={(e) => {
                                setFormData((prev) => ({ ...prev, acres: e.target.value }));
                            }}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px' }}>
                    <Col xs={1} display='flex' style={{ justifyContent: 'flex-end' }}>
                        <Buttons
                            showSave={true}
                            onSaveClick={() => {
                                onSubmit({
                                    farm: formData.farm,
                                    cropType: formData.cropType,
                                    acres: formData.acres
                                });
                            }}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
