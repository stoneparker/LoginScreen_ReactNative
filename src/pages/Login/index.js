import React, { useRef, useContext, useState } from 'react';
import { Form } from '@unform/mobile';
import { ThemeContext } from 'styled-components/native';
import * as Yup from 'yup';

import Input from '../../components/Input';
import { Container, Logo, BtnLogin, TextBtnLogin, Switch } from './styles';

export default function Login() {
   const { theme, toggleTheme } = useContext(ThemeContext);
   const formRef = useRef(null);
   const [isEnabled, setIsEnabled] = useState(true);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   async function handleSubmit(data, { reset }) {
      try {
         const schema = Yup.object().shape({
            login: Yup.string().required('O login é obrigatório'),
            password: Yup.string().required('A senha é obrigatória')
         });

         await schema.validate(data, {
            abortEarly: false
         });

         // console.log(data);
         formRef.current.setErrors({});
         reset();
      } catch(err) {
         if (err instanceof Yup.ValidationError) {
            const errorMessages = {};

            err.inner.forEach(error => {
               errorMessages[error.path] = error.message;
            })

            formRef.current.setErrors(errorMessages);
         }
      }
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