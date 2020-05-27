import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   
   background: ${props => props.theme.theme.colors.background}
`;

export const Logo = styled.Text`
   font-size: 30px;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 2px;
   margin-bottom: 40px;
   color: ${props => props.color}
`;

export const BtnLogin = styled.TouchableOpacity`
   margin-top: 20px;
   background: ${props => props.color};
   width: 80%;
   height: 50px;
   border-radius: 4px;
   justify-content: center;
   align-items: center;
`;

export const TextBtnLogin = styled.Text`
   color: #fff;
   font-weight: bold;
   font-size: 16px;
   text-transform: uppercase;
   letter-spacing: 1px;
`;

export const Switch = styled.Switch`
   position: absolute;
   top: 40px;
   right: 30px;
`;