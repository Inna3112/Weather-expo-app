import { Switch } from 'react-native';

import Colors from '@/constants/Colors';

interface IAppSwitch {
  isEnabled: boolean,
  toggleSwitch: (state:boolean) => void,
}
function AppSwitch({ isEnabled, toggleSwitch }:IAppSwitch) {
  return (
    <Switch
      trackColor={Colors.light.Switch.trackColor}
      thumbColor={Colors.light.Switch.thumbColor}
      ios_backgroundColor="#3e3e3e"
      onValueChange={(val:boolean) => toggleSwitch(val)}
      value={isEnabled}
    />
  );
}

export default AppSwitch;
