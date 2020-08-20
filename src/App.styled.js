import styled, { css } from "styled-components"

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px;
  padding: 10px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

export const TomButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`
