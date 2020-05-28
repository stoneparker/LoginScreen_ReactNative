import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

export default function Input({ name }) {
   const inputRef = useRef(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);

   useEffect(() => {
      registerField({
         name: fieldName,
         ref: inputRef.current,
         path: 'value'
      })
   }, [fieldName, registerField]);

   return (
      <Container>
         <TextInput 
            ref={inputRef} 
            defaultValue={defaultValue} 
            onChangeText={value => {
               if (inputRef.current) {
                  inputRef.current.value = value
               }
            }}
            style={ error && { borderColor: '#f00'}} 
         />
      </Container>
   );
}