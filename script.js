const cardStyle = {
	width: "300px",
	border: "1px solid #ccc",
	borderRadius: "5px",
	padding: "10px",
	margin: "10px",
	backgroundColor: "#f9f9f9",
	fontFamily: "Arial, sans-serif",
};

const buttonFirst = {
	width: "100px",
	height: "40px",
	color: "#fff",
	backgroundColor: "rgb(219, 89, 29)",
	cursor: "pointer",
	border: "none",
};

const buttonSecond = {
	width: "200px",
	height: "50px",
	color: "#fff",
	border: "none",
	borderRadius: "20px",
	backgroundColor: "rgb(20, 50, 60)",
	cursor: "pointer",
	padding: "5px 10px",
};

const inputStyle = {
	width: "290px",
	height: "25px",
	marginTop: "10px",
};

const card = React.createElement(
	"div",
	{ style: cardStyle },
	React.createElement("h1", null, "Card"),
	React.createElement(
		"h2",
		null,
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ullam ducimus! Iste, quae quis quaerat, possimus fugit inventore temporibus modi recusandae veritatis minus eum atque laboriosam tempora officia illo. Voluptates!"
	),
	React.createElement("button", { style: buttonFirst }, "NEXT"),
	React.createElement("p", null, "Typography"),
	React.createElement("h1", null, "Text Align"),
	React.createElement(
		"p",
		null,
		"Utilities for controlling the alignment of text."
	),
	React.createElement("button", { style: buttonSecond }, "BUTTON 1"),
	React.createElement(
		"p",
		null,
		"Enter your name:",
		React.createElement("input", { style: inputStyle })
	),
	React.createElement(
		"p",
		null,
		"Enter your email:",
		React.createElement("input", { style: inputStyle })
	),
	React.createElement("button", null, "Subscribe!")
);
ReactDOM.render(card, document.querySelector("#root"));
