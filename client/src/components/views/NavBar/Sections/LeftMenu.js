// --------------------------------------
//         Left Menu Component
// --------------------------------------

import React from 'react';
import { Menu } from 'antd';

// Function for Left Menu Component which is the Favourites link in NavBar
function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favourite">
        <a href="/favourite">Favourites</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu