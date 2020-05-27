import styled from 'styled-components/native';

export const Container = styled.View`
   width: 80%;
`;

export const TextInput = styled.TextInput`
   border: ${props => props.theme.theme.colors.inputBorder + ' 1px solid'};
   color: ${props => props.theme.theme.colors.text};
   padding: 0 15px;
   font-size: 18px;
   height: 50px;
   border-radius: 4px;
   margin-bottom: 15px;
`;