const partyCloudy = require('../assets/images/partlycloudy.png');
const sun = require('../assets/images/sun2.png');
const cloud = require('../assets/images/cloud.png');
const moderateRain = require('../assets/images/moderaterain.png');
const heavyRain = require('../assets/images/heavyrain.png');
const mist = require('../assets/images/heavyrain.png');

const getIcon = (icon?: string) => {
  let img;
  switch (icon?.slice(0, -1)) {
    case '01':
      img = sun;
      break;
    case '02':
      img = partyCloudy;
      break;
    case '03':
      img = cloud;
      break;
    case '04':
      img = cloud;
      break;
    case '09':
      img = moderateRain;
      break;
    case '10':
      img = partyCloudy;
      break;
    case '11':
      img = heavyRain;
      break;
    case '13':
      img = heavyRain;
      break;
    case '50':
      img = mist;
      break;
    default:
      img = sun;
  }

  return img;
};

export default getIcon;
