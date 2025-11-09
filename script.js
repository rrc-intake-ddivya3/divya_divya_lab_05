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

// display the facts
async function displayCatFacts() {
	const count = getSelectedFactCount();
	const container = document.getElementById("factsContainer");
	container.innerHTML = "<p>Loading facts...</p>";

    try {
		const response = await fetch(`https://catfact.ninja/facts?limit=${count}`);
		if (!response.ok) throw new Error("Network error");
		const data = await response.json();

		container.innerHTML = data.data
			.map((factObj) => `<div class="fact">${factObj.fact}</div>`)
			.join("");
	} catch (error) {
		container.innerHTML = `<p style="color:red;">Failed to load cat facts: ${error.message}</p>`;
	}
}

const samuraiPizzaCats = {
	leader: "Speedy Cerviche",
	members: 3,
	base: {
		location: "Little Tokyo",
		name: "Pizza Cat Restaurant",
	},
	catchphrase: "It's cheese time!",
};

