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
		props.updateProgress(100);
	}
	const fetchMoreData = async () => {

		setPage(page + 1);
		setLoading(true);

		const result = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`);
		const data = await result.json();

		setArticles(articles.concat(data.articles));
		setTotalResults(data.totalResults);
		setLoading(false);
	};

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

		</div >
	)
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