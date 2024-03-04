import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../components/Input';
import styles from './Login.styles';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      showMessage({message: 'Giriş Yapıldı', type: 'success'});
    } catch (error) {
      setLoading(false);
      showMessage({message: error.code, type: 'danger'});
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <View style={styles.body}>
        <Input
          placeholder="E-posta adresinizi giriniz."
          onChangeText={setEmail}
          value={email}
        />
        <Input
          placeholder="Şifrenizi giriniz."
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.footer}>
          <Button title="Giriş Yap" loading={loading} onPress={handleLogin} />
          <Button
            title="Kayıt Ol"
            theme="secondary"
            onPress={() => navigation.navigate('SignupPage')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
