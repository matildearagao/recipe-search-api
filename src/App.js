import React, { Component, Fragment } from 'react';
import './App.css';
import { recipes } from './tempList'
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  // const key = '70d3a7971026f931450acb8a85518115'

  state = {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=70d3a7971026f931450acb8a85518115',
    details_id: 35384,
    pageIndex: 1,
    search: '',
    //food2fork queries
    query: '&q=',
    base_url: 'https://www.food2fork.com/api/search?key=70d3a7971026f931450acb8a85518115',
    error: ''
  }

  async getRecipes() {

    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      // console.log(data);
      console.log(jsonData.recipes);

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: 'no results' }
        })
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }




componentDidMount() {
  this.getRecipes()
}

displayPage = (index) => {
  switch (index) {
    default:
    case 1:
      return (<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>)
    case 0:
      return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />)
  }
}

handleIndex = (index) => {
  this.setState({
    pageIndex: index,
  })
}

handleDetails = (index, id) => {
  this.setState({
    pageIndex: index,
    details_id: id
  })
}

handleChange = (e) => {
  this.setState({
    search: e.target.value
  }, () => {
    // console.log(this.state.search)
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  // console.log('submited')

  //query Food2fork
  const { base_url, query, search } = this.state;

  this.setState(() => {
    return {
      url: `${base_url}${query}${search}`,
      // search: ''
    }
  }, () => {
    this.getRecipes()

  })
}

render() {
  // console.log(this.state.recipes);

  return (
    <Fragment>
      {this.displayPage(this.state.pageIndex)}
    </Fragment>
  );
}
}

export default App;
