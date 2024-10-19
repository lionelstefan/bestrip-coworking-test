import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";

export const About = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
    };

    return (
        <>
            <section id="about"
                style={{
                    paddingTop: '30px',
                    paddingBottom: '30px',
                    backgroundColor: '#f9e4df'
                }}>
                <Container>
                    <Row
                        style={{
                            minHeight: '600px',
                            alignContent: 'center'
                        }}>
                        <Col>
                            <h1
                                style={{
                                    fontWeight: 700,
                                    fontSize: '60px'
                                }}>BestHub</h1>
                            <br/>
                            <br/>
                            <h3>
                                Where ideas thrive. Join a community that inspires creativity, collaboration, and growth.
                            </h3>
                        </Col>
                        <Col>
                            <p
                                style={{
                                    lineHeight: '2.5em'
                                }}>
                                At BestHub we understand the essence of work, as a pursuit that fulfils, motivates, and gives you purpose. We’ve created a workspace where you can feel inspired, tap into your flow, and truly be at your most productive. It’s a place for you to work your way, and connect to a new world of possibilities with people just like you.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </section>

            <section
                style={{
                    paddingTop: '100px',
                    paddingBottom: '100px',
                    minHeight: '600px',
                    backgroundColor: '#a96d61',
                }}>
                <Container
                    style={{
                        alignContent: 'center',
                        width: '100%'
                    }}>
                    <Slider {...sliderSettings}>
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}>
                            <img
                                src="https://besthub.besthostels.co.id/assets/images/dsc01716-min-1.jpg"
                                height="500"
                            />
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}>
                            <img
                                src="https://besthub.besthostels.co.id/assets/images/dsc01666-min-1.jpg"
                                height="500"
                            />
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}>
                            <img
                                src="https://besthub.besthostels.co.id/assets/images/WhatsApp-Image-2023-07-06-153742.jpg"
                                height="500"
                            />
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}>
                            <img
                                src="https://besthub.besthostels.co.id/assets/images/besthub-view2.jpeg"
                                height="500"
                            />
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block'
                            }}>
                            <img
                                src="https://besthub.besthostels.co.id/assets/images/besthub-view5.jpeg"
                                height="500"
                            />
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}