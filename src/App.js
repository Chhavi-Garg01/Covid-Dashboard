import {Component} from 'react'
import {Box,Typography,withStyles} from '@material-ui/core';
import Cards from './component/Cards';
import Countries from './component/Countries';
import logo from './images/covid.png';
import Chart from './component/Chart';
import { fetchData } from './service/api';
const style={
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  header:{
    background:'#F5F5F5',
    width:400,
    textAlign:'center',
    fontSize:20,
    padding:10,
    color:'#777'
  },
  lastUpdate:{
    color:'#777'
  }
  
}
class App extends Component{

  state={
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
    console.log(fetchedData);
  }

  handleCountryChange = async(country)=>{ 
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country})
    console.log(fetchedData);
  }

  render(){
    const {data}=this.state;
    return (
      <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>COVID 19 PANDEMIC</Box>
        <Typography className={this.props.classes.lastUpdate}>Last Updated : {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style={{width:350}} src={logo} alt="covid"/>
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} />

      </Box>
    
   )
  }
}
export default withStyles(style)(App);
