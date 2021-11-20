import Link from 'next/link';
import styled from 'styled-components';

interface INavigationLinkProps {
  active: boolean;
}

export const Container = styled.div`
  background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0.75),
      hsla(0, 0%, 100%, 0.75)
    ),
    url('/background.jpg');
`;

export const Content = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 16px;
  display: grid;
  flex-direction: row;
  z-index: 2;
  grid-template-columns: 1fr;

  @media (min-width: 902px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1305px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NavigationContainer = styled.div`
  margin: 2rem;
  text-align: center;

  div {
    display: table;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
  }
`;

export const NavigationLink = styled.a<INavigationLinkProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #333;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s;
  background-color: ${({ theme, active }) => active && '#eee'};

  &:hover,
  &:focus {
    outline: none;
    background-color: #eee;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;
    background-color: #6c79db;
    opacity: ${({ theme, active }) => (active ? 1 : 0)};
    border-radius: 100px;
    transform: ${({ theme, active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: center;
    transition: all 0.3s;
  }
`;
