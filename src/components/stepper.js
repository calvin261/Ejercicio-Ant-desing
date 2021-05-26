import React, { useState } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Button, message, Steps } from "antd";
import DescriptionCompoent from "./Descriptions";
import CarouselComponent from "./Coursel";
import EmpetyComponent from "./empty";

function Stepper() {
  const { Step } = Steps;
  const steps = [
    {
      title: "First",
      content: <DescriptionCompoent />,
    },
    {
      title: "Second",
      content: <CarouselComponent />,
    },
    {
      title: "Last",
      content: <EmpetyComponent />,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
}

export default Stepper;
