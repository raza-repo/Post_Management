import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ButtonGroup, Button, Form } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaSignal, FaUserCircle, FaGratipay, FaFilter } from "react-icons/fa"
import Header from '../component/header/Header';
import Services from '../webServicesManager/services';
import moment from 'moment';

const Case = () => {
    document.body.style = 'background: #6c757d6b;';

    const [data, setData] = useState([]);
    const [media, setMedia] = useState('All');

    useEffect(() => {
        getAllPost();
    }, []);

    const getAllPost = async () => {
        let response = await Services.allPost('get_post_all');
        console.log(response);
        if (response.status === 200) {
            let arry = new Array();
            for (let i = 0; i < response.data.length; i++) {
                let date = response.data[i].created_at;
                arry.push({
                    name: response.data[i].author_name,
                    title: response.data[i].title,
                    site: response.data[i].site,
                    description: response.data[i].description,
                    comment_count: response.data[i].comment_count,
                    date: moment(date).format('MMMM Do YYYY'),
                    time: moment(date).format('h:mm'),
                })
            }
            setData(arry);
        } else {
            // ...
        }
    }
    const getAllPostSortByDate = async () => {
        let response = await Services.allPost('get_post_all_by_date');
        console.log(response);
        if (response.status === 200) {
            let arry = new Array();
            for (let i = 0; i < response.data.length; i++) {

                let date = response.data[i].created_at
                arry.push({
                    name: response.data[i].author_name,
                    title: response.data[i].title,
                    site: response.data[i].site,
                    description: response.data[i].description,
                    comment_count: response.data[i].comment_count,
                    date: moment(date).format('MMMM Do YYYY'),
                    time: moment(date).format('h:mm'),
                })
            }
            setData(arry);
        } else {
            // ...
        }
    }
    const getPostByMedia = async (media) => {
        if (media === 'All') {
            getAllPost();
        } else {
            let response = await Services.allPost('get_post_by_nedia/' + media);
            console.log(response);
            if (response.status === 200) {
                let arry = new Array();
                for (let i = 0; i < response.data.length; i++) {

                    let date = response.data[i].created_at
                    arry.push({
                        name: response.data[i].author_name,
                        title: response.data[i].title,
                        site: response.data[i].site,
                        description: response.data[i].description,
                        comment_count: response.data[i].comment_count,
                        date: moment(date).format('MMMM Do YYYY'),
                        time: moment(date).format('h:mm'),
                    })
                }
                setData(arry);
            } else {
                // ...
            }
        }

    }
    const getPosrBySearch = async (query) => {
        if (query === '') {
            getAllPost();
        } else {
            let response = await Services.allPost('get_post_all/' + query);
            console.log(response);
            if (response.status === 200) {
                let arry = new Array();
                for (let i = 0; i < response.data.length; i++) {

                    let date = response.data[i].created_at
                    arry.push({
                        name: response.data[i].author_name,
                        title: response.data[i].title,
                        site: response.data[i].site,
                        description: response.data[i].description,
                        comment_count: response.data[i].comment_count,
                        date: moment(date).format('MMMM Do YYYY'),
                        time: moment(date).format('h:mm'),
                    })
                }
                setData(arry);
            } else {
                // ...
            }
        }

    }
    const getLastDay = async () => {

        let response = await Services.allPost('get_post_day');
        console.log(response);
        if (response.status === 200) {
            let arry = new Array();
            for (let i = 0; i < response.data.length; i++) {

                let date = response.data[i].created_at
                arry.push({
                    name: response.data[i].author_name,
                    title: response.data[i].title,
                    site: response.data[i].site,
                    description: response.data[i].description,
                    comment_count: response.data[i].comment_count,
                    date: moment(date).format('MMMM Do YYYY'),
                    time: moment(date).format('h:mm'),
                })
            }
            setData(arry);
        } else {
            // ...
        }
    }
    const getLastWeek = async () => {

        let response = await Services.allPost('get_post_week');
        console.log(response);
        if (response.status === 200) {
            let arry = new Array();
            for (let i = 0; i < response.data.length; i++) {

                let date = response.data[i].created_at
                arry.push({
                    name: response.data[i].author_name,
                    title: response.data[i].title,
                    site: response.data[i].site,
                    description: response.data[i].description,
                    comment_count: response.data[i].comment_count,
                    date: moment(date).format('MMMM Do YYYY'),
                    time: moment(date).format('h:mm'),
                })
            }
            setData(arry);
        } else {
            // ...
        }
    }
    const getLastMonth = async () => {

        let response = await Services.allPost('get_post_month');
        console.log(response);
        if (response.status === 200) {
            let arry = new Array();
            for (let i = 0; i < response.data.length; i++) {

                let date = response.data[i].created_at
                arry.push({
                    name: response.data[i].author_name,
                    title: response.data[i].title,
                    site: response.data[i].site,
                    description: response.data[i].description,
                    comment_count: response.data[i].comment_count,
                    date: moment(date).format('MMMM Do YYYY'),
                    time: moment(date).format('h:mm'),
                })
            }
            setData(arry);
        } else {
            // ...
        }
    }
    const setMediaStr = (e) => {
        console.log(e.target.value)
        setMedia(e.target.value);
        getPostByMedia(e.target.value);
    }
    return (
        <Container fluid >
            <Header search={getPosrBySearch} />
            <Row className='mt-2'>
                <Col md={{ span: 6 }}>
                    <Row>
                        <Col md={{ span: 2 }}>
                            <Button className="button" onClick={getAllPostSortByDate}>Sort by Date</Button>
                        </Col>

                        <Col md={{ span: 3 }}>
                            {/* <Button className="button">All medium selected <FaFilter /></Button> */}
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" onClick={setMediaStr}>
                                    <option value="All">All medium selected</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Twitter">Twitter</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col md={{ span: 6 }}>
                            <ButtonGroup className="mb-2">
                                <Button variant="secondary" className="button" onClick={getLastDay}>Last 24 hours</Button>
                                <Button className="button" onClick={getLastWeek}>Last 7 days</Button>
                                <Button className="button" onClick={getLastMonth}>Last 30 days</Button>
                            </ButtonGroup>
                            <br />
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col md={{ span: 8 }}>Total Records : {data.length}</Col>
                <Col md={{ span: 2 }}>Sentiments</Col>
                <Col md={{ span: 2 }}>Impact</Col>
            </Row>


            {data.map((item, key) => {
                return (
                    <Row className='mt-2 mb-2'>
                        <Col>
                            <Card key={key}>
                                <Card.Body >
                                    <Row className='mt-2'>
                                        <Col md={{ span: 4 }} style={{}}>
                                            <Row className="d-flex justify-content-center">
                                                <Col md={{ span: 2 }}>
                                                    <FaUserCircle style={{ color: 'green', height: 40, width: 40 }} />
                                                </Col>
                                                <Col md={{ span: 8 }}>
                                                    <Row>
                                                        <Col md={{ span: 6 }}>{item.name}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={{ span: 6 }}>{item.date} at {item.time}</Col>
                                                        {item.site == "Facebook" ? <Col md={{ span: 6 }}><FaFacebook style={{ color: 'blue' }} /> {item.site}</Col> : <Col md={{ span: 6 }}><FaTwitter style={{ color: 'blue' }} /> {item.site}</Col>}
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col sm={{ span: 2 }} className='truncate'>{item.title} </Col>
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col md={{ span: 8 }}>
                                            <div>
                                                {item.description}
                                            </div>
                                            <div className="truncate">
                                                Product : https://stackoverflow.com/questions/54484494/react-bootstrap-4-align-items-in-header
                                    </div>
                                            <div> <a href="#" >Show more...</a></div>
                                        </Col>
                                        <Col md={{ span: 2 }}>
                                            <Button variant="success" disabled={true} >Postive</Button>
                                        </Col>
                                        <Col md={{ span: 2 }}>
                                            <Row>
                                                <FaSignal style={{ color: 'green', height: 22, width: 22 }} /> 5
                                        </Row>

                                        </Col>
                                    </Row>
                                    <Row className='mt-2 '>
                                        <Col md={6}>
                                            <Row className=" align-item-center">
                                                <p className='ml-3'>0 Likes</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                                <p className='ml-3'><FaGratipay /> 0</p>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )
            })}
        </Container>

    );
}

export default Case;