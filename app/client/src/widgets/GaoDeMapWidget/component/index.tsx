import React, { useState, useEffect, useRef, Component } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

export const GDMapProps = {
  center: [104.06751573, 30.65298012],
  zoom: "17",
  viewMode: "3D",
};

type GDMapComponentProps = {
  children?: any;
};

class GDMapComponent extends Component<GDMapComponentProps> {
  map = {};
  constructor(props: GDMapComponentProps) {
    super(props);
  }

  componentDidMount() {
    AMapLoader.load({
      key: "fb3d437e7eaad8d17973536b5cc575d9",
      version: "2.0",
      plugins: [],
    })
      .then((AMap) => {
        this.map = new AMap.Map("container", GDMapProps);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return <div id="container" style={{ width: "100%", height: "100%" }} />;
  }
}

export default GDMapComponent;
