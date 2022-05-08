import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component"; //vertical scrolling/loading 


const News = (props) => {


	const [articles, setArticles] = useState([]);
	const [totalResults, setTotalResults] = useState(0);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	console.log(loading);
	//  constructor() {
	// 	super();
	// 	// console.log("hello is constructonr from news component");
	// 	state = {
	// 		totalResults: 0,
	// 		articles: articles2,
	// 		loading: false,
	// 		page: 1
	// 	}
	// }
	// ComponentDidMount is used to execute the code 
	 useEffect(() => {
		pageHandler(page);
	},[] )

	const pageHandler = async (updPage) => {
		props.updateProgress(10);
		setLoading(true);
		props.updateProgress(70);
		const result = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${updPage}&pageSize=${props.pageSize}`);
		const data = await result.json();
		props.updateProgress(90);
		setArticles(data.articles);
		setTotalResults(data.totalResults);
		setPage(updPage);
		setLoading(false);
		// setState({
		// 	totalResults: data.totalResults,
		// 	articles: data.articles, //for offline use fake api 
		// 	page: updPage,
		// 	loading: false
		// })
		props.updateProgress(100);
	}
	const fetchMoreData = async () => {

		// setState({ loading: true, page: state.page + 1 });
		setPage(page + 1);
		setLoading(true);

		const result = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`);
		const data = await result.json();

		// setState({
		// 	totalResults: data.totalResults,
		// 	articles: state.articles.concat(data.articles),
		// 	loading: false
		// });
		setArticles(articles.concat(data.articles));
		setTotalResults(data.totalResults);
		setLoading(false);
	};

	// render() {
	// console.log("rendering");
	return (
		<div className="container my-3 ">
			<h2 className="text-center mb-5">NewFeed Top Headline</h2>

			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={page*props.pageSize<totalResults }
				loader={< Spinner />}
			>
				<div className="container">
					<div className="row">
						{
							articles.map((ele) => {
								return <div className="col-md-4" key={ele.url}>
									<NewsItem title={ele.title} description={ele.description} ImgURL={ele.urlToImage} newsURL={ele.url} />
								</div>
							})
						}
					</div>
				</div>
			</InfiniteScroll>

			{/* Left Right button */}
			{/* <form action="#" className="d-flex justify-content-between my-3">
					<input type="submit" value="&larr; Previous" className="btn btn-dark" onClick={() => pageHandler(state.page - 1)} disabled={state.page <= 1} />
					<input type="submit" value="Next &rarr;" disabled={state.articles.length < props.pageSize || state.totalResults === props.pageSize * state.page} className="btn btn-dark" onClick={() => pageHandler(state.page + 1)} />
				</form> */}
		</div >
	)
	// }
}

News.defaultProps = {
	pageSize: 6,
	country: "in",
	category: "general"
}
News.propsTypes = {
	pageSize: PropTypes.number,
	country: PropTypes.string,
	category: PropTypes.string
}

export default News;