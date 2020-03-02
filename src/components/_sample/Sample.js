import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { SampleCard, SampleText } from './Sample.style'

const Sample = ({ name }) => {
    return (
        <SampleCard className={classNames('Card')}>
            <SampleText className={classNames('Card__Text')}>
                Hello {name}!
            </SampleText>
        </SampleCard>
    )
}

Sample.propTypes = {
    name: PropTypes.string
}

export default Sample
