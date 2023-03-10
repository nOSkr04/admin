import React from "react";
import { Col, Container, Row } from "reactstrap";
import RecentOrders from "./RecentOrders";

const DashboardEcommerce = () => {
  document.title = "Нүүр";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
                <Row>
                  <RecentOrders />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
