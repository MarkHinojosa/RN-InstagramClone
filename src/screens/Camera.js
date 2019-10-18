import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CameraKitCamera} from 'react-native-camera-kit';
export default class Camera extends Component {
  //   componentDidMount = () => {
  // const isUserAuthorizedCamera = await CameraKitCamera.requestDeviceCameraAuthorization();
  //   };

  renderCamera = () => {
    const isFocused = this.props.navigation.isFocused();
    if (!isFocused) {
      return null;
    } else if (isFocused) {
      return (
        <CameraKitCamera
          ref={cam => (this.camera = cam)}
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}
          cameraOptions={{
            flashMode: 'auto', // on/off/auto(default)
            focusMode: 'on', // off/on(default)
            zoomMode: 'on', // off/on(default)
            ratioOverlay: '1:1', // optional, ratio overlay on the camera and crop the image seamlessly
            ratioOverlayColor: '#00000077', // optional
          }}
          onReadQRCode={event =>
            console.log(event.nativeEvent.qrcodeStringValue)
          } // optional
        />
      );
    }
  };

  render() {
    return <View>{this.renderCamera()}</View>;
  }
}
