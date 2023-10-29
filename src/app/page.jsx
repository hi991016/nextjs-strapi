import { IconTypes } from "@/components/button/button";
import Card from "@/components/card/card";
import React from "react";

const Homepage = () => {
  return (
    <div className="container">
      <Card
        label="Product Reviews"
        title="Class aptent taciti sociosqu"
        summary="Mauris interdum felis lacus."
        href="#"
        btnIcon={IconTypes.ARROW_RIGHT}
      />
      <div className="row">
        <div className="col col_4">
          <Card
            label="Opinions"
            title="Class aptent taciti sociosqu"
            summary="Mauris interdum felis lacus."
            href="#"
            btnIcon={IconTypes.ARROW_RIGHT}
          />
        </div>
        <div className="col col_4">
          <Card
            label="Product Reviews"
            title="Class aptent taciti sociosqu"
            summary="Mauris interdum felis lacus."
            href="#"
            btnIcon={IconTypes.ARROW_RIGHT}
          />
        </div>
        <div className="col col_4">
          <Card
            label="Travel Guides"
            title="Class aptent taciti sociosqu"
            summary="Mauris interdum felis lacus."
            href="#"
            btnIcon={IconTypes.ARROW_RIGHT}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
