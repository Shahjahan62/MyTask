import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import GradientVew from '../../components/GradientView./GradientView';
import FriendSuggestions from '../../components/FriendSuggestions';
import {Modal} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import GlobalText from '../../components/Text/GlobalText';

const AddFriendScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const Array = [1, 3, 4, 4, 5, 5, 5];

  return (
    <GradientVew style={styles.container}>
      <Header title="Add friends" pageNumber={'4'} />
      <View style={{marginTop: 20}}>
        <SearchInput />
        <Text>AddFriendScreen</Text>
        <ScrollView>
          <View style={styles.wrapContainer}>
            {Array.map(() => (
              <FriendSuggestions />
            ))}
          </View>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <BlurView
              // blurType="light"
              blurAmount={10}
              style={styles.blurModal}>
              <GlobalText
                variant="h2"
                style={{textAlign: 'center', fontSize: 22}}>
                To see your contacts, turn on “Contacts” in settings
              </GlobalText>
              <View style={{marginTop: 40, width: '100%'}}>
                {/* <RadialGradientButton
                    title="Helloo"
                    style={{alignSelf: 'center', marginTop: 20}}
                  /> */}
                <TouchableOpacity style={{alignSelf: 'center'}}>
                  <GlobalText variant="h3">Sync Now</GlobalText>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
        </Modal>
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
  wrapContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
});
