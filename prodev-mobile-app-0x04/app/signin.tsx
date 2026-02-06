import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Header Icon Section */}
          <View style={styles.iconsection}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={HEROLOGOGREEN} />
          </View>

          {/* Title Section */}
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Sign in</Text>
            <Text style={styles.subText}>Welcome back to the ProDev Mobile App</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Email Address</Text>
              <TextInput style={styles.formControl} placeholder="Enter your email" />
            </View>

            <View>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput 
                  style={styles.passwordControl} 
                  secureTextEntry={true} 
                  placeholder="Enter your password" 
                />
                <Ionicons name="eye-off-outline" size={20} color="gray" />
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton} onPress={() => console.log('Login')}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR SIGN IN WITH</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Buttons */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={GOOGLELOGO} />
              <Text style={styles.secondaryButtonText}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.secondaryButtonText}>Login with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Footer - Navigate to Join */}
          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/join')}>
              <Text style={styles.signupSubTitleText}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}