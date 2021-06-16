import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>
        get <span1>paid</span1> <br/>
        <span2>to</span2> <span3>post</span3>
      </h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 400;
    color: #4267B2;
    @media (max-width: 900px) {
      display: none;
    }
}
    span1 {
        font-size: 65px;
        font-weight: 400;
        color: #128C7E;
        @media (max-width: 900px) {
          display: none;
    }
}
    span2 {
        font-size: 65px;
        font-weight: 400;
        color: #FFFC00;
        @media (max-width: 900px) {
          display: none;
    }
}

    span3 {
        font-size: 65px;
        font-weight: 400;
        color: #8a3ab9;
        @media (max-width: 900px) {
          display: none;
    }
}
  }
`;

export default Main;

