import React, { useState, useEffect, Fragment } from "react";
import { isEmpty } from "lodash";

import Api from "../libs/api";

import Layout from "../components/layout/layout";
import Card from "../components/card/card";
import BMI from "../components/calculate/bmi/bmi";
import Sidebar from "../components/sidebar";

const apiGroup = "todo";
const pageTitle = "Calculators";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await Api(apiGroup, "get", { userId: 1 });
    setData(response);
  };

  return (
    <Fragment>
      <Layout pageTitle={pageTitle}>
        <div className="row">
          <div className="col-3">
            <div className="row">
              <Sidebar />
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <BMI></BMI>

              {/* {!isEmpty(data)
                ? data.map(item => {
                    return (
                      <CardWithHeader size={4} title={item.id}>
                        <img src="../static/img/avatar2.png" alt="" />
                        <p>123</p>
                      </CardWithHeader>
                    );
                  })
                : null} */}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Index;
