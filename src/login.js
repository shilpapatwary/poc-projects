(function() {
/**
* calling init function creates a login module.
* @params: classname,forgotPasswordLink,theme,socialLogin,events

*/

	this.login = function() {
		
	};

	login.prototype = {

		init : function() {
		
			var requiredParameters={
			classname:['containerRight','containerLeft'],
			forgotPasswordLink:[true,false],
			theme:['roundCorners','SharpCorners'],
			socialLogin:[true,false],
			events:[]
			};
			var defaults = {

				classname : "containerRight",
				forgotPasswordLink : false,
				theme : "roundCorners",
				socialLogin:false,
				events:[]
			};
			

			if (arguments[0] && typeof arguments[0] === "object") {
				
				this.defaults=this.validateUserArguments(defaults,requiredParameters,arguments[0]);
				
			}
			this.createLogin(defaults);

		},
		validateUserArguments:function(defaultValues, requiredParams,userValues){
		  
		  for(var property in userValues){
		  		
		 		if (defaultValues.hasOwnProperty(property)) {
		 			if(property=='events'){
		 				defaultValues[property] =userValues[property];
		 				}
		 			if(requiredParams[property].indexOf(userValues[property]) > -1 ){
		 				defaultValues[property] =userValues[property];
		 				}
		 			}
		 		 }
		  
		  return defaultValues;
		},

		createLogin : function(values) {
			
			
			var loginContainer = document.createElement('div');
			loginContainer.className = "loginContainer "+values.classname;
			var customLogin=document.createElement('div');
			customLogin.className='customLogin '+ values.theme;
			var defaultLogin = "<input type='text' placeholder='user name' class='loginUsername' id='nameId'><input type='password' placeholder='Password' class='loginPassword' id='nameId'><button id='submitLogin' class='loginSubmit'>Log In</button>";
			
			customLogin.innerHTML = defaultLogin;
			loginContainer.appendChild(customLogin);
			document.body.appendChild(loginContainer);
			
			if(values.forgotPasswordLink){
				var link = document.createElement('a');
				link.setAttribute('id','LoginForgotPassword');
				link.className="forgotPassword";
				link.setAttribute('href','#');
				link.appendChild(document.createTextNode('Forgot Password ?'));
				customLogin.appendChild(link);
				
			}
			
			if(values.socialLogin){
				var socialLogin=document.createElement('div');
				socialLogin.className='social-login';
				var socialTemplate="<a href='#'>Login in with facebook</a><a href='#'>log in with Google</a></div>";
				socialLogin.innerHTML=socialTemplate;
				loginContainer.appendChild(socialLogin);
			}
			
			if(values.events.length> 0){
			
				var self=this;
				values.events.forEach(function(event){
				self.bindEvent(event.element,event.callback);
				
			});
			
			}

		},
		
		bindEvent:function(element,callback){
			if(element=='login'){
				document.getElementById('submitLogin').addEventListener('click',callback);
			}
			if(element=='forgotpassword'){
				document.getElementById('LoginForgotPassword').addEventListener('click',callback);
			}
		}	};

})();
