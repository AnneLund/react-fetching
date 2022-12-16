import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.App {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 1em 0;
}

  article{
    width: 50%;
    margin: auto;
    padding-top: 1em;
  }

  h2{
    margin: 1em;
  }

  h4{
  margin: 1em;
  }

  ol{
    text-align: left;
    li{
        font-size: .8em;
        margin: .5em 0;
    }
  }

`