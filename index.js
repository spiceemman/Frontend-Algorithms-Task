// Frontend Algorithms Task (Frontend Task 4) - Part I

const convertFahrToCelsius = (fahr)=>{
	
	const tempInC = ((fahr - 32) * 5/9).toFixed(4);

	const fahrFloat = parseFloat(fahr);

	if (isNaN(fahrFloat) === true || Array.isArray(fahr) === true){
		return(`${JSON.stringify(fahr)} is not a valid number but a/an ${Array.isArray(fahr) ? 'array' : typeof fahr}.`)
	} else {
		return tempInC
	}

}

console.log(convertFahrToCelsius());



// Frontend Algorithms Task (Frontend Task 4) - Part II

const checkYuGiOh = (n)=> {
	let yuGiOh = [];

	const nFloat = parseFloat(n)

		if (n === null){
			return `Invalid parameter: null`
		}else if (typeof n === "boolean"){
			return `Invalid parameter: ${n}`
		} else if(n === ""){
			return `Invalid parameter: ""`
		} else if (Array.isArray(n) === true){
			return `Invalid parameter: [${n}]`
		}else if (isNaN(n) === true || nFloat === 'number'){
			return `Invalid parameter: ${JSON.stringify(n)}`
		} else {
			for (let i = 1; i<=n; i++){

			if (i%2 ===0 && i%3 === 0 && i%5 === 0){
				yuGiOh.push("Yu-Gi-Oh")
			} else if (i%2 ===0 && i%3 === 0){
				yuGiOh.push("Yu-Gi")
			} else if (i%2 === 0 && i%5 === 0){
				yuGiOh.push("Yu-Oh")
			}else if (i%3 === 0 && i%5 === 0){
				yuGiOh.push("Gi-Oh")
			}else if (i%2 === 0){
				yuGiOh.push("Yu")
			}else if (i%3 === 0){
				yuGiOh.push("Gi")
			}else if (i%5 === 0){
				yuGiOh.push("Oh")
			}else{
				yuGiOh.push(i)
			}
		} return yuGiOh;
	}
}

console.log(checkYuGiOh());