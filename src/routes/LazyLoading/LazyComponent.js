import React from 'react'

const LazyComponent = () => <div>
  <img src={`${process.env.PUBLIC_URL}/assets/globant.png`} alt="" />
</div>


export default LazyComponent;
