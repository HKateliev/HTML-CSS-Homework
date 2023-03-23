import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexa';
import { FarmForm } from './FarmForm';
import { FarmTable } from './FarmTable';
import { initialData } from './data';

export const Table = () => {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (initialData) {
            setData(initialData);
        }
    }, [initialData]);

    const handleOnSubmit = (farm) => {
        setData((prevs) => [...prevs, farm]);
        setShowForm(false);
    };

    return (
        <Row style={{ margin: '40px' }}>
            <Col xs={24}>
                <>
                    <FarmTable initialData={data} />

                    <Row style={{ marginTop: '24px' }}>
                        <Col>
                            <button
                                onClick={() => {
                                    setShowForm(true);
                                }}
                            >
                                Add farm
                            </button>
                        </Col>
                    </Row>
                    {showForm && <FarmForm onSubmit={handleOnSubmit} />}
                </>
            </Col>
        </Row>
    );
};
