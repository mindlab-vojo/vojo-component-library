import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as Components from './Sample.style'

const Sample = ({ color, name }) => {
    return (
        <Components.SampleCard className={classNames('Card')}>
            <Components.SampleText 
                className={classNames('Card__Text')}
                color={color}>
                Hello {name}!
            </Components.SampleText>
        </Components.SampleCard>
    )
}

Sample.propTypes = {
    name: PropTypes.string
}

export default Sample
