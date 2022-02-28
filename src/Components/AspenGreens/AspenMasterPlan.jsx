import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import AspenAllImages from "./AspenAllImages";
import AspenFourBhk from "./AspenFourBhk";
import AspenMasterPlanImages from "./AspenMasterPlanImages";

const AspenMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Aspen Greens Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <AspenAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <AspenMasterPlanImages />
        </Tab>
        <Tab eventKey="four-bhk" title="4BHK">
          {<AspenFourBhk />}
        </Tab>
      </Tabs>
    </div>
  );
};

export default AspenMasterPlan;
