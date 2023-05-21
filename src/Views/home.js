import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            // articles: []
        };
    }

    showArticles = () => {
        // return this.state.articles.map(a => <div key = {a.title}> {a.title}</div>) 
    };

    getFootball = async () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
            headers: {
              'X-RapidAPI-Key': '4e9e7a69f1msh6d652749c968911p188b5fjsnaae455ed0f04',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
         
          try {
              const response = await axios.request(options);
              const data = response.json();
              const football = data.;
              this.setState({ articles: articles })
          } catch (error) {
              console.error(error);
          }
    };

    componentDidMount = () => {
        setTimeout(this.getFootball, 3)
    }

    render() {
        return (
            <div>
                <h1>Football</h1>
                <ul>

                </ul>
            </div>
        )
    }
}
