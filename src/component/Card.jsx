import { CardContent,Grid,Box, Typography ,Card,makeStyles} from "@material-ui/core";
import CountUp from 'react-countup';

const useStyles = makeStyles({
    header:{
        background:'#F5F5F5',
        padding:10
    }
    
})

const  CardComponent=({cardtitle,value,desc,lastUpdate})=>{
    const classes=useStyles();
    return (
        <Grid component={Card} style={{margin:20, borderBottom:'10px solid yellow'}}>
            <Box className={classes.header}>
                <Typography varient="h5" color="textSecondary">{cardtitle}</Typography>
            </Box>
            <CardContent>
                <Typography varient="h5">
                    <CountUp start={0} end={value} duration={3} separator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
}
export default CardComponent;
