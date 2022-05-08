import React from 'react'

export default function NewsItem(props) {
	return (
		<div >
			<div className="card mx-2" style={{ width: "auto" }}>

				<img src={props.ImgURL ? props.ImgURL : "/images/img.png"} className="card-img-top" alt="Img not Found" />

				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
				</div>
			</div>
		</div>
	)
}
