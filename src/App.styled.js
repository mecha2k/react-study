import styled, { css, createGlobalStyle } from "styled-components"

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

const COLORS = {
  text: "#f0f4f5",
  background: "#263343",
  accent: "#d49446"
}

const toggle = document.querySelector("toggle")

export const GlobalStyles = createGlobalStyle`
  :root {
    --text-color: ${COLORS.text};
    --background-color: ${COLORS.background};
    --accent-color: ${COLORS.accent};
  }

  body {
    font-family: "Source Sans Pro", sans-serif;
    margin: 0;
  }
`

export const StyleNav = styled.nav`
  font-size: 14px;
  color: var(--text-color);
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  .navbar-logo {
    font-size: 20px;
  }

  .navbar-logo i {
    color: var(--accent-color);
    padding: 0px 10px;
  }

  .navbar-menu {
    display: flex;
    list-style: none;
  }

  .navbar-menu li {
    text-align: center;
    padding: 2px 10px;
  }

  .navbar-menu li:hover {
    background-color: var(--accent-color);
    border-radius: 4px;
  }

  .navbar-icons ul {
    display: flex;
    list-style: none;
    font-size: 16px;
    color: blue;
  }

  .navbar-icons li {
    padding: 0 4px;
    color: lightyellow;
  }

  .toggle-btn {
  display: none;
  position: absolute;
  right: 12px;
  font-size: 32px;
  color: var(--accent-color);
}

@media screen and (max-width: 768px) {
  flex-direction: column;
    align-items: flex-start;
    padding: 12px;

  .navbar-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 12px 0;

  }

  .navbar-menu li {
    width: 100%;
    text-align: center;
  }

  .navbar-icons {
    display: none;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding-bottom: 10px;
  }

  .toggle-btn {
    display: block;
  }

  .navbar-menu.active,
  .navbar-icons.active {
    display: flex;
  }
}
`
