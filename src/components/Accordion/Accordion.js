import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Accordions() {
    return (
        <Accordion className='top-0 sticky-top'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Category</Accordion.Header>
                <Accordion.Body>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Use</Accordion.Header>
                <Accordion.Body>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Print type</Accordion.Header>
                <Accordion.Body>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                    <p className='primary-hover'>test1</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accordions;