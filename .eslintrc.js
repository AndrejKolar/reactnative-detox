module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox'],
  env: {
    jest: true,
    'detox/detox': true,
  },
};
