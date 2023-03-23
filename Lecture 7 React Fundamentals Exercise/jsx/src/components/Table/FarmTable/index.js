import React from 'react';
import { Row, Col } from 'react-flexa';
import { StyledTable } from '../style.css';

export const FarmTable = ({ initialData }) => {
    return (
        <Row>
            <Col xs={24}>
                <h1 style={{ padding: '0 0.65rem', marginBottom: '1.5rem', font: 'Garamond' }}>Farms</h1>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Farm Name</th>
                            <th>Crop Type</th>
                            <th>Acres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialData.map((item) => (
                            <tr key={item.farm}>
                                <td>{item.farm}</td>
                                <td>{item.cropType}</td>
                                <td>{item.acres}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </Col>
        </Row>
    );
};
