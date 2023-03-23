import React from 'react';
import { Row, Col } from 'react-flexa';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { Form } from '../Form';
import { Table } from '../Table';

export const Content = () => {
    const logoWidth = 100;

    return (
        <BrowserRouter>
            <Header logoWidth={logoWidth} />
            <Row gutter='0px'>
                <Col xs={`${logoWidth}px`} gutter='0px'>
                    <SideBar logoWidth={logoWidth} />
                </Col>
                <Col xs={`calc(100vw - ${logoWidth}px)`} gutter='0px'>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={() => {
                                return (
                                    <div
                                        style={{
                                            margin: '20px',
                                            fontSize: '30px',
                                            fontFamily: 'Garamond'
                                        }}
                                    >
                                        Home
                                    </div>
                                );
                            }}
                        />
                        <Route exact path='/form' component={Form} />
                        <Route exact path='/table' component={Table} />
                    </Switch>
                </Col>
            </Row>
        </BrowserRouter>
    );
};
