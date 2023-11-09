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
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;