module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
        'module-resolver',
        {
            alias: {
                '@components': './src/components',
                '@navigator': './src/navigator',
                '@screens': './src/screens',
                '@assets': './src/assets',
            },
        },
    ],
],
};
