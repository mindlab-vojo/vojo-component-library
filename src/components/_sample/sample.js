import React from 'react'
import PropTypes from 'prop-types'

const sample = ({name}) => {
    return (
        <div>
            <p>
                Hello {name}!
            </p>
        </div>
    )
}

sample.propTypes = {
    name: PropTypes.string
}

export default sample
