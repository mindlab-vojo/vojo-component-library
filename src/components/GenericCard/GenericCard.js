import React from 'react'
import PropTypes from 'prop-types'

import * as GenericCard from './GenericCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'
import IconManager from '../IconManager'

const GenericCardComponent = ({
  backgroundColor,
  borderRadius,
  children,
  coursesAvailable,
  coursesAvailableColor,
  currentStep,
  fontWeightSubtitle,
  id,
  imageBackgroundColor,
  imageOpacity,
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
  totalSteps,
  workload,
  workloadColor
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
      <GenericCard.Wrapper>
        <GenericCard.ImageBlock>
          <GenericCard.ImageWrapper>
            <GenericCard.ImageCropper
              imageBackgroundColor={imageBackgroundColor}
              borderRadius={borderRadius}>
              {currentStep && totalSteps && 
              <GenericCard.Icon>
                {currentStep === totalSteps &&<IconManager width={'50px'} height={'50px'} fill={'white'} icon={'Check'} />}
              </GenericCard.Icon>}
              <GenericCard.Image
                src={imageUrl}
                alt={title}
                imageOpacity={imageOpacity}
              />
            </GenericCard.ImageCropper>
          </GenericCard.ImageWrapper>
        </GenericCard.ImageBlock>
        <GenericCard.DataBlock justifyContent={justifyContent}>
          {title && <GenericCard.Title>
            <Typography
              color={titleColor}
              fontSize={titleSize}
              type={'h3'}>
              {title}
            </Typography>
          </GenericCard.Title>}
          {subtitle && <GenericCard.Subtitle>
            <Typography
              fontSize="12px"
              fontWeight={fontWeightSubtitle}
              color={subtitleColor ? subtitleColor : theme.colors.lightGreyColor}>
              {`${subtitle}`}
            </Typography>
          </GenericCard.Subtitle>}
          {isFree && <GenericCard.Free>
            <Typography
              fontSize="12px"
              fontWeight="bolder"
              color={'#666666'}>
              {"Gratuito"}
            </Typography>
          </GenericCard.Free>}
          {workload && <GenericCard.Workload>
            <IconManager icon={'Clock'} fill={workloadColor} width={'20px'} height={'20px'} />
            <GenericCard.WorkloadText>
              <GenericCard.WorkloadTextWrapper>
                <Typography
                  fontSize="12px"
                  color={workloadColor}>
                  {"Carga horária: "}
                </Typography>
              </GenericCard.WorkloadTextWrapper>
              <GenericCard.WorkloadTextWrapper>
                <Typography
                  fontSize="12px"
                  fontWeight="bolder"
                  color={workloadColor}>
                  {workload}
                </Typography>
              </GenericCard.WorkloadTextWrapper>
            </GenericCard.WorkloadText>
          </GenericCard.Workload>}
          {coursesAvailable && <GenericCard.CoursesAvailable>
            <GenericCard.CoursesAvailableIcon>
              <Typography color={titleColor} type={'h1'}>+</Typography>
            </GenericCard.CoursesAvailableIcon>
            <Typography type={'label'} color={coursesAvailableColor}>{coursesAvailable} {coursesAvailable > 1 ? 'cursos disponíveis' : 'curso disponível'}</Typography>
          </GenericCard.CoursesAvailable>}
          {totalSteps && currentStep && <GenericCard.Application>
            <GenericCard.ApplicationTag>
              <Typography fontSize={'12px'} color={theme.colors.greyColor}>
                {totalSteps === currentStep ? 'Candidatura finalizada! Fique atento(a) ao seu e-mail!' : 'Clique aqui para completar e finalizar a sua candidatura'}
              </Typography>
            </GenericCard.ApplicationTag>
          </GenericCard.Application>}
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

GenericCardComponent.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.node,
  coursesAvailable: PropTypes.number,
  coursesAvailableColor: PropTypes.string,
  currentStep: PropTypes.number,
  companyNumber: PropTypes.number,
  fontWeightSubtitle: PropTypes.string,
  id: PropTypes.string,
  imageBackgroundColor: PropTypes.string,
  imageOpacity: PropTypes.string,
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
  totalSteps: PropTypes.number,
  workload: PropTypes.string,
  workloadColor: PropTypes.string,
}

GenericCardComponent.defaultProps = {
  titleColor: "#391DDD",
  titleSize: '14px',
  workloadColor: "#666666"
}

export default GenericCardComponent
