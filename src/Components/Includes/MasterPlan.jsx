import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import EdenParkPlans from "./EdenParkPlans";
import AvalonParkPlans from "./AvalonParkPlans";
import MeridianParkPlans from "./MeridianParkPlans";
import GreatAcresPlans from "./GreatAcresPlans";
import AspenParkPlans from "./AspenParkPlans";

const MasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Prestige City Master & Floor Plans
      </h2>
      <Container fluid className="ps-0 pe-0">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 text-dark"
        >
        <Tab eventKey="all" title="Meridian Park">
          {<MeridianParkPlans />}
        </Tab>
          <Tab eventKey="three-bhk" title="Eden park" className="text-dark">
            <EdenParkPlans />
          </Tab>
          <Tab
            eventKey="matster-plan"
            title="Avalon Park"
            className="text-dark"
          >
            <AvalonParkPlans />
          </Tab>
          <Tab eventKey="four-bhk1" title="Aspen Greens">
            {<AspenParkPlans />}
          </Tab>
          <Tab eventKey="four-bhk" title="Great Acres">
            {<GreatAcresPlans />}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default MasterPlan;
