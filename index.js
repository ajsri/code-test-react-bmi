class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 74,
      weight: 160,
      result: null
    }
  }
  calcBMI() {
    /*
    Formula: 703 x weight (lbs) / [height (in)]2
    When using English measurements, pounds should be divided by inches squared. This should then be multiplied by 703 to convert from lbs/inches2 to kg/m2.
    */
    const result = 703 * (this.state.weight / Math.pow(this.state.height, 2));
    this.setState({result});

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>BMI Calculator</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <label>Enter your height in inches</label>
              <input type="number"
                     className="form-control"
                     placeholder="height in inches"
                     value={this.state.height}
                     onChange={(e) => this.setState({height: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Enter your weight in pounds</label>
              <input type="number"
                     placeholder="weight in pounds"
                     className="form-control"
                     value={this.state.weight}
                     onChange={(e) => this.setState({weight: e.target.value})} />
            </div>
            <button className="btn btn-primary"
                    onClick={() => this.calcBMI()}>Calculate</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>BMI: {this.state.result && this.state.result.toFixed(1)}</h1>
          </div>
        </div>
      </div>
    )
  }
}
console.log("Hello!");
ReactDOM.render(<BMICalculator/>, document.getElementById('app'));
