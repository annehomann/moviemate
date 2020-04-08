// ----------------------
//         Footer
// ----------------------

import React from 'react'
import {Icon} from 'antd';

// This function is the main engine for the footer
function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> MovieMate  2020 <Icon type="copyright" /></p>
        </div>
    )
}

export default Footer

// -------------------------------
//      NOTES FOR NEXT UPDATE
// -------------------------------
// This is where social media icons will be placed
