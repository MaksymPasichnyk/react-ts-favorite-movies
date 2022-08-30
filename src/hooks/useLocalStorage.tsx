import React, { useState } from "react"

const useLocalStorage = <T extends unknown> (key: string | null, intialValue: T) => {
	const [value, setValue] = useState(intialValue);

	
}
