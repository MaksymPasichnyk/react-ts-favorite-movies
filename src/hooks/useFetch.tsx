import { useState, useEffect } from "react";

const useFetch = (url:string) => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		.then(fetchedData => setData(fetchedData))	
	}, [url])

	return {data}
}

export default useFetch