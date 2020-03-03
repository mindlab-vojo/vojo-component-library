import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as Sample from './Sample.style'

const SampleComponent = ({ color, name }) => {
    return (
        <Sample.Card className={classNames('Card')}>
            <Sample.Text 
                className={classNames('Card__Text')}
                color={color}>
                Hello {name}!
            </Sample.Text>
        </Sample.Card>
    )
}

SampleComponent.propTypes = {
    name: PropTypes.string,
}

export default SampleComponent
