import React,{Fragment} from 'react'
import {Grid,Paper,Typography,List,IconButton} from 'material-ui'
import {ListItem,ListItemText,ListItemSecondaryAction} from 'material-ui/List'
import Delete from 'material-ui-icons/Delete';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 20,
    marginRight: 10,
    marginBottom: 10,
    height: 400,
    overflowY: 'auto'}
}

export default ({codelists,ltype,onSelect,list,onDelete})=>
  <Grid container >
   <Grid item sm={2}>
    <Paper style={styles.Paper} >
       { codelists.map(([lltype,codelists],index)=>{
       return (!ltype || ltype === lltype ? 
         <Fragment key={index} >
         <Typography variant="headline" key={index}>
           {lltype}
         </Typography>
         
         <List component="ul">
          {codelists.map((list)=>{ 
            return ( <ListItem button key={list.id}
                               onClick={()=>{onSelect(list.id)}} >
              <ListItemText key={list.id}
                          primary={list.code}
              
              />
              <ListItemSecondaryAction>
              <IconButton onClick={()=>{onDelete(list.id)} }>
              <Delete/>
              </IconButton>
              </ListItemSecondaryAction>
              
              </ListItem>
            )
          })
          }
         </List>
         </Fragment>
        : null)
      })
      }
</Paper>
</Grid>

<Grid item sm={10}>
<Paper style={styles.Paper} >
<Typography variant="display1">
{ list.code ? list.code : "Welcome"}
</Typography>
<Typography style={{marginTop:20}} variant="subheading">
{ list.description ? list.description : "Please select list from left"}
</Typography>
</Paper>


</Grid> 
</Grid>
