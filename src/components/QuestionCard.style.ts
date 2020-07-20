import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: white;
  border: none;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    color: blue;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'green'
        : !correct && userClicked
        ? 'red'
        : 'white'};
    border: ${({ correct, userClicked }) =>
      correct
      ? '3px solid green'
      : !correct && userClicked
      ? '3px solid red'
      : '3px solid blue'};
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    color: blue;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
