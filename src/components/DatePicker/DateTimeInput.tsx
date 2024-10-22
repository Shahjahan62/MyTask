import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Entypo from 'react-native-vector-icons/Entypo'; // For the calendar icon
import {colors} from '../../theme/colors';
import GlobalText from '../Text/GlobalText';

const DatePickerInput = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const formatDate = date => {
    const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; // Format to DD-MM-YYYY
  };
  const onConfirm = selectedDate => {
    setShow(false);
    setDate(selectedDate);

    // Format the date to a readable string (e.g., "YYYY-MM-DD")
    const formatted = formatDate(selectedDate);
    setFormattedDate(formatted);
  };

  return (
    <React.Fragment>
      <GlobalText variant="h3" style={{fontWeight: 'bold', marginTop: 3}}>
        Birthday
      </GlobalText>
      <View style={styles.container}>
        <TextInput
          value={formattedDate}
          placeholder="DD-MM-YYYY"
          style={styles.textInput}
          editable={false}
          placeholderTextColor={colors.inputPlaceholder}
        />
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.iconContainer}>
          <Entypo name="chevron-down" size={24} color="white" />
        </TouchableOpacity>

        <DatePicker
          modal
          open={show}
          date={date}
          mode="date"
          onConfirm={onConfirm}
          theme="dark"
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.inputBackground,
  },
  textInput: {
    borderRadius: 8,
    width: '85%',
    padding: 10,
    fontSize: 16,
    color: colors.inputPlaceholder,
  },
  iconContainer: {
    padding: 10,
  },
});

export default DatePickerInput;
