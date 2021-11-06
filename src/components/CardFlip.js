import React, {Component} from 'react';
import {PermissionsAndroid, Image, View, Text, Animated} from 'react-native';
import theme from '../theme/index';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
function CardFlip() {
  const [StoreVisible, showStoreVisible] = useState(false);
  const RewardModal = () => {
    return (
      <Modal
        coverScreen={true}
        style={{
          backgroundColor: '#fff',
          margin: 0,
          opacity: 0.9,
          justifyContent: 'space-between',
        }}
        animationType="slide"
        transparent={true}
        isVisible={StoreVisible}
        onRequestClose={() => {}}>
        <View style={{alignItems: 'center', marginTop: 100 * theme.consts.BW}}>
          <View style={{marginTop: 40 * theme.consts.BW}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24 * theme.consts.BW,
                color: '#808080',
                fontWeight: 'bold',
              }}>
              GREAT WORK
            </Text>
          </View>
          <View style={{marginTop: 40 * theme.consts.BW}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22 * theme.consts.BW,
                color: '#8DC965',
                fontWeight: 'bold',
              }}>
              THANK YOU FOR BEING ENVIRONMENTALLY CONSCIOUS!
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      {/* {RewardModal()} */}
      {console.log('fff')}
      <View style={{backgroundColor: 'red', height: 255}}>
        <Text>hh</Text>
      </View>
    </>
  );
}


export default CardFlip;
