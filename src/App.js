import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Faq } from './components/Faq';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// to be done
// import { Faq } from './components/Faq';

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Benefits />
      <Faq />
      <div
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}>
        <Container>
            <Row
              style={{
                textAlign: 'center'
              }}>
                <Col>
                    © Copyright 2023 BestHostels Indonesia - All Rights Reserved - Designed By Stefan Lionel Suwito
                </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
