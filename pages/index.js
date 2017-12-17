import Link from "next/link";
import master from "../hocs/master";
import styled from "styled-components";
import { H1, H2, P } from "../components/styles";

const Items = styled.div`
  margin-top: 3vh;
  display: grid;
  margin-left: 5vw;
  grid-template-columns: 30vw 30vw 30vw;
  grid-gap: 1vw;
`;

let Index = () => (
  <div>
    <H1>Taking on the FullStory Challenge!</H1>
    <Items>
      <div>
        <H2>CAPTURE EVERYTHING</H2>
        <P>
          Every click, keypress, page transition and more - automatically
          indexed and easily accessible to any team with a stake in the
          customer’s success.
        </P>
      </div>
      <div>
        <H2>FAST AND INTUITIVE</H2>
        <P>
          OmniSearch helps you find customers, identify rage clicks, summon page
          analytics, build funnels and more instantly. Just start typing.
        </P>
      </div>
      <div>
        <H2>SMART FRUSTRATION DETECTION</H2>
        <P>
          FullStory intelligently surfaces key moments of potential user
          frustration. Rage, Error and Dead clicks magically bring different
          aspects of a faulty UI to light—and show you how to improve.
        </P>
      </div>
    </Items>
  </div>
);

export default master(Index);
