import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Benefits = () => {
    return (
        <section id="benefits"
            style={{
                paddingTop: '80px',
                paddingBottom: '80px'
            }}>
            <Container>
                <div
                    style={{
                        textAlign: 'center'
                    }}>
                    <h1>
                        Designed for Productivity, Built for Community
                    </h1>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Row>
                    <Col>
                        <h3>
                            Flexibility that Works for You
                        </h3>
                        <p>
                            Choose between daily passes, monthly plans, or private offices to suit your needs.
                        </p>
                    </Col>
                    <Col>
                        <h3>
                            A Community that Inspires
                        </h3>
                        <p>
                            Work alongside entrepreneurs, freelancers, and teams eager to share ideas and grow together.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>
                            Networking Opportunities Everywhere
                        </h3>
                        <p>
                            Meet collaborators, attend events, and connect with professionals across industries.
                        </p>
                    </Col>
                    <Col>
                        <h3>
                            Productivity-Boosting Environment
                        </h3>
                        <p>
                            Ergonomic workspaces, high-speed internet, and peaceful corners to maximize your focus.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>
                            Prime Location and Accessibility
                        </h3>
                        <p>
                            Located in the heart of the city, easily accessible by public transport.
                        </p>
                    </Col>
                    <Col>
                        <h3>
                            Seamless Work-Life Balance
                        </h3>
                        <p>
                            Relax in lounge areas, recharge with yoga rooms, or unwind at community events.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}