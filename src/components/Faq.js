import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

export const Faq = () => {
    return (
        <section id="faq"
            style={{
                paddingTop: '80px',
                paddingBottom: '80px',
                backgroundColor: '#fee6e1'
            }}>
            <Container>
                <div
                    style={{
                        textAlign: 'center'
                    }}>
                    <h1
                        style={{
                            fontSize: '60px',
                            fontWeight: 700
                        }}>
                        Need Clarity? Explore Our Frequently Asked Questions
                    </h1>
                    <br />
                    <br />
                    <br />
                </div>
                <>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>How do I book my work space?</b></Accordion.Header>
                            <Accordion.Body>
                                You can book directly online. We offer flexible booking terms, with weekly or monthly agreements that can be extended for as long as you wish. Due to limited availability, we advise you to pre-book with a deposit to ensure your preferred space is reserved for you. Special rates are available for long-term bookings paid in advance, please contact us for more information.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>What are BestHub's opening hours?</b></Accordion.Header>
                            <Accordion.Body>
                                We are open 24 hours every day, except on Nyepi, the Balinese Day of Silence, a public holiday that marks the New Year according to the Balinese calendar.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>Why yet another co-working space in Bali?</b></Accordion.Header>
                            <Accordion.Body>
                            For BestHub, work is more than just a means to earn a living. We’re a community of creative individuals who have a genuine interest in Bali’s culture and arts, with a desire to explore more than just the usual tourist hot spots. With us, you can dive deeper into understanding what Bali has to offer the world. That’s why we support initiatives like Bali Poleng, and its aim to bring balance to the world. Watch this space to learn more about this cultural movement and events sponsored by Bali Poleng.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
            </Container>
            <br />
            <br />
            <br />

            <div
                    style={{
                        textAlign: 'center'
                    }}>
                    <h1
                        style={{
                            fontSize: '60px',
                            fontWeight: 700
                        }}>
                        Come and Visit Us
                    </h1>
                    <br />
                    <br />
                    <br />
                </div>
            <div 
                style={{
                    textAlign: 'center'
                }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.262583344646!2d115.1747042750145!3d-8.666559191381006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247dfc583e8ff%3A0xd2f8b82b35f04e3!2sBesthub!5e0!3m2!1sen!2sid!4v1729351486138!5m2!1sen!2sid" width="750" height="600" style={{
                    border: 'none'
                }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <br />
            <br />
            <br />
        </section>
    )
}