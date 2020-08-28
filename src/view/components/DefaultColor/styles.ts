import styled from "styled-components";

type ColorType = {
  color?: string;
  onClick?: any
};

export const Wrapper = styled.div<ColorType>`
  max-width: 615px;
  margin-top: 15px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  label {
    text-transform: uppercase;
  }
`;

export const ColorBlock = styled.div<ColorType>`
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  background: ${props => props.color ? props.color : "#008000"};
`;