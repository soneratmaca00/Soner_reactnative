import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native'
import {colors, fontSizes, spacing} from '../consts/consts';

const styles = StyleSheet.create({
  body0: {
    fontSize: fontSizes.s0,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: fontSizes.s4,
  },
  body2: {
    fontSize: fontSizes.s2,
  },
  body3: {
    fontSize: fontSizes.s0,
  },
  title1: {
    fontSize: fontSizes.s4,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: fontSizes.s2,
    fontWeight: 'bold',
  },
  body4: {
    fontSize: fontSizes.s4,
  },
  body5: {
    fontSize: fontSizes.s5,
  },
  body6: {
    fontSize: fontSizes.s6,
  },
  defaultConainer: {
    marginVertical: spacing.s1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  }
});

export default function Typography ({
  children,
  variant,
  containerStyle,
  color,
  textAlign,
  numberOfLines,
  fontSize,
  fontFamily,
}) {
  const chooseVariantStyle = style => {
    return styles[style]
  }
  const variantStyle = chooseVariantStyle(variant)
  return (
    <View style={[containerStyle, styles.defaultConainer]}>
      <Text
        numberOfLines={numberOfLines}
        style={[
          variantStyle,
          {color: color ?? colors.black},
          textAlign !== undefined && {textAlign},
          fontSize !== undefined && {fontSize},
          fontFamily !== undefined && {fontFamily},
        ]}>
        {children}
      </Text>
    </View>
  )
}
Typography.propTypes = {
  variant: PropTypes.oneOf([
    'body0',
    'body1',
    'body2',
    'body3',
    'body4',
    'body5',
    'body6',
    'title1',
    'title2',
  ]),
}
