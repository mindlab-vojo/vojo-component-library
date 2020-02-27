import React from 'react'
import PropTypes from 'prop-types'

const Sample = ({name}) => {
    return (
        <div>
            <p>
                Hello {name}!
            </p>
        </div>
    )
}

Sample.propTypes = {
    name: PropTypes.string
}

export default Sample
