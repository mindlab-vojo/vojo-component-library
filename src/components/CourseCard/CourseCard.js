import React from 'react'
import PropTypes from 'prop-types'

import * as CourseCard from './CourseCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'
import IconManager from '../IconManager'

const CourseCardComponent = ({
  backgroundColor,
  borderRadius,
  id,
  imageUrl,
  isFree,
  isNew,
  onClickCard,
  subtitle,
  subtitleColor,
  titleColor,
  title,
  workload
}) => {

  const renderComponent = (theme) => (
    <Card
      backgroundColor={backgroundColor}
      hasPointer
      id={`CourseCard-${id}`}
      padding="15px 8px"
      onClick={onClickCard}>
      {isNew && <CourseCard.NewTag theme={theme}>
        <Typography
          color={theme.colors.whiteColor}>
          novidade
            </Typography>
      </CourseCard.NewTag>}
      <CourseCard.Wrapper
        className="CourseCard">
        <CourseCard.ImageBlock
          className="CourseCard__ImageBlock">
          <CourseCard.ImageWrapper
            className="CourseCard__ImageWrapper">
            <CourseCard.ImageCropper
              borderRadius={borderRadius}
              className="CourseCard__ImageWrapper__Cropper">
              <CourseCard.Image
                src={imageUrl}
                alt={title}
              />
            </CourseCard.ImageCropper>
          </CourseCard.ImageWrapper>
        </CourseCard.ImageBlock>
        <CourseCard.DataBlock>
          <CourseCard.Title
            className="CourseCard__Title">
            <Typography
              color={titleColor}
              fontSize="18px"
              fontWeight="bolder">
              {title}
            </Typography>
          </CourseCard.Title>
          {subtitle && <CourseCard.Subtitle
            className="CourseCard__Companies">
            <Typography
              fontSize="12px"
              color={subtitleColor}>
              {`${subtitle}`}
            </Typography>
          </CourseCard.Subtitle>}
          {isFree && <CourseCard.Free>
            <Typography
              fontSize="12px"
              fontWeight="bolder"
              color={theme.colors.blackColor}
            >
              {"Gratuito "}
            </Typography>
          </CourseCard.Free>}
          {workload && <CourseCard.Workload>
            <IconManager icon={'Clock'} fill={'#666666'} width={'20px'} height={'20px'} />
            <CourseCard.WorkloadText>
              <Typography
                fontSize="12px"
                color={theme.colors.darkGreyColor}
              >
                {"Carga horária: "}
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="bolder"
                color={theme.colors.blackColor}
              >
                {workload}
              </Typography>
            </CourseCard.WorkloadText>
          </CourseCard.Workload>}
        </CourseCard.DataBlock>
      </CourseCard.Wrapper>
    </Card>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

CourseCardComponent.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  companyNumber: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isFree: PropTypes.bool,
  isNew: PropTypes.bool,
  locations: PropTypes.array,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  workload: PropTypes.string,
}

export default CourseCardComponent
