import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper';
import {ReactNode, useState} from 'react';
import {Colors} from '../config/colors.config';

interface SearchBoxType {
  containerStyle?: ViewStyle;
  onClick?: (search?: string) => void;
  onSubmit?: (search: string) => void;
  onChange?: (search: string) => void;
  label: string;
  type: 'block' | 'input';
}
interface SearchInputType extends SearchBoxType {
  containerStyle?: ViewStyle;
  placholder: string;
  inputRef?: any;
  right?: ReactNode;
  left?: ReactNode;
  labelStyle?: TextStyle;
  // setValue?: (value: string) => void,
  // // type: 'input',
  value?: string;
  extra?: ReactNode;
}
type SearchBarProps = SearchInputType;
const SearchBar = (props: SearchBarProps) => {
  const [search, setSearch] = useState(props.value!);

  return (
    <TouchableOpacity
      onPress={() => {
        props?.onClick && props?.onClick(search)!;
      }}
      activeOpacity={1}
      style={[styles.container, props.containerStyle]}>
      {props.left}
      {props.type === 'block' ? (
        <View style={styles.labelVeiw}>
          <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
          {props.extra}
        </View>
      ) : (
        <TextInput
          ref={props.inputRef}
          value={search}
          style={styles.input}
          placeholderTextColor={'#7A7F8B'}
          onChangeText={(value: string) => {
            // props.setValue(value);
            setSearch(value);
            if (props.onChange) {
              props.onChange!(value);
            }
          }}
          onSubmitEditing={() => {
            // setSearch('');
            // console.log(search, 'key...'),
            props.onSubmit && props.onSubmit(search);
          }}
          placeholder={props.placholder}
        />
      )}
      {props.right ? (
        props.right
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              setSearch('');
              props.onSubmit!(search);
            }}>
            <AntDesignIcons name={'search1'} size={20} color={'black'} />
          </TouchableOpacity>
        </>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  label: {
    width: '80%',
    fontSize: 15,
  },
  input: {
    backgroundColor: 'transparent',
    color: Colors.white,
    width: '80%',
    padding: 0,
  },
  labelVeiw:{alignItems: 'flex-start', flex: 1},
});
export default SearchBar;
