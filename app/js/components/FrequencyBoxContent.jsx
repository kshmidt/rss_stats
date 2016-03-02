var Chart = require('./Chart.jsx');

module.exports = React.createClass({
    displayName: "FrequencyBoxContent",
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
        return <div className="boxContent" id="frequencyBoxContent">
    <Chart data={this.state.data}/>
    </div>;
    }
});
