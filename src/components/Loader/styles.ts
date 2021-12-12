import styled from 'styled-components';

interface IContainerProps {
  alignCenter: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  font-weight: 500;
  font-size: 1.2rem;
  position: relative;
  align-items: center;
  font-family: 'Roboto';
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.backgrounds.dark};
  padding: ${({ alignCenter }) => (alignCenter ? '29vh 0' : '6vh 0')};

  &:before {
    width: 3em;
    height: 3em;
    content: '';
    display: block;
    border-radius: 100%;
    margin-bottom: 10px;
    clip-path: polygon(
      0 0,
      0 40%,
      50% 40%,
      50% 60%,
      0 60%,
      0 100%,
      100% 100%,
      100% 60%,
      50% 60%,
      50% 40%,
      100% 40%,
      100% 0
    );
    animation: spin 0.5s infinite ease-in-out;
    border: 0.6em solid ${({ theme }) => theme.backgrounds.fire};
  }

  &:after {
    top: 50%;
    content: '';
    width: 1.2em;
    height: 1.2em;
    display: block;
    position: absolute;
    margin-top: -1.45em;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.backgrounds.gray};
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
