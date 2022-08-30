import {useState} from "react"

const useArray = (initialValue:string[] = []) => {
	const [value, setValue] = useState(initialValue);

	const push = (element:string) => {
		setValue(oldValue => [...oldValue, element]);
	}

	const remove = (index: number) => {
		setValue(oldValue => oldValue.filter((_, i) => i !== index));
	}

	const isEmpty = () => value.length === 0;

	return { value, setValue, push, remove, isEmpty }
}

export default useArray