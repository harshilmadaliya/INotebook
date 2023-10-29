import React from 'react'
import Notesholder from './Notesholder'


function Home(props) {
  const {showAlerts} = props

  return (
    <>
      {/* <div className="container">
        <h2 className='container text-center'>Your All Notes</h2>
      </div> */}
      <div className="container">
        <Notesholder showAlerts={showAlerts} />
      </div>
    </>
  )
}

export default Home