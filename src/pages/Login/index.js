import React, { useRef, useContext, useState } from 'react';
// import { Switch } from 'react-native';
import { Form } from '@unform/mobile';
import { ThemeContext } from 'styled-components/native';

import Input from '../../components/Input';
import { Container, Logo, BtnLogin, TextBtnLogin, Switch } from './styles';

export default function Login() {
   const { theme, toggleTheme } = useContext(ThemeContext);
   const formRef = useRef(null);
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   function handleSubmit(data, { reset }) {
      // console.log(data);
      toggleTheme();
      reset();
   }

   return (
     <Container>
        <Switch 
            value={isEnabled}
            onValueChange={toggleSwitch}
            onChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#f40552" }}
            thumbColor={isEnabled ? "#000" : "#eb6383"}
        />
        <Logo color={theme.colors.title}>Login!</Logo>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="login"/>
            <Input name="password"/>

            <BtnLogin color={theme.colors.primary} onPress={() => formRef.current.submitForm()}>
               <TextBtnLogin>Entrar</TextBtnLogin>
            </BtnLogin>
        </Form>
     </Container>
  )
}