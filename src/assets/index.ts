enum EnumTypeImage {
  JPG = '.jpg',
  PNG = '.png',
  JSON = '.json',
  WEBP = '.webp',
}

type SourceImage = {
  keyName: string
  source: string | number
  type: EnumTypeImage
}

const ImageConstants = {
  logo: {
    source: require('./images/logo.png'),
    type: EnumTypeImage.PNG,
    keyName: 'logo',
  },
  step_1: {
    source: require('./images/step_1.png'),
    type: EnumTypeImage.PNG,
    keyName: 'step_1',
  },
  step_2: {
    source: require('./images/step_2.png'),
    type: EnumTypeImage.PNG,
    keyName: 'step_2',
  },
  step_3: {
    source: require('./images/step_3.png'),
    type: EnumTypeImage.PNG,
    keyName: 'step_3',
  },
  step_4: {
    source: require('./images/step_4.png'),
    type: EnumTypeImage.PNG,
    keyName: 'step_4',
  },
  google_icon: {
    source: require('./images/google_icon.png'),
    type: EnumTypeImage.PNG,
    keyName: 'google_icon',
  },
  facebook_icon: {
    source: require('./images/facebook_icon.png'),
    type: EnumTypeImage.PNG,
    keyName: 'facebook_icon',
  },
  reg_info: {
    source: require('./images/reg_info.png'),
    type: EnumTypeImage.PNG,
    keyName: 'reg_info',
  },
  welcome: {
    source: require('./images/welcome.png'),
    type: EnumTypeImage.PNG,
    keyName: 'welcome',
  },
  bg_banner: {
    source: require('./images/bg_banner.png'),
    type: EnumTypeImage.PNG,
    keyName: 'bg_banner',
  },
}

const getImageFromAsset = (name: string, item: SourceImage): string | number => {
  return item.source
}

export const ImageAsset = {
  ...ImageConstants,
  init() {
    Object.keys(ImageConstants).map((row) => {
      const item: SourceImage = {
        source: getImageFromAsset(row, ImageConstants[row]),
        type: ImageConstants[row].type,
        keyName: ImageConstants[row].keyName,
      }
      this[row] = item
    })
  },
}
