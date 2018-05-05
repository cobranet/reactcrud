import React from 'react'
import { AppBar, Toolbar} from 'material-ui'
import Typography from 'material-ui/Typography';
import CreateCodeList from '../dialogs/CreateCodeList.js'
export default props =>
  <AppBar position="static">
<Toolbar>
<Typography variant="display4" color="inherit" style={{flex:1}} >
CRUD
</Typography>
<CreateCodeList onCreate={props.onCreate} /> 
</Toolbar>
</AppBar>




