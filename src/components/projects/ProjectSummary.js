import React, {Component} from 'react'
import firebase from 'firebase'
import {
  loadQuotesForStock,
  loadLogoForStock,
  loadRecentNewsForStock,
  loadChartForStock,
} from '../../api/iex'
import StockInfo from '../StockInfo'
// import firebase from '../../index'
import { withFirebase } from 'react-redux-firebase'
// var config = {
//   apiKey: "AIzaSyCeNDaN2QTtwnAsF1HQ2fvdDDxTRoN55eY",
//   authDomain: "tph-app-907cd.firebaseapp.com",
//   databaseURL: "https://tph-app-907cd.firebaseio.com",
//   projectId: "tph-app-907cd",
//   storageBucket: "tph-app-907cd.appspot.com",
//   messagingSenderId: "955009984574"
// };
// firebase.initializeApp(config)


class ProjectSummary extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      enteredSymbol: this.props.project.title,
      quote: null,
      quoteHistory: [],
      showHistory: false,
      news: [],
      showAllNews: false,
      chart: [],
      showAllChart: false
    }
  }
 
//   removeProject (projectId) {
//     firebase.database("projects").doc(projectId).delete().then(function() {
//     console.log("Document successfully deleted!");
// }).catch(function(error) {
//     console.error("Error removing document: ", error);
// });}

  delOnClick(projectId) {
  var firebaseRef = firebase.database().ref(`projects/${projectId}`);
  firebaseRef.remove()
      .then(function () {
          console.log("Remove succeeded.")
      })
      .catch(function (error) {
          console.log("Remove failed: " + error.message)
      })
}

  // removeProject(projectId) {
  //   console.log(projectId)
  //   const projectRef= firebase.database().ref(`projects/${projectId}`);
  //   console.log(projectRef)
  //   projectRef.remove();
  // }

  componentDidMount = () => {
    this.loadQuote()
  }

  loadQuote = () => {
    const { enteredSymbol } = this.state

    Promise.all([
      loadQuotesForStock(enteredSymbol),
      loadLogoForStock(enteredSymbol),
      loadRecentNewsForStock(enteredSymbol),
      loadChartForStock(enteredSymbol, '6m')
    ])
      .then(values => {
        const [quote, logo, news, chart] = values
        this.setState(prevState => {
          // Merge the quote and logo
          const quoteWithLogo = { ...quote, logo: logo }
          // Append the quote w/ logo in history
          const history = prevState.quoteHistory
          history.push({ ...quoteWithLogo })

          return {
            quote: quoteWithLogo,
            error: null,
            quoteHistory: history,
            news: news,
            chart: chart,
          }
        })
      })
      .catch(error => {
        // If 404 not found
        console.log(error+" this is the error")
        if (error.response.status === 404) {
          error = new Error(`The stock symbol ${enteredSymbol} does not exist`)
        }
        this.setState({ error: error })
      })
  }

  render(){
    const {
      quote
    } = this.state
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{this.props.project.title}</span>
        <button onClick={() => {this.delOnClick()}}>Delete</button>

        {!!quote ? <StockInfo {...quote} /> : <p>Improper stock symbol</p>}
      </div>
    </div> 
  );
  }
}

export default withFirebase(ProjectSummary)