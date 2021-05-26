import { Col, Row } from "antd";
import Stepper from "./components/stepper";

function App() {
  return (
    <Row justify="center">
      <Col span={20} >
        {" "}
        <Stepper />
      </Col>
    </Row>
  );
}

export default App;
