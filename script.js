// promise task
function simulateAsyncTask() {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Async task completed!"), 2000);
	});
}
console.log("Task started...");
simulateAsyncTask().then((msg) => console.log(msg));
console.log("This logs before the async task finishes!");


async function fetchCatBreeds() {
	try {
		const response = await fetch("https://catfact.ninja/breeds");
		if (!response.ok) throw new Error("Network response was not ok");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching breeds:", error);
	}
}
fetchCatBreeds().then((data) => console.log("Breeds data:", data));

// to get the values 
function getSelectedFactCount() {
	return document.getElementById("factCount").value;
}


async function displayCatFacts() {
	const count = getSelectedFactCount();
	const container = document.getElementById("factsContainer");
	container.innerHTML = "<p>Loading facts...</p>";
}
