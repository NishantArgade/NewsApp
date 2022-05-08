import React, { Component } from 'react'

export default class NewsItem extends Component {
	render() {
		let { title, description, ImgURL, newsURL } = this.props;
		return (
			<div >
				<div className="card mx-2" style={{ width: "auto" }}>

					<img src={ImgURL?ImgURL:"/images/img.png"} className="card-img-top" alt="Img not Found"  />

					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<a href={newsURL} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">Read more</a>
					</div>
				</div>
			</div>
		)
	}
}
