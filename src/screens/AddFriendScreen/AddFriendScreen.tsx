import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../theme/colors';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import GradientVew from '../../components/GradientView./GradientView';
import FriendSuggestions from '../../components/FriendSuggestions';
import {Modal} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import GlobalText from '../../components/Text/GlobalText';
import RadialGradientButton from '../../components/RadialGradientButton';
import ChooseGenderButton from '../../ChooseGenderButton';

const AddFriendScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const Array = [1, 3, 4, 4, , 5, 5, 5];

  return (
    <GradientVew style={styles.container}>
      <Header title="Add friends" pageNumber={'4'} />
      <View style={{marginTop: 20}}>
        <SearchInput />
        <Text>AddFriendScreen</Text>
        <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {Array.map(() => (
            <FriendSuggestions />
          ))}
          <Modal
            animationType="slide" // Can be 'slide', 'fade', or 'none'
            transparent={true} // Makes the modal background transparent
            visible={modalVisible} // Controls whether the modal is visible or not
            onRequestClose={() => {
              setModalVisible(false); // Close the modal when back button is pressed (Android)
            }}>
            <View style={styles.centeredView}>
              <BlurView
                blurType="light"
                blurAmount={10}
                style={styles.blurModal}>
                <GlobalText
                  variant="h2"
                  style={{textAlign: 'center', fontSize: 22}}>
                  To see your contacts, turn on “Contacts” in settings
                </GlobalText>
                <View style={{marginTop: 40, width: '100%'}}>
                  <RadialGradientButton
                    title="Helloo"
                    style={{alignSelf: 'center', marginTop: 20}}
                  />
                  <TouchableOpacity style={{alignSelf: 'center'}}>
                    <GlobalText variant="h3">Sync Now</GlobalText>
                  </TouchableOpacity>
                </View>
              </BlurView>

              {/* Button to close the modal */}
            </View>
          </Modal>
        </View>
      </View>
    </GradientVew>
  );
};

export default AddFriendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  modalView: {
    width: '100%',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  blurModal: {
    height: 200,
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
