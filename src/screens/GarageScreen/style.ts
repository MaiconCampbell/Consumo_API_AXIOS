import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1E1E20',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraBox: {
    position: 'relative',
    width: '85%',
    height: '90%',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 10,
  },
  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#FFF',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },
  topRigth: {
    top: 0,
    right: 0,
    transform: [{rotate: '90deg'}]
  },
  bottomLeft: {
    bottom: -1,
    left: 0,
    transform: [{rotate: '-90deg'}]
  },
  bottomRigth: {
    bottom: -1,
    right: 0,
    transform: [{rotate: '180deg'}]
  },
})
