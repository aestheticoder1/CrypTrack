import { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
function LineChart({ historicalData }) {
    const [data, setData] = useState(["Date", "Prices"]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historicalData) {
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0])}`, item[1]])
            })
            setData(dataCopy)
        }
    }, [historicalData, setData])

    const options = {
        title: "Price Fluctuation Graph",
        hAxis: { title: "Date-Time" , textPosition: "none"},
        vAxis: { title: "Crypto Price" },
        legend: { position: "right" },
    };

    return (
        <Chart
            chartType='LineChart'
            data={(data)}
            height="100%"
            // width="100%"
            legendToggle
            options={options}
        />
    )
}

export default LineChart
