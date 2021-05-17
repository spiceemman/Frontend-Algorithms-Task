// Frontend Algorithms Task (Frontend Task 4) - Part I



// Frontend Algorithms Task (Frontend Task 4) - Part II

const checkYuGiOh = (n)=> {
	let yuGiOh = [];
	if (isNaN(n) || n === null || Array.isArray(n)){
		return `Invalid parameter: ${JSON.stringify(n)}`
	} else {
		for (let i = 1; i<=n; i++){
			if (n === 1){
				yuGiOh.push(1);
			} else if (i%2 ===0 && i%3 === 0 && i%5 === 0){
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

console.log(checkYuGiOh({name: "Emmanuel", age: 7}));


