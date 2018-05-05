import React,{Fragment,Component} from 'react'

import { Button,TextField} from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import { withStyles} from 'material-ui/styles'

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const styles = (theme)=>{
  return {
  FormControl: {
    width: 500
  }
}}

export default withStyles(styles) ( class  CreateCodeList extends Component {

  state= {
    open: false,
    formdata: {
      description: '',
      code: ''
    }
  }
  
  handleClose= ()=>{
    this.setState( {open: false , formdata: {description:"",code:""}});
  }


  handleChange= (name)=> ({target:{value}})=>{

    this.setState({
      formdata:  {
        ...this.state.formdata,[name]:value
      }
    })
  }
    
  
  openDlg= ()=>{
    this.setState( {open: true});
  }

  handleSubmit=()=>{
    const {formdata} = this.state;
    this.props.onCreate(formdata);
    this.setState({open:false,formdata: {decsciption:"",code:""}} );
  }
  
  render () {
    const classes = this.props.classes;
    return (
  <Fragment>
   <Button  onClick={this.openDlg} variant="fab" mini >
     <AddIcon/>
   </Button>

  <Dialog
     open={this.state.open}
     onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">
        New code table
      </DialogTitle>
      <DialogContent>
      <DialogContentText className={classes.FormControl}>
         Please enter form to create new code list...
      </DialogContentText>
      <TextField
      autoFocus
      margin="dense"
      id="code"
      label="Code"
      type="text"
      value={this.state.formdata.code}
      onChange={this.handleChange("code")}
      fullWidth
      />
      <TextField
      margin="dense"
      label="Description"
      value={this.state.formdata.description}
      onChange={this.handleChange("description")}
      type="text"
      rows="3"
      fullWidth
      multiline
      />
      </DialogContent>

      <DialogActions>
      <Button onClick={this.handleSubmit}  color="primary">
      Create
      </Button>
      </DialogActions>
      </Dialog>
      </Fragment>
    )
  }
})
