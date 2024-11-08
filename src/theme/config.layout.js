const layout = {
  // Overflow
  visible: {
    overflow: 'visible',
  },
  hidden: {
    overflow: 'hidden',
  },
  scroll: {
    overflow: 'scroll',
  },
  // Top/Right/Bottom/Left
  ['top-0']: {
    top: 0,
  },
  ['right-0']: {
    right: 0,
  },
  ['bottom-0']: {
    bottom: 0,
  },
  ['left-0']: {
    left: 0,
  },
  ['h-full']: {
    height: '100%',
  },
  ['w-full']: {
    width: '100%',
  },
  ['min-h-full']: {
    minHeight: '100%',
  },
  ['min-w-full']: {
    minWidth: '100%',
  },
  ['max-h-full']: {
    maxHeight: '100%',
  },
  ['max-w-full']: {
    maxWidth: '100%',
  },
  // Z Index
  ['z-0']: {
    zIndex: 0,
  },
  ['z-1']: {
    zIndex: 0,
  },
  ['z-2']: {
    zIndex: 2,
  },
  ['z-3']: {
    zIndex: 3,
  },
  ['z-10']: {
    zIndex: 10,
  },
  ['z-20']: {
    zIndex: 20,
  },
  ['z-30']: {
    zIndex: 30,
  },
  ['z-40']: {
    zIndex: 40,
  },
  ['z-50']: {
    zIndex: 50,
  },
  // Border
  ['border-solid']: {
    borderStyle: 'solid',
  },
  ['border-dashed']: {
    borderStyle: 'dashed',
  },
  ['border-dotted']: {
    borderStyle: 'dotted',
  },
  // Position
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  static: {
    position: 'static',
  },
  // Display
  hidden: {
    display: 'none',
  },
  // Flex
  flex: {
    display: 'flex',
  },
  ['flex-1']: {
    flex: 1,
  },
  // ['flex-none']: {
  //   flexGrow: 0,
  //   flexShrink: 0,
  // },
  // ['flex-auto']: {
  //   flexGrow: 1,
  //   flexShrink: 1,
  // },
  // ['flex-initial']: {
  //   flexGrow: 0,
  //   flexShrink: 1,
  // },
  // Flex Shrink
  'flex-shrink': {
    flexShrink: 1,
  },
  'flex-shrink-0': {
    flexShrink: 0,
  },
  // Flex Grow
  'flex-grow': {
    flexGrow: 1,
  },
  'flex-grow-0': {
    flexGrow: 0,
  },
  // Flex Direction
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'flex-col': {
    flexDirection: 'column',
  },
  'flex-col-reverse': {
    flexDirection: 'column-reverse',
  },
  // Flex Wrap
  'flex-wrap': {
    flexWrap: 'wrap',
  },
  'flex-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'flex-nowrap': {
    flexWrap: 'nowrap',
  },
  // Justify Content
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-end': {
    justifyContent: 'flex-end',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-around': {
    justifyContent: 'space-around',
  },
  'justify-evenly': {
    justifyContent: 'space-evenly',
  },
  // Align Content
  'content-start': {
    alignContent: 'flex-start',
  },
  'content-end': {
    alignContent: 'flex-end',
  },
  'content-center': {
    alignContent: 'center',
  },
  'content-between': {
    alignContent: 'space-between',
  },
  'content-around': {
    alignContent: 'space-around',
  },
  'content-stretch': {
    alignContent: 'stretch',
  },
  // Align Items
  'items-start': {
    alignItems: 'flex-start',
  },
  'items-end': {
    alignItems: 'flex-end',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-baseline': {
    alignItems: 'baseline',
  },
  'items-stretch': {
    alignItems: 'stretch',
  },
  // Align Self
  'self-auto': {
    alignSelf: 'auto',
  },
  'self-start': {
    alignSelf: 'flex-start',
  },
  'self-end': {
    alignSelf: 'flex-end',
  },
  'self-center': {
    alignSelf: 'center',
  },
  'self-baseline': {
    alignSelf: 'baseline',
  },
  'self-stretch': {
    alignSelf: 'stretch',
  },
  // Text Align
  'text-left': {
    textAlign: 'left',
  },
  'text-center': {
    textAlign: 'center',
  },
  'text-right': {
    textAlign: 'right',
  },
  'text-justify': {
    textAlign: 'justify',
  },
  // Text Transform
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  // Text Decoration
  underline: {
    textDecorationLine: 'underline',
  },
  'line-through': {
    textDecorationLine: 'line-through',
  },
  'no-underline': {
    textDecorationLine: 'none',
  },
}

const opacity = {
  ['opacity-0']: { opacity: 0 },
  ['opacity-5']: { opacity: 0.05 },
  ['opacity-10']: { opacity: 0.1 },
  ['opacity-20']: { opacity: 0.2 },
  ['opacity-25']: { opacity: 0.25 },
  ['opacity-30']: { opacity: 0.3 },
  ['opacity-40']: { opacity: 0.4 },
  ['opacity-50']: { opacity: 0.5 },
  ['opacity-60']: { opacity: 0.6 },
  ['opacity-70']: { opacity: 0.7 },
  ['opacity-75']: { opacity: 0.75 },
  ['opacity-80']: { opacity: 0.8 },
  ['opacity-90']: { opacity: 0.9 },
  ['opacity-95']: { opacity: 0.95 },
  ['opacity-100']: { opacity: 1 },
}

module.exports = { layout, opacity }
