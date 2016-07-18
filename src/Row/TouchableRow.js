import React, { PropTypes } from 'react'

import {
  Text,
  Base,
  Image,
  TouchableRowCell
} from '../index'

/**
 * The basic RowCell for use within ListView. It displays
 * an image, primary text, secondary text, a value,
 * and an arrow right icon if the respective props are
 * specified.
 *
 * @composes TouchableRowCell, Image, Text
 */

const TouchableRow = ({
  primaryText,
  secondaryText,
  image,
  height,
  onPress,
  value,
  ...other
}) => (
  <TouchableRowCell
    height={height}
    py={2}
    onPress={onPress}
    {...other}
  >

    {image && (
      React.isValidElement(image)
        ? image
        : (
        <Image mr={2} width={40} height={40} source={image} />
        )
      )
    }

    <Base flex={1} row align='center' justify='space-between'>
      <Base flex={1}>
        {primaryText && (
          React.isValidElement(primaryText)
            ? primaryText
            : <Text lineHeight={2} numberOfLines={1}>{primaryText}</Text>
        )}
        {secondaryText && (
          <Text small lineHeight={2} light numberOfLines={1}>{secondaryText}</Text>
        )}
      </Base>

      {value && (
        <Text light>{value}</Text>
      )}

    </Base>

  </TouchableRowCell>
)

TouchableRow.displayName = 'TouchableRow'

TouchableRow.propTypes = {
  primaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryText: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  image: PropTypes.oneOfType([ PropTypes.object, PropTypes.node ]),
  height: PropTypes.number,

  /** Displays a > arrow **/
  showMore: PropTypes.bool
}

export default TouchableRow
