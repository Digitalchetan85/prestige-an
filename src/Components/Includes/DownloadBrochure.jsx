import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BrochureModals from "./BrochureModals";

const DownloadBrochure = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="my-1 btn text-white">
        Download Brouchure
      </Button>
      <BrochureModals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        message="Please Fill in your details & Download the Complete Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default DownloadBrochure;
