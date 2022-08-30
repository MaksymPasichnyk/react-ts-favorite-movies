import {useState, useRef} from "react"

const useCounter = (initialValue: number, step: number = 1) => {
	const [value, setValue] = useState(initialValue)

	const increment = () => setValue(prevValue => prevValue + step);
	const decrement = () => setValue(prevValue => prevValue - step);
	const reset = () => setValue(initialValue);

	return { value, increment, decrement, reset } as const
}

export default useCounter