import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #222;
  padding: 20px 0;
  margin: 20px 0 0;

  & p {
    color: white;
  }
  & div p:nth-child(1) {
    color: #999;
    font-size: 20px;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 5px;
  background-color: #333;
  color: white;
`;
