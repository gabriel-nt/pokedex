import styled from 'styled-components';

interface INavigationLinkProps {
  active: boolean;
}

export const Container = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
  padding: 10px 40px;

  @media (max-width: 832px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  @media (max-width: 500px) {
    margin: 0.5rem auto;
    padding: 10px 28px;
  }
`;

export const NavigationContainer = styled.div`
  h1 {
    color: #333;
    font-size: 1rem;
    vertical-align: middle;
    margin-bottom: 0.7rem;
  }

  .select-gen {
    display: table;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
  }

  @media (max-width: 832px) {
    & + div {
      margin-bottom: 1.5em;
    }
  }
`;

export const NavigationLink = styled.a<INavigationLinkProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #333;
  cursor: pointer;
  font-size: 1.1rem;
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
