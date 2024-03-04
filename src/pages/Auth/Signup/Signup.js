import {Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Signup.styles';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

const Signup = ({navigation}) => {
  const handleSignup = formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({message: 'Şifreler eşleşmiyor', type: 'danger'});
      return;
    }
    try {
      auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.repassword,
      );
      showMessage({message: 'kayıt oluşturuldu', type: 'success'});
    } catch (error) {
      showMessage({message: error.code, type: 'danger'});
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>codetalks</Text>

      <Formik initialValues={initialFormValues} onSubmit={handleSignup}>
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.body}>
            <Input
              placeholder="E-posta adresinizi giriniz."
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              placeholder="Şifrenizi giriniz."
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Input
              placeholder="Şifrenizi tekrar giriniz."
              value={values.repassword}
              onChangeText={handleChange('repassword')}
            />
            <View style={styles.footer}>
              <Button title="Kayıt Ol" onPress={handleSubmit} />
              <Button
                title="Geri Dön"
                onPress={() => navigation.goBack()}
                theme="secondary"
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Signup;
