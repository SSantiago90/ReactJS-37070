import styled from "styled-components";

// Creamos un <button> con styled-components
export const MyButton = styled.button`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  height: 40px;
  margin: 20px auto;
  background-color: ${(props) => props.color};
`;
/*  */
function Button({ color }) {
  return <MyButton color={color}>Click me!</MyButton>;
}

export default Button;
