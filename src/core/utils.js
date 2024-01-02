// concept pure function - capitalize
export const capitalize = (string) => {
	if(typeof string !== "string") return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
};