import React,{ useState} from 'react';
import { InputGroup, Form, FormControl, Button, Row, Col,} from 'react-bootstrap';
import { FaSearch} from "react-icons/fa"

const Header = (props) => {

    const [query, setQuery] = useState('');
    const setSearchQuery=(e)=>{
        setQuery(e.target.value);
    }
    // const hnadleQuery=()=>{

    // }
    return (
        <>
            <Row className=" header">
                <Col md={{}}>
                    {/* <a href="#" className="brand">Test Sony</a> */}
                    <div className="brand">Test Sony</div>
                </Col>
                <Col md={{ offset: 6 }}>
                    <Form inline>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text><FaSearch /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={setSearchQuery} />
                        </InputGroup>
                        <Button variant="dark" onClick={()=>props.search(query)}>Test Sony</Button>
                    </Form>
                </Col>
            </Row>
        </>

    );
}

export default Header;