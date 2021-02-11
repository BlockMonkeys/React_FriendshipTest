import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Start from "./Start";
import Quiz from "./Quiz";
import Result from "./Result";
import Spinner from "./Spinner";
import { loadOFF, loadON } from "./redux/modules/loaded";



const mapStateTopProps = (state) => ({
    quiz: state.quiz,
    is_loaded: state.loaded.is_loaded
});

const mapDispatchToProps = (dispatch) => ({
  loadON: () => {
    dispatch(loadON());
  },
  loadOFF: () => {
    dispatch(loadOFF());
  }
});

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={};
  }
  
  componentDidMount(){
    this.props.loadON();
    console.log('COMPONENT DID MOUNTED !');
  }

  render(){
    return(
      <div className="App">
        {!this.props.is_loaded ? (
        <Spinner />
        ):(
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Start} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/result" component={Result} />
            </Switch>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
