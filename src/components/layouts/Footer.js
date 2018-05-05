import React from 'react'

import {Paper, Tabs } from 'material-ui'
import {Tab} from 'material-ui/Tabs'

export default ({codelist_types,onSelect,ltype})=> {

  const index = ltype
          ? codelist_types.findIndex( (lltype)=> { return lltype===ltype   })+1 : 0

  const onIndexSelected = (e,i)=> {
    onSelect ( i===0 ? "" : codelist_types[i-1] ) 
  }
  
  return (
    <Paper>
    <Tabs value={index}
    indicatorColor="primary"
    textColor="primary"
    onChange={onIndexSelected}
    centered
    >
    <Tab key={0} label="All" /> 
    {  codelist_types.map((item,i)=>{
    
      return  <Tab key={i+1} label={item}  />
    })
    }
     
    </Tabs>
  </Paper>
)
}
