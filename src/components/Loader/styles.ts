import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 29vh 0;
  color: #333;
  flex-direction: column;
  font-family: 'Roboto';
  font-weight: 500;

  &:before {
    content: '';
    display: block;
    height: 3em;
    width: 3em;
    border: 0.6em solid #fb6c6c;
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
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -1.4em;
    height: 1.2em;
    width: 1.2em;
    background-color: #ccc;
    border-radius: 100%;
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
