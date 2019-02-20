import React, { Component, Fragment } from 'react'
import { recipe } from '../tempDetails'

export default class RecipeDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipe: recipe,
            url: `https://www.food2fork.com/api/get?key=70d3a7971026f931450acb8a85518115&rId=${this.props.id}`
        }
    }


    async componentDidMount() {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            // console.log(data);
            // console.log(jsonData);

            this.setState({
                recipe: jsonData.recipe
            })
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        // console.log(this.state.recipe);
        const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe
      const {handleIndex} = this.props
      return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=>handleIndex(1)}>back to recipe</button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">Provided by {publisher}</h6>
                            <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize" >Publisher Site</a>
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalize" >Recipe Url</a>
                            <ul className="list-group mt4">
                                <h2 className="mt-3 mb-4">Ingredients:</h2>
                                {ingredients.map((ingredient, index) => {
                                    return (
                                        <li key={index} className="list-group-item text-slanted">{ingredient}</li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
