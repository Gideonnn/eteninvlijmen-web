import avatarData from '../assets/avatar-data.json';

const _defaultOptions = () => ({
  topType: 'NoHair',
  hairColor: 'Default',
  hatColor: 'Red',
  accessoriesType: 'Blank',
  facialHairType: 'Blank',
  facialHairColor: 'Auburn',
  clotheType: 'ShirtCrewNeck',
  clotheColor: 'White',
  eyeType: 'Default',
  eyebrowType: 'Default',
  mouthType: 'Default',
  skinColor: 'Default',
});

const _createAvatar = traits => ({
  ..._defaultOptions(),
  ...traits,
});

const createUrl = traits =>
  Object.keys(_createAvatar(traits)).reduce(
    (url, key) => `${url}&${key}=${traits[key]}`,
    'https://avataaars.io/?avatarStyle=Circle'
  );

export default { createUrl };
