// Statistical Methods
// Luke Mitchell, April 2016
// https://github.com/lukem512/statistical-methods

// Extract a numeric value from an array
function num(elem) {
	var i = parseInt(arr[i]);
	if (i) return i;

	var f = parseFloat(arr[i]);
	if (f) return f;

	return 0;
};

// Compute the mean of a numeric array
function mean(arr) {
	return mu = sum(arr) / arr.length;
};

function mode(arr) {
	// TODO
};

function median(arr) {
	// TODO
};

// Compute the variance of a numeric array
function variance(arr, sample) {
	var sample = sample | false;
	var mu = mean(arr);
	var divisor = (sample ? arr.length - 1 : arr.length);
	return (1/divisor) * sum(arr.map(function(i) {
		return (i - mu) * (i - mu);
	}));
};

// Compute the standard deviation of a numeric array
function stddev(arr, sample) {
	var s2 = variance(arr, sample);
	return Math.sqrt(s2);
};

// Sum all numeric elements in an array
function sum(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total += num(arr[i]);
	}
	return total;
};

// Find the product of all numeric elements in an array
function prod(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total *= num(arr[i]);
	}
	return total;
};
