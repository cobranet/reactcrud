import React, { Component,Fragment } from 'react';
import Header from './components/layouts/Header.js'
import Footer from './components/layouts/Footer.js'
import MainWnd from './components/main/MainWnd.js'
import {codelist_types,codelists} from './store.js'
class App extends Component {
  state = {
    codelists,
    ltype: '',
    list:   {}
    
  }

  getCodeList(){
    const inittypes = codelist_types.reduce(
      (acc,cat)=> {
        return {...acc,[cat]: []}
      },{});

    return Object.entries(this.state.codelists.reduce(
      (lists,list)=>{
        const {ltype} = list
        lists[ltype] = [...lists[ltype],list]
        return lists
      },inittypes)); 
      
  }

  handleListSelect = (code)=>{
    this.setState( (prevState)=>{
      return {list: prevState.codelists.find( (l) => { return l.id === code} )}
    });
  }

  onCreate= (list)=>{
    // TODO validate
    list["id"] = list.code
    list["ltype"] = "User"
    this.setState( (prevState)=>{
      return { codelists: [...prevState.codelists,list] }
    })
  }

  handleDelete = (id)=>{
    this.setState ( (prevState)  => {
      return { codelists: prevState.codelists.filter( (list)=>{ return list.id !== id }) }
    })
  }
  
  handleLtypeSelect = (ltype)=>{
    this.setState( {ltype: ltype});
  }
  
  render() {
    const codelists = this.getCodeList();
    return (
      <Fragment>
      <Header onCreate={this.onCreate}  />

        <MainWnd onDelete={this.handleDelete}  list={this.state.list} onSelect={this.handleListSelect} codelists={codelists} ltype={this.state.ltype} />  
        <Footer ltype={this.state.ltype} onSelect={this.handleLtypeSelect} codelist_types={codelist_types} />
      </Fragment>
    )
  }
}

export default App;
