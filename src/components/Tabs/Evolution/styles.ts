import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pokemon {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 0.25rem 2.5rem;

      p {
        font-size: 1rem;
        cursor: pointer;
        font-weight: 700;
        padding-top: 0.5rem;
        margin: 0.75rem 0 1rem 0;
        text-transform: capitalize;
      }
    }

    .level {
      text-align: center;

      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.gray};
      }

      p {
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: capitalize;
      }
    }
  }

  @media (max-width: 480px) {
    > div {
      .pokemon {
        padding: 0.25rem 1rem;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
  }
`;

export const Pokeball = styled.div`
  top: 50%;
  left: 50%;
  z-index: 1;
  right: auto;
  bottom: auto;
  display: flex;
  font-size: 0.7vmin;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.05);
  transform: translateX(-50%) translateY(-50%);

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
    width: 5em;
    content: '';
    position: absolute;
    padding-bottom: 5em;
    background-color: currentColor;
  }

  @media (max-width: 500px) {
    right: 0;
    bottom: 0;
    height: auto;
  }
`;

export const EmptyList = styled.p`
  width: 100%;
  text-align: left;
  padding-bottom: 0.5rem;
`;

export const EvolutionTitle = styled.h3`
  width: 100%;
  text-align: left;
  padding-bottom: 0.75rem;

  @media (max-width: 480px) {
    display: none;
  }
`;
