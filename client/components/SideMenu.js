import React from 'react'

import { Link } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'

export const SideMenu = ({
  styles,
  onToggle
}) => {
  return (
    <SideNav onToggle={onToggle}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected='home'>
        <NavItem eventKey='home'>
          <NavIcon>
            <Link to='home'>
              <i className='fa fa-fw fa-home' style={styles.icons} />
            </Link>
          </NavIcon>
          <NavText>
            Home
          </NavText>
        </NavItem>
        <NavItem eventKey='charts'>
          <NavIcon>
            <Link to='charts'>
              <i className='fa fa-fw fa-chart-line' style={styles.icons} />
            </Link>
          </NavIcon>
          <NavText>
            Charts
          </NavText>
        </NavItem>
        <NavItem eventKey='maps'>
          <NavIcon>
            <Link to='maps'>
              <i className='fa fa-fw fa-map-marked-alt' style={styles.icons} />
            </Link>
          </NavIcon>
          <NavText>
            Map
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  )
}
