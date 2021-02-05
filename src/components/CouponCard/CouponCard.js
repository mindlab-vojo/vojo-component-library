import React from 'react'
import PropTypes from 'prop-types'

import * as CouponCard from './CouponCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Typography from '../Typography'
import IconManager from '../IconManager'

const CouponCardComponent = ({
  children,
  id,
  isActive,
  justifyContent,
  date,
  title,
}) => {

  const renderComponent = (theme) => (
    <CouponCard.Container key={id} backgroundColor={isActive ? '#E9E5FF' : '#DDDDDD'}>
      <CouponCard.Icon>
        <IconManager
          height={'36px'}
          fill={isActive ? theme.colors.primaryColor : theme.colors.darkGreyColor}
          icon={'Coupon'}
          width={'36px'} />
      </CouponCard.Icon>
      <CouponCard.DataBlock justifyContent={justifyContent}>
        <CouponCard.Title>
          <Typography
            tag={'h4'}
            color={isActive ? theme.colors.primaryColor : theme.colors.darkGreyColor}
            type={'subtitle'}>
            {title}
          </Typography>
        </CouponCard.Title>
        {date && <CouponCard.Subtitle>
          <Typography
            type={'label'}
            color={theme.colors.lightGreyColor}>
            {`${date}`}
          </Typography>
        </CouponCard.Subtitle>}
        {children}
      </CouponCard.DataBlock>
      <CouponCard.Status>
        {isActive ?
          (<IconManager
            height={'18px'}
            width={'18px'}
            icon={'CheckOutlined'}
            fill={isActive ? (theme.colors.primaryColor) : (theme.colors.darkGreyColor)} />) :
          (<IconManager
            height={'20px'}
            width={'20px'}
            icon={'CancelOutlined'}
            fill={isActive ? theme.colors.primaryColor : theme.colors.darkGreyColor} />)}
      </CouponCard.Status>
    </CouponCard.Container>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

CouponCardComponent.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  justifyContent: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
}

export default CouponCardComponent
