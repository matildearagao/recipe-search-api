import React, { Component, Fragment } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';


export default class RecipeList extends Component {
    render() {
        const { recipes, handleDetails, value, handleChange, handleSubmit, error } = this.props
        return (
            <Fragment>
                <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text uppercase mb-3">
                            <h1 className="text-slanted">
                                recipe list</h1>
                        </div>
                    </div>
                    <div className="row">
                        {error ?
                            <h3 className="text-danger text-center">{error}</h3> :
                            recipes.map(recipe => {
                                return (
                                    <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails} value={value} />
                                )
                            })
                        }



                    </div>
                </div>
            </Fragment>
        )
    }
}
