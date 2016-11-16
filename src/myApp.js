var myLogin = new login();

	myLogin.init({
		forgotPasswordLink : true,
		socialLogin:false,
		classname:'containerLeft',
		theme : "roundCorners",
		events:[{element:'login',callback:validate},{element:'forgotpassword',callback:populateFields}]
	});


//myLogin.init();

function validate(){
	console.log("validating");
}
function populateFields(){
console.log("populating");
}