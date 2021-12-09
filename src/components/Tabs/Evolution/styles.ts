import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    .pokemon {
      display: flex;
      flex-basis: 40%;
      padding: 4px 24px;
      align-items: center;
      flex-direction: column;

      p {
        font-weight: 700;
        font-size: 1rem;
        padding-top: 8px;
        text-transform: capitalize;
        cursor: pointer;
        margin-bottom: 8px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
  }
`;

export const Pokeball = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.05);
  right: auto;
  bottom: auto;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 0.7vmin;
  z-index: 1;

  &:before,
  &:after {
    display: block;
    border-radius: 100%;
  }

  &:before {
    content: '';
    position: relative;
    width: 15em;
    padding-bottom: 7em;
    border: 4em solid;
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
    background-color: currentColor;
  }

  @media (max-width: 500px) {
    right: 0;
    bottom: 0;
    height: auto;
  }
`;
