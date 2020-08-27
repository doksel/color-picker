import styled from "styled-components";

type ColorType = {
  color?: string;
  onClick?: any
};

export const WrapSlider = styled.div<ColorType>`
    max-width: 615px;
    margin-top: 0px;

    .horizontal-slider {
        margin-top: 10px;
        width: 100%;
        max-width: 615px;
        height: 30px;
  
        .track {
          top: 20px;
          border-radius: 10px;
          height: 5px;
          width: 100%;
          max-width: 615px;
          background: ${props => (props.color ? props.color : props.theme.colors.main)};
  
          &-1 {
            top: 15px;
            background-repeat: no-repeat;
            width: 15px;
            height: 15px;
            cursor: pointer;
          }
        }
  
        .thumb {
          z-index: 1;
          left: 0px;
          top: -10px;
          outline: none;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: -0.16px;
          font-weight: bold;
        }
      }  
`;

export const Scale = styled.div`
    width: 100%;
    padding-left: 10px;
    margin-top: 15px;

    span {
    font-weight: bold;
    font-size: 14px;
    }
`;
