import styled from 'styled-components';

interface INavigationLinkProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 2rem auto;
  max-width: 1440px;
  align-items: center;
  padding: 0.625rem 2.5rem;
  justify-content: space-between;

  @media (max-width: 500px) {
    margin: 0.5rem auto;
    padding: 0.625rem 1.875rem;
  }

  @media (max-width: 832px) {
    align-items: flex-start;
    flex-direction: column-reverse;
  }
`;

export const NavigationContainer = styled.div`
  h1 {
    font-size: 1rem;
    margin-bottom: 0.7rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.dark};
  }

  .select-gen {
    display: table;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
    background-color: ${({ theme }) => theme.backgrounds.white};
  }

  @media (max-width: 832px) {
    & + div {
      margin-bottom: 1.5em;
    }
  }
`;

export const NavigationLink = styled.a<INavigationLinkProps>`
  cursor: pointer;
  overflow: hidden;
  font-weight: 700;
  font-size: 1.1rem;
  position: relative;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme, active }) =>
    active && theme.backgrounds.grayLight};

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.backgrounds.grayLight};
  }

  &:after {
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    display: block;
    height: 0.25rem;
    position: absolute;
    transition: all 0.3s;
    border-radius: 6.25rem;
    transform-origin: center;
    opacity: ${({ active }) => (active ? 1 : 0)};
    background-color: ${({ theme }) => theme.backgrounds.purple};
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
  }
`;
