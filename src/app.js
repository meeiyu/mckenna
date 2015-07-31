import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';
// lib
import React from 'react';

class App extends React.Component {
    componentDidMount() {
        $(React.findDOMNode(this.refs.container)).highcharts({
            chart: {
                type: 'line',
                zoomType: 'xy',
                spacingBottom: 50
            },
            title: {
                text: '服務經營詳細數據'
            },
            xAxis: [{
                categories: ['7月9日', '7月10日', '7月11日', '7月12日', '7月13日', '7月14日', '7月15日', '7月16日', '7月17日', '7月18日', '7月19日', '7月20日', '7月21日', '7月22日', '7月23日', '7月24日', '7月25日', '7月26日', '7月27日', '7月28日', '7月29日', '7月30日'],
                crosshair: true
            }],
            yAxis: [
            {
                // Primary yAxis (UV)
                title: {
                    text: 'UV',
                    enabled: true,
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                min: 0,
                max: 250,
                labels: {
                    enabled: true,
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true
            },
            {   // Secondary yAxis
                // gridLineWidth: 0,
                min: 0,
                max: 30,
                title: {
                    text: '訂購數量',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
            },
            {   // Tertiary yAxis (PV)
                // gridLineWidth: 0,
                title: {
                    text: 'PV',
                    enabled: true,
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                min: 0,
                max: 250,
                labels: {
                    enabled: true,
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius:3,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                x: 80,
                y: 40,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: '訂購筆數',
                type: 'column',
                //color: '#00FF00',
                yAxis: 1,
                data: [9, 7, 12, 3, 8, 25, 12, 5, 1, 0, 0, 1, 1, 12, 1, 1, 3, 1, 0, 2, 1, 5],
                tooltip: {
                    valueSuffix: '筆'
                }

            }, {
                name: 'PV',
                type: 'spline',
                //color: '#00FF00',
                yAxis: 2,
                data: [46, 30, 58, 5, 72, 160, 150, 120, 125, 51, 245, 132, 60, 196, 87, 46, 21, 7, 19, 31, 16, 44]

            }, {
                name: 'UV',
                type: 'spline',
                //color: '#00FF00',
                data: [29, 23, 36, 4, 39, 101, 91, 64, 76, 38, 213, 105, 49, 119, 66, 32, 15, 6, 14, 22, 16, 35]
            }]
        });
    }
    render() {
        return (
            <div className="container" ref="container" />
        );
    }
}

React.render(<App />, document.body);
