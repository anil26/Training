import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable,TableHeaderColumn } from 'react-bootstrap-table';
import { Nav,NavItem } from 'react-bootstrap';

var mockData=[
  {
    name : 'Kameshwaran',
    school : 'Govt Hr Sec School',
    dateOfBirth : '01-06-1993',
    marks : [
      {
        quarterly : {
          english : 100,
          maths : 80,
          physics : 95,
          chemistry : 98,
          biology : 100
        }
      },
      {
        halfYearly : {
          english : 90,
          maths : 70,
          physics : 95,
          chemistry : 88,
          biology : 60
        }
      },
      {
        annual : {
          english : 80,
          maths : 90,
          physics : 95,
          chemistry : 98,
          biology : 99
        }
      }
    ]
  },

  {
    name : 'Marudhu',
    school : 'Govt Hr Sec School',
    dateOfBirth : '01-06-1983',
    marks : [
      {
        quarterly : {
          english : 80,
          maths : 80,
          physics : 95,
          chemistry : 100,
          biology : 100
        }
      },
      {
        halfYearly : {
          english : 100,
          maths : 70,
          physics : 85,
          chemistry : 88,
          biology : 80
        }
      },
      {
        annual : {
          english : 100,
          maths : 60,
          physics : 55,
          chemistry : 78,
          biology : 90
        }
      }
    ]
  },

  {
    name : 'Arjun',
    school : 'Govt Hr Sec School',
    dateOfBirth : '01-06-1993',
    marks : [
      {
        quarterly : {
          english : 90,
          maths : 90,
          physics : 95,
          chemistry : 98,
          biology : 90
        }
      },
      {
        halfYearly : {
          english : 89,
          maths : 70,
          physics : 65,
          chemistry : 98,
          biology : 70
        }
      },
      {
        annual : {
          english : 88,
          maths : 98,
          physics : 95,
          chemistry : 98,
          biology : 79
        }
      }
    ]
  },
  {
    name : 'jun',
    school : 'Govt Hr Sec School',
    dateOfBirth : '01-06-2014',
    marks : [
      {
        quarterly : {
          english : 90,
          maths : 90,
          physics : 95,
          chemistry : 98,
          biology : 90
        }
      },
      {
        halfYearly : {
          english : 89,
          maths : 70,
          physics : 65,
          chemistry : 98,
          biology : 70
        }
      },
      {
        annual : {
          english : 88,
          maths : 98,
          physics : 95,
          chemistry : 98,
          biology : 79
        }
      }
    ]
  }
];

class SearchBar extends React.Component{
  constructor(props){
    super(props);
  }
  onSubmmiting(e){
    e.preventDefault();
    this.props.search(this.refs.searchitem.value);
  }

  render(){
    return (
    <form onSubmit={this.onSubmmiting.bind(this)}>
    <h2>Enter student name : </h2><input ref="searchitem" type="text" name="sname" />
    <br></br>
    <input type="submit" value="Submit" />
    </form>
    );


  }
}

class ProfileTable extends React.Component{
  constructor(props){
    super(props);
  }
  processedData(object){
    debugger;
    console.log(object);
    return [{ Name:object.name,DOB:object.dateOfBirth}];


  }
  render(){
    return (
      <div>
      <h3>Profile</h3>
      <BootstrapTable data={this.processedData(this.props.data)} hover={true} stripped={true}>
      <TableHeaderColumn dataField="Name" isKey={true} dataAlign="center" editable={false}>Name</TableHeaderColumn>
      <TableHeaderColumn dataField="DOB" dataSort={true} dataAlign="center" editable={false}>Date Of Birth</TableHeaderColumn>
      </BootstrapTable>
      </div>

  );
  }
}

class MarksTable extends React.Component{
  constructor(props){
    super(props);
  }
  processedData(object){
    var arr=new Array();
    var t=Object.keys(object) || [];
    t.forEach(function(current,index,array){
      arr.push({"Subject" : current,"Marks" : object[current]});
    });
    return arr;
  }
  render(){

    return (
      <div class="bs-example">
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#sectionA">Quarterly</a></li>
          <li><a data-toggle="tab" href="#sectionB">Half Yearly</a></li>
          <li><a data-toggle="tab" href="#sectionC">Annual</a></li>
        </ul>
        <div class="tab-content">
          <div id="sectionA" class="tab-pane fade in active">
            <h3>Quarterly Report</h3>
            <BootstrapTable data={this.processedData(this.props.data.marks[0].quarterly)} hover={true} stripped={true}>
            <TableHeaderColumn dataField="Subject" isKey={true} dataAlign="center" editable={false}>Subject</TableHeaderColumn>
            <TableHeaderColumn dataField="Marks" dataSort={true} dataAlign="center" editable={false}>Marks</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div id="sectionB" class="tab-pane fade">
            <h3>Half Yearly Report</h3>
              <BootstrapTable data={this.processedData(this.props.data.marks[1].halfYearly)} hover={true} stripped={true}>
            <TableHeaderColumn dataField="Subject" isKey={true} dataAlign="center" editable={false}>Subject</TableHeaderColumn>
            <TableHeaderColumn dataField="Marks" dataSort={true} dataAlign="center" editable={false}>Marks</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div id="dropdown1" class="tab-pane fade">
              <h3>Annual report</h3>
              <BootstrapTable data={this.processedData(this.props.data.marks[2].annual)} hover={true} stripped={true}>
              <TableHeaderColumn dataField="Subject" isKey={true} dataAlign="center" editable={false}>Subject</TableHeaderColumn>
              <TableHeaderColumn dataField="Marks" dataSort={true} dataAlign="center" editable={false}>Marks</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
    </div>
      );
  }
}



class StudentInformation extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <ProfileTable data={this.props.data}></ProfileTable>
      <MarksTable data={this.props.data}></MarksTable>
      </div>
      );
  }
}

class SearchStudent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      filterArray:[]
    };
  }
  search(keyword){
    var resultarray=new Array();
    for (var prop in mockData){
      if(mockData[prop].name.toLowerCase().indexOf(keyword.toLowerCase())!==-1){
        resultarray.push(mockData[prop]);
      }
    }
    this.setState({
      filterArray :resultarray
    });
    // console.log(this.refs.searchitem.value);
    debugger;
    console.log(resultarray);
    return resultarray;
  }
  StudentInformationList(data){
    return data.map(function(current,index,array){
      console.log(current);
      return (<StudentInformation key={index} data={array[index]}> </StudentInformation>);
    });
  }
  render () {
    debugger;
    return (
      <div >
      <SearchBar search={this.search.bind(this)}></SearchBar>
     {this.StudentInformationList(this.state.filterArray)}
      </div>
      );
  }
}

ReactDOM.render(<SearchStudent studentdatabase={mockData}/>, document.getElementById('app'));
