import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { connect } from "react-redux";
import { listTasks } from '../actions';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(listTasks()); 
  }

  render() {
    const header = [ {Header: "UserId", accessor: "userId"}, {Header: "Id", accessor: "id"}, {Header: "Title", accessor: "title"} ]
    const {tasks} = this.props;
    console.log("no render: "+ tasks)
    return (
      <ReactTable columns={header} 
                  data={tasks} 
                  noDataText={"Nada por aqui ='["} 
                  nextText={"Próxima"}
                  pageText={"Página"}
                  ofText={"de"}
                  rowsText={"linhas"}
                  defaultPageSize={5}
                  previousText={"Anterior"}
                   ></ReactTable>
     )
  }
}


const mapStateToProps = state => ({
  tasks: state.tasks
})
// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching plain actions
//     list: listTasks()
      
//     }
//   }

export default connect(mapStateToProps)(App);
