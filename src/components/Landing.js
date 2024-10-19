import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Landing = () => {
    return (
        <>
            <section id="landing">
                <div style={{
                    backgroundColor: 'black',
                    opacity: 0.2,
                    height: '700px',
                    width: '100%',
                    top: '100px',
                    left: 0,
                    position: 'absolute',
                }}></div>
                <Container>
                    <Row>
                        <Col md="5"></Col>
                        <Col md="7">
                            <div style={{
                                paddingTop: '40px',
                                position: 'relative',
                                zIndex: 9999,
                                letterSpacing: '0.2em'
                            }}>
                                <h4 style={{
                                    color: 'white',
                                }}>
                                    PREMIUM COWORKING IN BALI
                                </h4>
                                <h1 style={{
                                    fontSize: '70px',
                                    color: 'white'
                                }}>
                                    WORKSPACES
                                    FOR
                                    PROFESSIONALS
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}