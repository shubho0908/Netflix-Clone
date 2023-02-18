import React from 'react'
import avatar from '../img/avatar.png'

const Main = (props) => {

  const NewContent=()=>{
    const inData = document.querySelector('.in-data')
    inData.style.display = "none"
  }

  return (
<>
<div className="App">
    <div className="bg-back2 bg-back3">
      <div className="in-data">
      <p style={{margin:0}} className="watching">Who's watching?</p>
      <img onClick={NewContent} src={avatar} alt="" className="avatar" />
      <p className="avatar-name">{props.name}</p>
      </div>
    </div>
</div>
</>
  )
}

export default Main