import styled from "styled-components";

type ColorType = {
  color?: string;
  onClick?: any
};

export const WrapColorPicker = styled.div<ColorType>`
  width: 100%;
  max-width: 400px;
  height: 70px;
  display: flex;
  flex-align: center;
  pading: 10px;
  margin: 20px;
  border: 1px solid ${props => props.theme.colors.disabled};
  box-shadow: 0px 0px 2px ${props => props.theme.colors.disabled};
  position: relative;
`;

export const ValueBlock = styled.div<ColorType>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${props => props.theme.colors.disabled};

    // div {
    //   height: max-content;
    // }
  `;

export const ColorBlock = styled.div<ColorType>`
  width: 100%;
  max-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${props => props.theme.colors.disabled};
  cursor: pointer;

  div {
    width: 20px;
    height: 20px;
    background: ${props => props.color ? props.color : "#008000"};
  }
  `;

export const SelectBlock = styled.div<ColorType>`
  width: 100%;
  max-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    position: relative;

    &::after {
      content: ''; 
      position: absolute;
      left: -10px;
      bottom: -15px;
      border: 10px solid transparent;
      border-top: 10px solid ${props => props.theme.colors.disabled};
    }
  }
`;