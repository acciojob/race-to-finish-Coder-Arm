window.promises = [];
const output = document.getElementById("output");
promises[0] = new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("Promise1");
	  },1000)
  });
promises[1] = new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("Promise2");
	  },1200)
  });
 promises[2] = new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("Promise3");
	  },1400)
  });
promises[3] = new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("Promise4");
	  },1500)
  });
promises[4] = new Promise((resolve) => {
	  setTimeout(() => {
		  resolve("Promise5");
	  },1800)
  });
Promise.any(window.promises).then((val) => output.innerText = val);

	

// Do not change the code above this
// add your promises to the array `promises`
