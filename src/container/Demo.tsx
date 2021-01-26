import React from "react";


export default function Demo() {
	return (
		<div className="login_tour" id= "aaa">
			<h2 tour-flynotes="1">
				Weekly Coding Challenge #1: Sign in/up Form
			</h2>
			<div className="container" id="container">
				<div className="form-container sign-up-container">
					<div className = "form">
						<h1 tour-flynotes="5">Create Account</h1>
						<div className="social-container">
							<label className="social" tour-flynotes="2">
								<i className="fab fa-facebook-f"></i>
							</label >
							<label className="social">
								<i className="fab fa-google-plus-g"></i>
							</label>
							<label className="social">
								<i className="fab fa-linkedin-in"></i>
							</label>
						</div>
						<span>or use your email for registration</span>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button >Sign Up</button>
					</div>
				</div>
				<div className="form-container sign-in-container">
					<div className = "form">
						<h1 tour-flynotes="3">Sign in</h1>
						<div className="social-container">
							<label className="social" >
								<i className="fab fa-facebook-f" ></i>
							</label>
							<label className="social">
								<i className="fab fa-google-plus-g"></i>
							</label>
							<label className="social">
								<i className="fab fa-linkedin-in"></i>
							</label>
						</div>
						<span>or use your account</span>
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<label>Forgot your password?</label>
						<button className ="test">Sign In</button>
					</div>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>
								To keep connected with us please login with your
								personal info
							</p>
							<button className="ghost" id="signIn">
								Sign In
							</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>
								Enter your personal details and start journey
								with us
							</p>
							<button className="ghost" id="signUp" tour-flynotes="9" onClick = {()=>{
							console.log("aaa")
						}}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<p>
					Created with <i className="fa fa-heart"></i> by
					<label>Florin Pop</label>- Read how I created this and how
					you can join the challenge
					<label>here</label>.
				</p>
			</footer>
		</div>
	);
}
