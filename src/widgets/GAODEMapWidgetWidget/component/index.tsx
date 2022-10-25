import React, { useMemo } from "react";
import styled from "styled-components";
import { InfoWindow } from "@uiw/react-amap-info-window";
import { APILoader } from "@uiw/react-amap-api-loader";
import { Map } from "@uiw/react-amap-map";
import { ControlBarControl } from "@uiw/react-amap-control-bar-control";

const Container = styled.div`
  width: 150px;
  height: 150px;
`;

const GAODEMapWidgetComponent = (props: GAODEMapWidgetComponentProps) => {
  const { latitude, longitude, zoomTemp } = props;

  const info = [];
  info.push(
    '<div class=\'input-card content-window-card\'><div><img style="float:left;width:67px;height:16px;" src=" https://webapi.amap.com/images/autonavi.png "/></div> ',
  );
  info.push('<div style="padding: 16px 0px 0px 0px;"><p>建信金融事业群</p>');
  info.push("<p class='input-item'>电话 : 010-84107000</p>");
  info.push("<p class='input-item'>邮编 : 100102</p>");
  info.push("<p class='input-item'>地址 :四川省成都市航...</p></div></div>");
  const content = (
    <>
      <InfoWindow content={info.join("")} visiable />
      <div style={{ height: "15px", width: "15px" }}>
        <ControlBarControl offset={[30, 10]} position="RT" visiable />
      </div>
    </>
  );
  const mapContainer = useMemo<JSX.Element>(
    () => (
      <Container>
        <Map
          center={[longitude, latitude]}
          // onMoveStart={(e?: Event): void => e && e.stopPropagation()}
          zoom={Number(zoomTemp)}
        >
          {content}
        </Map>
      </Container>
    ),
    [longitude, latitude, zoomTemp, content],
  );
  return (
    <APILoader akay="11931ded3c0d30c4ee5bf18709a1b4da">
      {mapContainer}
    </APILoader>
  );
};

export interface GAODEMapWidgetComponentProps {
  longitude: string;
  latitude: string;
  zoomTemp: string;
}

export default GAODEMapWidgetComponent;
