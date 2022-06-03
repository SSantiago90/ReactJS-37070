import styled from "styled-components";

export const MyButton = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  height: 40px;
  background-color: ${(props) => props.colorBackground};
`;

function Button({ colorBackground }) {
  return <MyButton colorBackground={colorBackground}>Click me!</MyButton>;
}

export default Button;
