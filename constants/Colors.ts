export const Colors = {
  light: {
    text: '#11181C',
    background: '#2A6A6A',
    baseBorderColor: '#e3e3e3',
    green: '#40BF80',
    tint: '#222',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#222',
    error: '#ff0000',
    bgWhite: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    bgBlack: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    Switch: {
      trackColor: { true: '#2A6A6A', false: '#fff' },
      thumbColor: '#fff',
    },

  },
};

export default Colors;
