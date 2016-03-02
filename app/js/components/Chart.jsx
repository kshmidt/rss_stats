var PieChart = require('react-d3/piechart').PieChart;

module.exports = React.createClass({
    displayName: "Chart",
    getInitialState: function () {
        return {
            data: this.props.data
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.data
        });
    },
    render: function () {
        if (this.state.data != null) {

            var text = this.state.data;
            text = text.toString();
            text = text.toLowerCase();

            var regex = /<(.|\n)*?>/g;
            text = text.replace(regex, ""); // exclude HTML tags
            regex = /&[a-zA-Z0-9]+;/g;
            text = text.replace(regex, ""); // exclude HTML ampersand character codes

            // Frequency calculating
            var frequencies = {};
            for (var i = 97; i <= 122; i++) {
                frequencies[String.fromCharCode(i)] = 0;
            }

            var totalLettersCount = 0;

            for (var i = 0; i < text.length; i++) {
                if (frequencies.hasOwnProperty(text[i])) {
                    frequencies[text[i]] = frequencies[text[i]] + 1;
                    totalLettersCount++;
                }
            }

            for (var i in frequencies) {
                if (totalLettersCount > 0) {
                    frequencies[i] = Math.round(frequencies[i] / totalLettersCount * 100);
                } else {
                    frequencies[i] = 0;
                }
            }

            // Chart data preparing
            var chartData = [];

            for (var i in frequencies) {
                if (frequencies[i] > 0) {
                    chartData.push({
                        label: i.toUpperCase(),
                        value: frequencies[i]
                    });
                }
            }
        }

        if (totalLettersCount > 0) {
            return <div>
            <PieChart
              data={chartData}
              width={450}
              height={450}
              radius={150}
              innerRadius={20}
              sectorBorderColor="white"
            />
            </div>;
        } else {
            return <div id="nodata">No data</div>
        }
    }
});
