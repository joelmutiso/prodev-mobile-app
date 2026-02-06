import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

export default function Join() {
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
            <Text style={styles.titleText}>Join Now</Text>
            <Text style={styles.subText}>Create an account to get started</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Full Name</Text>
              <TextInput style={styles.formControl} placeholder="Enter your full name" />
            </View>

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
                  placeholder="Create a password" 
                />
                <Ionicons name="eye-off-outline" size={20} color="gray" />
              </View>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={() => console.log('Register')}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR JOIN WITH</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Buttons */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={GOOGLELOGO} />
              <Text style={styles.secondaryButtonText}>Join with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.secondaryButtonText}>Join with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Footer - Navigate to Sign In */}
          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text style={styles.signupSubTitleText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}