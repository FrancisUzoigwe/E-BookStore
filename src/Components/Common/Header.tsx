import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>dribble</Logo>
          <NavHold>
            <Navs col="black" hcol="#666666">
              Find Talents
            </Navs>
            <Navs col="black" hcol="#666666">
              For designers
            </Navs>
            <Navs col="black" hcol="#666666">
              Inspiration
            </Navs>
            <Navs col="black" hcol="#666666">
              Learn design
            </Navs>
            <Navs col="#ef0e77" hcol="#ef0e77">
              Go Pro
            </Navs>
          </NavHold>
          <Action>
            <First>Log in</First>
            <Second>Sign up</Second>
          </Action>
        </Main>
      </Container>
    </div>
  );
};

export default Header;
const Second = styled.div`
padding: 10px 15px;
background-color: black;
border-radius: 8px;
color: white;
display: flex;
justify-content: center;
align-items: center;
transition: all 350ms;

:hover{
    cursor: pointer;
    background-color: #535353;
}
`;

const First = styled.div`
margin-right: 15px;
transition: all 350ms;

:hover{
    cursor: pointer;
    color: #666666;
}
`;

const Logo = styled.div`
  font-family: "Dancing Script";
  font-weight: 900;
  font-size: 35px;
`;

const NavHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38%;
  margin-right: 500px;
`;

const Navs = styled.div<{ col: string; hcol: string }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ col }) => col};
  transition: all 350ms;

  :hover {
    cursor: pointer;
    color: ${({ hcol }) => hcol};
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 94%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
