import React from "react";
import styled from "styled-components";
import AppTimeoutImage from "assets/images/timeout-image.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - ${(props) => props.theme.headerHeight});
  .bold-text {
    font-weight: ${(props) => props.theme.fontWeights[3]};
    font-size: 24px;
  }
  .page-unavailable-img {
    width: 35%;
  }
  .button-position {
    margin: auto;
  }
`;

const RetryButton = styled.button`
  background-color: #f3672a;
  color: white;
  height: 40px;
  width: 300px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 17px;
`;

function ServerTimeout() {
  return (
    <Wrapper>
      <img
        alt="Page Unavailable"
        className="page-unavailable-img"
        src={AppTimeoutImage}
      />
      <div>
        <p className="bold-text">服务器长时间无响应</p>
        <p>请稍后重试</p>
        <RetryButton onClick={() => window.location.reload()}>
          {"重试"}
        </RetryButton>
      </div>
    </Wrapper>
  );
}

export default ServerTimeout;
