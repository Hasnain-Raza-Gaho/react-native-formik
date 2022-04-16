// Formik x React Native example
import React from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Checkbox,
} from 'react-native';
import {Formik} from 'formik';

function App() {
  return (
    <View style={style.main}>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          password2: '',
          Gender: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <View>
              <Text style={style.title}>Create an Account</Text>
            </View>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={style.text}
              placeholder=" Full Name"
            />
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={style.text}
              placeholder=" Email"
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={style.text}
              placeholder=" Password"
            />
            <TextInput
              onChangeText={handleChange('password2')}
              onBlur={handleBlur('password2')}
              value={values.password2}
              style={style.text}
              placeholder=" Confirm Password"
            />

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: '#f3f3f3',
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '600',
    color: '#3087ff',
  },
});

export default App;
