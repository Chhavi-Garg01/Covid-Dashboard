import {Bar} from 'react-chartjs-2';
import {Box} from '@material-ui/core';
import {Chart as Chart1} from 'chart.js/auto';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    container : {
        width: '75%',
        marginTop: 20
    }
})

const Chart = ({ data: { confirmed, recove, deaths }}) => {
    const classes = useStyle();
    return (
        <Box className = {classes.container}>
            {confirmed ? (
            <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'Peoples',
                        data: [confirmed.value, recove, deaths.value],//
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                    }]
                }}
                options = {{
                    legend: {display: false},
                    title: { display: true, text: 'Current State in Country'}
                }}
                
            /> ) : ''
        }   
        </Box>
            
    )
}

export default Chart;