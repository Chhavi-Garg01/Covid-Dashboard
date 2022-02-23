import { Typography,Box,CircularProgress ,Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from './Card';
const useStyles = makeStyles({
    container:{
        color:'green',
        marginBottom:40
    },
    component:{
        margin:'50px 0',
        flexDirection:'column',
        alignItems:'center',
        display:'flex'
    }
})

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{

    const classes=useStyles();

    if(!confirmed){
        return <CircularProgress />
    }
    return(
        <Box className={classes.component}>
        <Typography className={classes.container} varient="h3" gutterBottom>CORONAVIRUS CASES GLOBALLY</Typography>
        <Grid container spacing={3} justifyContent="center">
            <Card 
                cardtitle="Infected"
                value={confirmed.value}
                desc="Number of Infected Cases from Covid 19"
                lastUpdate={lastUpdate}
            />
            <Card 
                 cardtitle="Recovered"
                 value={308087654}
                 desc="Number of Recovered Cases from Covid 19"
                 lastUpdate={lastUpdate}
            />
            <Card
                 cardtitle="Deaths"
                 value={deaths.value}
                 desc="Number of Deaths Caused from Covid 19"
                 lastUpdate={lastUpdate}
            />
        </Grid>
        </Box>
    )
}
export default Cards;