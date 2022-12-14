import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaDog } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;

export const NavLink = styled(Link)`
  color: #fcbacb;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fcbacb;

  p {
    transform: translate(-175%, 100%);
    font-weight: 500;
  }
`;

export const Bars = styled(FaDog)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
