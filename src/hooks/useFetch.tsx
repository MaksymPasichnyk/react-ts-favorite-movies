import { useState, useEffect } from "react";

const useFetch = (url:string) => {
	const [data, setData] = useState([])
	
	//useEffect(() => {
	//	fetch(url)
	//	.then(response => response.json())
	//	.then(fetchedData => setData(fetchedData))	
	//}, [url])

	const getData = (url: string) => {
		fetch(url)
		.then(response => response.json())
		.then(fetchedData => setData(fetchedData))	
	}

	return {data, getData} as const
}

export default useFetch