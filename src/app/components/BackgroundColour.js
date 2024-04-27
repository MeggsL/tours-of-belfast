import { React, useState } from "react";
import styled from "styled-components";


function Background() {
    //display state
    const [display, setDisplay] = useState (true);
  return (
    <>
    <Wrapper $display={display} />
    </>
  );
}
// the wrapper styled componenent
const Wrapper = styled.div`
--foreground-rgb: 0, 0, 0;
--background-start-rgb: 179, 159, 192;
--background-end-rgb: 179, 159, 192;

background: rgb(var(--background-end-rgb))
display: ${(props) => (props.$display ? "block" : "none")};
`;
export default Background;