import { Carousel } from 'antd';
import React from 'react'

function CourselComponent() {
    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        margin: '10px 0px 10px 0px'
      };
    return (
        <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img  src="https://cdn.pixabay.com/photo/2020/01/11/13/22/woman-4757533__340.jpg" alt="" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img  src="https://cdn.pixabay.com/photo/2020/11/17/15/36/river-5752716__340.jpg" alt="" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img  src="https://cdn.pixabay.com/photo/2021/04/13/06/59/woman-6174830__340.jpg" alt="" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src="https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128__340.jpg" alt="" /></h3>
        </div>
      </Carousel>
    )
}

export default CourselComponent
