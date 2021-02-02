import React from 'react'
import PropTypes from 'prop-types'

import * as GenericCard from './GenericCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'
import IconManager from '../IconManager'

const CourseCardComponent = ({
  backgroundColor,
  borderRadius,
  children,
  fontWeightSubtitle,
  id,
  imageUrl,
  isFree,
  isNew,
  justifyContent,
  onClickCard,
  subtitle,
  subtitleColor,
  title,
  titleColor,
  titleSize,
  workload
}) => {

  const renderComponent = (theme) => (
    <Card
      backgroundColor={backgroundColor}
      hasPointer
      id={`GenericCard-${id}`}
      padding="15px 8px"
      onClick={onClickCard}>
      {isNew && <GenericCard.NewTag theme={theme}>
        <Typography
          color={theme.colors.whiteColor}>
          novidade
        </Typography>
      </GenericCard.NewTag>}
      <GenericCard.Wrapper
        className="GenericCard">
        <GenericCard.ImageBlock
          className="CourseCard__ImageBlock">
          <GenericCard.ImageWrapper
            className="CourseCard__ImageWrapper">
            <GenericCard.ImageCropper
              borderRadius={borderRadius}
              className="CourseCard__ImageWrapper__Cropper">
              <GenericCard.Image
                src={imageUrl}
                alt={title}
              />
            </GenericCard.ImageCropper>
          </GenericCard.ImageWrapper>
        </GenericCard.ImageBlock>
        <GenericCard.DataBlock justifyContent={justifyContent}>
          <GenericCard.Title>
            <Typography
              color={titleColor}
              fontSize={titleSize}
              fontWeight="bolder"
              fontFamily={"'Montserrat', sans-serif"}>
              {title}
            </Typography>
          </GenericCard.Title>
          {subtitle && <GenericCard.Subtitle>
            <Typography
              fontSize="12px"
              fontWeight={fontWeightSubtitle}
              color={subtitleColor ? subtitleColor : theme.colors.lightGreyColor}
              fontFamily={"'Rubik', sans-serif"}>
              {`${subtitle}`}
            </Typography>
          </GenericCard.Subtitle>}
          {isFree && <GenericCard.Free>
            <Typography
              fontSize="12px"
              fontWeight="bolder"
              color={'#666666'}
              fontFamily={"'Rubik', sans-serif"}
            >
              {"Gratuito"}
            </Typography>
          </GenericCard.Free>}
          {workload && <GenericCard.Workload>
            <IconManager icon={'Clock'} fill={'#666666'} width={'20px'} height={'20px'} />
            <GenericCard.WorkloadText>
              <GenericCard.WorkloadTextWrapper>
                <Typography
                  fontSize="12px"
                  color={theme.colors.darkGreyColor}
                  fontFamily={"'Rubik', sans-serif"}
                >
                  {"Carga horária: "}
                </Typography>
              </GenericCard.WorkloadTextWrapper>
              <GenericCard.WorkloadTextWrapper>
                <Typography
                  fontSize="12px"
                  fontWeight="bolder"
                  color={'#666666'}
                  fontFamily={"'Rubik', sans-serif"}
                >
                  {workload}
                </Typography>
              </GenericCard.WorkloadTextWrapper>
            </GenericCard.WorkloadText>
          </GenericCard.Workload>}
          {children}
        </GenericCard.DataBlock>
      </GenericCard.Wrapper>
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
  children: PropTypes.node,
  companyNumber: PropTypes.number,
  fontWeightSubtitle: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isFree: PropTypes.bool,
  isNew: PropTypes.bool,
  justifyContent: PropTypes.string,
  locations: PropTypes.array,
  onClickCard: PropTypes.func,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.string,
  workload: PropTypes.string
}

CourseCardComponent.defaultProps = {
  titleColor: "#391DDD", 
  titleSize: '14px'
}

export default CourseCardComponent
