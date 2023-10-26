import styled from 'styled-components/native';

type ContainerProps = {
  width: number;
  height: number;
  borderRadius: number
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  borderRadius: ${({ borderRadius }) => borderRadius};
  backgroundColor: ${({ backgroundColor }) => backgroundColor};
`;