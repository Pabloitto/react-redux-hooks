import React, { useState } from 'react'

import { SideMenu } from '../SideMenu'

import { styles } from './styles'

export const LayoutMenu = ({
  children
}) => {
  const [ expanded, setExpanded ] = useState(false)

  return (
    <React.Fragment>
      <SideMenu
        onToggle={() => setExpanded(!expanded)}
        styles={styles}
      />
      <div style={styles.main(expanded)}>
        {children}
      </div>
    </React.Fragment>
  )
}
