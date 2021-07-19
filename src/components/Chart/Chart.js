import ChartBar from './ChartBar';
import './Chart.css';
import { props } from 'bluebird';

const Chart = () => {
    return (
        <div className="chart">
            {props.dataPoints.map((data) => <ChartBar 
                key={data.label}
                value={data.date} 
                maxValue={null} 
                label={data.label}
                />)}
        </div>
    )
}

export default Chart;