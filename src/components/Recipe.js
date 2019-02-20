import React, { Component, Fragment } from 'react'

export default class Recipe extends Component {
    render() {
        const { title, image_url, source_url, publisher, recipe_id } = this.props.recipe
        const {handleDetails} = this.props
        return (
            <Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={image_url} className="img-card-top" style={{ height: '14rem' }} alt={`recipe ${title}`} />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">
                                provided by {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary text-capitalize" onClick={()=>handleDetails(0, recipe_id)}>Details</button>
                        <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2 text-capitalize">Recipe url</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
