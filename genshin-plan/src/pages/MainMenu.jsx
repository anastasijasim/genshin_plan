import React from 'react'
import Anemo from '../icons/anemo'
import Cryo from '../icons/cryo'
import Dendro from '../icons/dendro'
import Electro from '../icons/electro'
import Geo from '../icons/geo'
import Hydro from '../icons/hydro'
import Pyro from '../icons/pyro'
import Logo from '../icons/logo'
import styled from 'styled-components'

const logoPicture = styled(Logo)`
  display: flex;
  justify-content: flex-start;
`


const MainMenu = () => {
  return (
    <div 
      style={{
        // backgroundColor:'#0A0A0A',
        width:"100%",
        height: "840px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"30px"
      }}
    >
      <Logo/>
      <Anemo/>
      <Cryo/>
      <Dendro/>
      <Electro/>
      <Geo/>
      <Hydro/>
      <Pyro/>
    </div>
  )
}

export default MainMenu