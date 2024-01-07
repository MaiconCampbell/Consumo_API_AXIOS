import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 24
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain'
  },
  carBrand: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic'
  },
  carName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    width: '95%',
    height: '100%',
    marginVertical: 12,
    resizeMode: 'contain',
  },
  priceLabelContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingBottom: 20,
    marginTop: 14,
  },
  priceLabel: {
    color: '#FFF',
    fontSize: 22
  }
});
