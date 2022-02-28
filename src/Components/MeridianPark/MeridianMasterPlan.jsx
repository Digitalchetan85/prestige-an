import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import MeridianAllImages from "./MeridianAllImages";
import MeridianFloorplan from "./MeridianFloorplan";
import MeridianMasterPlanImages from "./MeridianMasterPlanImages";

const MeridianMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Meridian Park Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <MeridianAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <MeridianMasterPlanImages />
        </Tab>
        <Tab eventKey="three-bhk" title="Floor-Plan">
          {<MeridianFloorplan />}
        </Tab>
      </Tabs>
    </div>
  );
};

export default MeridianMasterPlan;
