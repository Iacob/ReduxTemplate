
const timeStore = Redux.createStore((state, action) => {
  return { time: action.time }
});

function TimeComponent(params) {
  return <div>
    <div>{(params.time==null)?"empty time":params.time}</div>
    <button onClick={params.updateTime1}>update TimeComponent</button>
  </div>;
}

let TimeComponent1 = ReactRedux.connect(
  function(state, ownProps) {
    return {time: state.time};
  },
  function(dispatch) {
    return {
      updateTime1: (param1) => {
        let result1= dispatch({type: "update_time", time: (new Date()).getTime()});
        return result1;
      }
    };
  }
)(TimeComponent);

(function() {
  let prevAction = window.onload;
  window.onload = function() {
    if (prevAction != null) {
      prevAction();
    }

    ReactDOM.render(<Provider store={timeStore}>
        <TimeComponent1 />
      </Provider>,
      document.getElementById('div2'));
  }
})();
