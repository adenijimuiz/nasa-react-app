import React from 'react'

export default function SideBar(props) {
  const {handleToggleModel} = props;
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModel} className="bgOverlay"></div>
        <div className='sidebarContents'>
          <h2>The Brutal Martian LandScape</h2>
          <div>
            <p>Description</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ab qui veniam tempore reprehenderit dolor illum at ex eaque expedita libero ea quibusdam perspiciatis, aspernatur recusandae. Deserunt autem rerum saepe qui incidunt praesentium, quibusdam culpa.</p>
          </div>
          <button onClick={handleToggleModel}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
    </div>
  )
}
