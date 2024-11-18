import styled from "styled-components";

const S={};

S.HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => (props.isHovered ? "265px" : "132px")};
  background: ${(props) =>
    props.isHovered
      ? "linear-gradient(rgba(144, 238, 144, 1), rgba(144, 238, 144, 0.6))"
      : "rgba(144, 238, 144, 1)"};
  transition: height 0.3s linear, background 0.3s linear;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: relative;
`;

S.Logo = styled.img`
  height: 80px;
  margin-right: 20px;
`;

S.Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

S.NavItem = styled.div`
  position: relative;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover .submenu {
    display: flex;
  }
`;

S.SubMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 40px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  & div {
    color: black;
    padding: 5px 10px;
    font-size: 16px;
    white-space: nowrap;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
`;

S.ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

export default S;