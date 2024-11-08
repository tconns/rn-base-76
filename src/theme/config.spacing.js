const spacing = {
  'sm-1': 1,
  'sm-2': 2,
  'sm-4': 4,
  'sm-6': 6,
  'sm-8': 8,
  'sm-12': 12,
  'sm-16': 16,
  'md-24': 24,
  'md-32': 32,
  'md-40': 40,
  'md-48': 48,
  'md-56': 56,
  'md-64': 64,
  'md-72': 72,
  'md-80': 80,
  'md-88': 88,
  'lg-96': 96,
  'lg-104': 104,
  'lg-112': 112,
  'lg-120': 120,
  'lg-128': 128,
}

const generateSpacingStyles = (spacing) => {
  const styles = {};

  Object.keys(spacing).forEach((key) => {
    const value = spacing[key];

    // Padding
    styles[`p-${key}`] = { padding: value };
    styles[`pt-${key}`] = { paddingTop: value };
    styles[`pr-${key}`] = { paddingRight: value };
    styles[`pb-${key}`] = { paddingBottom: value };
    styles[`pl-${key}`] = { paddingLeft: value };
    styles[`px-${key}`] = { paddingHorizontal: value };
    styles[`py-${key}`] = { paddingVertical: value };

    // Margin
    styles[`m-${key}`] = { margin: value };
    styles[`mt-${key}`] = { marginTop: value };
    styles[`mr-${key}`] = { marginRight: value };
    styles[`mb-${key}`] = { marginBottom: value };
    styles[`ml-${key}`] = { marginLeft: value };
    styles[`mx-${key}`] = { marginHorizontal: value };
    styles[`my-${key}`] = { marginVertical: value };
  });

  return styles;
}

module.exports = {
  spacing: generateSpacingStyles(spacing),
  spacingContent: spacing,
}