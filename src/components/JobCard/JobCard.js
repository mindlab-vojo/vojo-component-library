import React from 'react'
import PropTypes from 'prop-types'

import * as JobCard from './JobCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'

const JobCardComponent = ({
  companyNumber,
  id,
  imageUrl,
  isNew,
  isUnavailable,
  locations,
  onClickCard,
  slots,
  title,
}) => {

  const slotText = slots > 1 ? "VAGAS" : "VAGA"

  const renderComponent = (theme) => (
    <Card padding="12px 8px">
      <JobCard.Wrapper
        className="JobCard">
        <JobCard.ImageBlock 
          className="JobCard__ImageBlock">
          <JobCard.ImageWrapper
            className="JobCard__ImageWrapper">
            <JobCard.ImageCropper
              className="JobCard__ImageWrapper__Cropper">
              <JobCard.Image
                src={imageUrl}
                alt={title}
              />
            </JobCard.ImageCropper>
          </JobCard.ImageWrapper>
          <JobCard.Slots
            className="JobCard__Slots">
            <Typography 
              fontSize="10px"
              fontWeight="bolder">
              {`${slots} ${slotText}`}
            </Typography>
          </JobCard.Slots>
        </JobCard.ImageBlock>
        <JobCard.DataBlock
          className="JobCard__DataBlock">
        </JobCard.DataBlock>
      </JobCard.Wrapper>
    </Card>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

JobCardComponent.propTypes = {
  companyNumber: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isNew: PropTypes.bool,
  isUnavailable: PropTypes.bool,
  locations: PropTypes.array,
  slots: PropTypes.number,
  onClickCard: PropTypes.string,
  title: PropTypes.string,
}

export default JobCardComponent
