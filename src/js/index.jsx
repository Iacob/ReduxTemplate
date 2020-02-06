
const reducer = (state, action) => {
  return { time: action.time }
};
const store = Redux.createStore(reducer);

store.dispatch({type: 'noTYpe', time:1});

// const App = (state) => {
//   //console.log(this);
//   return
// };
class App extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  buttonClick() {
    this.props.updateTime();
  }

  render() {
    console.log('redering App with state:');
    console.log(this.state);
    return <div>{(this.props==null)?"line":this.props.total} <br />
      {((this.props==null) && (this.props.time==ull))?"no time":this.props.time}
      <button onClick={this.props.updateTime}>update</button>
      <button onClick={() => {this.buttonClick()}}>update internal</button>
    </div>;
  }
}

const Provider = ReactRedux.Provider;

const mapStateToProps = (state, ownProps) => {
  let newprops= {
    prod: (state==null)?"":state.prod,
    total: (state==null)?0:state.total,
    time: (state==null)?0:state.time
  };
  return newprops;
};

const mapDispatchToProps = (dispatch) => ({
  go1: () => { dispatch({type: "direction1", prop1: "value1"}) },
  updateTime: (param1) => {
    let result1= dispatch({type: "update_time", time: (new Date()).getTime()});
    return result1;
  }
});

let App1 = ReactRedux.connect(
  mapStateToProps, mapDispatchToProps
)(App);

(function() {
  let prevAction = window.onload;
  window.onload = function() {
    if (prevAction != null) {
      prevAction();
    }

    //ReactDOM.render(<Component1 />, document.getElementById('div1'));
    ReactDOM.render(<Provider store={store}>
        <App1 />
      </Provider>,
      document.getElementById('div1'));
  };
})();
