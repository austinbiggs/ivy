import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiNextProps {}

const StyledUiNext = styled.div`
  color: pink;
`;

export function UiNext(props: UiNextProps) {
  return (
    <StyledUiNext>
      <h1>Welcome to UiNext!</h1>
    </StyledUiNext>
  );
}

export default UiNext;
