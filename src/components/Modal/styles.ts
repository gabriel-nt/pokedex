import styled from 'styled-components';

export const Container = styled.div`
  z-index: 101;
  color: white;
  max-height: 100vh;
  max-width: 800px;
  min-width: 460px;
  left: 50%;
  top: 50%;
  min-height: 400px;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: #48d0b0;
  border-radius: 12px;
  overflow: hidden;

  .info {
    color: #333;
    position: absolute;
    padding: 20px;
    padding-top: 30px;
    bottom: 0;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 0 7px 0 rgb(0 0 0 / 40%);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  padding: 20px;

  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Roboto';
    letter-spacing: -1px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 0.4);
    line-height: 14px;
    font-size: 2rem;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0 20px;

  h1 {
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  .badges {
    display: flex;

    div {
      & + div {
        padding-left: 8px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  transition: top 0.8s ease;
  margin-top: 12px;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Pokeball = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -12px;
  bottom: 10px;
  font-size: 10px;
  height: 100%;
  overflow: hidden;
  color: hsla(0, 0%, 100%, 0.2);

  &:before {
    content: '';
    position: relative;
    width: 180px;
    padding-bottom: 10em;
    border: 4em solid;
    border-radius: 100%;
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
  }

  &:after {
    content: '';
    position: absolute;
    width: 5em;
    padding-bottom: 5em;
    border-radius: 100%;
    background-color: currentColor;
  }

  @media (max-width: 500px) {
    right: 0;
    bottom: 0;
    height: auto;
  }
`;
