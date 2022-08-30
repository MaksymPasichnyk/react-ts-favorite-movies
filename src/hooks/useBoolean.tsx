import {useState, useRef} from "react"

const useBoolean = (initialValue: boolean) => {
	const [value, setValue] = useState(initialValue)

	const updateValue = useRef({
		toggle: () => setValue(prevValue => !prevValue),
		on: () => setValue(true),
		off: () => setValue(false)
	})

	return [value, updateValue.current] as const
}

export default useBoolean