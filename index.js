// var cool = require ("cool-ascii-faces");
var express = require ("express");
var path = require("path");

var app = express();
var port = (process.env.PORT || 10000);

// app.get("/cool",(request,response) => {
// 	response.send(cool());
// 	console.log("New request to /cool hasta arrived");
// });

app.use("/",express.static(path.join(__dirname,"public")));


app.get("/info/rentals",(req,res)=>{
	res.send(`<!DOCTYPE html>
	<html lang="es">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- <link rel="stylesheet" href="style.css"> -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
		<title>Rentals</title>
	</head>
	 
	<body>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
	
			body {
				font-family: 'Poppins', sans-serif;
				color: rgb(226, 226, 226);
				background: #e2e2e2;
			}
	
			a {
				text-decoration: none;
				color: #e2e2e2;
				transition: 0.2s ease-in-out;
			}
	
			a:hover {
				color: #fdfd96;
	
			}
	
			p {
				font-size: 16px;
				line-height: 20px;
			}
	
			h1,
			h2,
			h3,
			b {
				padding: 5px;
				color: #fdfd96;
			}
	
			.main {
				margin: auto;
				padding: 15px;
				display: grid;
				grid-template-columns: 1fr;
				width: 80%;
			}
	
			.container {
				padding: 30px;
				background: #191919;
				margin-top: 50px;
				border-radius: 5px;
				-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	
			}
	
			.team,
			.description,
			.api {
				margin: 15px;
				padding: 15px;
			}
	
			/* TABLE STYLE */
	
			table {
				background: #191919;
				font-size: 12px;
				margin: 45px;
				width: 90%;
				text-align: left;
				border-collapse: collapse;
			}
	
			th {
				font-size: 16px;
				font-weight: bold;
				padding: 8px;
				border-top: 4px solid #242323;
				border-bottom: 4px solid #242323;
				color: #fdfd96;
			}
	
			td {
				padding: 8px;
				border-bottom: 4px solid #242323;
				color: #e2e2e2;
				border-top: 1px solid transparent;
				transition: 0.2s ease-in-out;
			}
	
			tr:hover td {
				background: #242323;
				color: #fdfd96;
			}
		</style>
		<div class="main">
			<div class="container">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>year</th>
							<th>price-m2</th>
							<th>annual-variation</th>
							<th>all-time-high</th>
							<th>max-variation</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2019</td>
							<td>8,5</td>
							<td>7</td>
							<td>9,5</td>
							<td>-9,9</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2019</td>
							<td>7,8</td>
							<td>9,1</td>
							<td>8,2</td>
							<td>-4</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2019</td>
							<td>7,2</td>
							<td>4,6</td>
							<td>10,8</td>
							<td>-33,2</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2019</td>
							<td>12,6</td>
							<td>2</td>
							<td>14</td>
							<td>-9,6</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2019</td>
							<td>10</td>
							<td>3,3</td>
							<td>10,3</td>
							<td>-2,7</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2019</td>
							<td>7,6</td>
							<td>4,3</td>
							<td>12,7</td>
							<td>-40,2</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2019</td>
							<td>6,5</td>
							<td>5,8</td>
							<td>7</td>
							<td>-7,7</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2019</td>
							<td>5,4</td>
							<td>6,6</td>
							<td>5,8</td>
							<td>-6,6</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2019</td>
							<td>14,2</td>
							<td>4,4</td>
							<td>15,2</td>
							<td>-6,8</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2019</td>
							<td>7,5</td>
							<td>7,4</td>
							<td>9,4</td>
							<td>-19,9</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2019</td>
							<td>11,9</td>
							<td>5,1</td>
							<td>12,3</td>
							<td>-3,9</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2019</td>
							<td>5</td>
							<td>5,3</td>
							<td>5,4</td>
							<td>-6,5</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2019</td>
							<td>6,6</td>
							<td>0,7</td>
							<td>8,7</td>
							<td>-24,8</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2019</td>
							<td>6,5</td>
							<td>8,7</td>
							<td>6,8</td>
							<td>-4,2</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2019</td>
							<td>14,7</td>
							<td>3,6</td>
							<td>15,4</td>
							<td>-4</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2019</td>
							<td>8,4</td>
							<td>-0,6</td>
							<td>9,5</td>
							<td>-11,3</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2019</td>
							<td>6,1</td>
							<td>7,5</td>
							<td>7,1</td>
							<td>-13,9</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2019</td>
							<td>8,5</td>
							<td>10,6</td>
							<td>8,8</td>
							<td>-3,4</td>
						</tr>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2018</td>
							<td>8</td>
							<td>96</td>
							<td>9,5</td>
							<td>-15,7</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2018</td>
							<td>7,2</td>
							<td>6,6</td>
							<td>8,2</td>
							<td>-12</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2018</td>
							<td>6,9</td>
							<td>3,9</td>
							<td>10,8</td>
							<td>-36,1</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2018</td>
							<td>12,4</td>
							<td>4,2</td>
							<td>14</td>
							<td>-11,4</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2018</td>
							<td>9,7</td>
							<td>10,8</td>
							<td>10,3</td>
							<td>-5,9</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2018</td>
							<td>7,3</td>
							<td>7,7</td>
							<td>12,7</td>
							<td>-42,6</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2018</td>
							<td>6,1</td>
							<td>6,1</td>
							<td>7</td>
							<td>-12,8</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2018</td>
							<td>5,1</td>
							<td>6,6</td>
							<td>5,8</td>
							<td>-12,4</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2018</td>
							<td>13,6</td>
							<td>-0,5</td>
							<td>15,2</td>
							<td>-10,8</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2018</td>
							<td>7</td>
							<td>7,2</td>
							<td>9,4</td>
							<td>-25,4</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2018</td>
							<td>11,3</td>
							<td>3,5</td>
							<td>12,3</td>
							<td>-8,5</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2018</td>
							<td>4,8</td>
							<td>0,4</td>
							<td>5,4</td>
							<td>-11,2</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2018</td>
							<td>6,1</td>
							<td>5,5</td>
							<td>8,7</td>
							<td>-29,7</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2018</td>
							<td>6</td>
							<td>0,9</td>
							<td>6,8</td>
							<td>-11,9</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2018</td>
							<td>14,2</td>
							<td>9,6</td>
							<td>15,4</td>
							<td>-7,3</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2018</td>
							<td>8,5</td>
							<td>-2</td>
							<td>9,5</td>
							<td>-10,8</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2018</td>
							<td>5,7</td>
							<td>7,1</td>
							<td>7,1</td>
							<td>-19,9</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2018</td>
							<td>7,7</td>
							<td>10,9</td>
							<td>8,8</td>
							<td>-12,6</td>
						</tr>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2017</td>
							<td>7,3</td>
							<td>11,2</td>
							<td>9,5</td>
							<td>-23,1</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2016</td>
							<td>6,7</td>
							<td>5,6</td>
							<td>8,2</td>
							<td>-17,5</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2016</td>
							<td>6,6</td>
							<td>5,6</td>
							<td>10,8</td>
							<td>-38,5</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2016</td>
							<td>11,9</td>
							<td>16,8</td>
							<td>14</td>
							<td>-14,9</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2016</td>
							<td>8,7</td>
							<td>19,8</td>
							<td>10,3</td>
							<td>-15</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2016</td>
							<td>6,8</td>
							<td>3,4</td>
							<td>12,7</td>
							<td>-46,7</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2016</td>
							<td>5,8</td>
							<td>5,9</td>
							<td>7</td>
							<td>-17,8</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2016</td>
							<td>4,8</td>
							<td>4,8</td>
							<td>5,8</td>
							<td>-17,8</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2016</td>
							<td>13,7</td>
							<td>13,4</td>
							<td>15,2</td>
							<td>-10,3</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2016</td>
							<td>6,5</td>
							<td>10,9</td>
							<td>9,4</td>
							<td>-30,4</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2016</td>
							<td>10,9</td>
							<td>6,4</td>
							<td>12,3</td>
							<td>-11,6</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2016</td>
							<td>4,8</td>
							<td>5</td>
							<td>5,4</td>
							<td>-11,6</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2016</td>
							<td>5,8</td>
							<td>4,8</td>
							<td>8,7</td>
							<td>-33,3</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2016</td>
							<td>5,5</td>
							<td>5,7</td>
							<td>6,8</td>
							<td>-19,2</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2016</td>
							<td>13</td>
							<td>10,6</td>
							<td>15,4</td>
							<td>-15,5</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2016</td>
							<td>8,7</td>
							<td>7</td>
							<td>9,5</td>
							<td>-9</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2016</td>
							<td>5,3</td>
							<td>7,9</td>
							<td>7,1</td>
							<td>-25,2</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2016</td>
							<td>6,9</td>
							<td>6,9</td>
							<td>8,8</td>
							<td>-21,2</td>
						</tr>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2015</td>
							<td>6,5</td>
							<td>6</td>
							<td>9,5</td>
							<td>-30,8</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2015</td>
							<td>6,4</td>
							<td>5,5</td>
							<td>8,2</td>
							<td>-21,8</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2015</td>
							<td>6,3</td>
							<td>5</td>
							<td>10,8</td>
							<td>-41,8</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2015</td>
							<td>10,2</td>
							<td>23,8</td>
							<td>14</td>
							<td>-27,2</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2015</td>
							<td>7,3</td>
							<td>6,2</td>
							<td>10,3</td>
							<td>-29</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2015</td>
							<td>6,6</td>
							<td>6,8</td>
							<td>12,7</td>
							<td>-48,5</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2015</td>
							<td>5,4</td>
							<td>4</td>
							<td>7</td>
							<td>-22,4</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2015</td>
							<td>4,5</td>
							<td>2</td>
							<td>5,8</td>
							<td>-21,6</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2015</td>
							<td>12</td>
							<td>19,9</td>
							<td>15,2</td>
							<td>-20,9</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2015</td>
							<td>5,9</td>
							<td>9,5</td>
							<td>9,4</td>
							<td>-37,3</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2015</td>
							<td>10,3</td>
							<td>5</td>
							<td>12,3</td>
							<td>-16,9</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2015</td>
							<td>4,5</td>
							<td>6,8</td>
							<td>5,4</td>
							<td>-15,8</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2015</td>
							<td>5,6</td>
							<td>2,7</td>
							<td>8,7</td>
							<td>-36,4</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2015</td>
							<td>5,2</td>
							<td>3,3</td>
							<td>6,8</td>
							<td>-23,6</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2015</td>
							<td>11,7</td>
							<td>9,6</td>
							<td>15,4</td>
							<td>-23,6</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2015</td>
							<td>8,1</td>
							<td>-3,3</td>
							<td>9,5</td>
							<td>-15</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2015</td>
							<td>4,9</td>
							<td>1</td>
							<td>7,1</td>
							<td>-30,7</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2015</td>
							<td>6,5</td>
							<td>2,8</td>
							<td>8,8</td>
							<td>-26,3</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</body>
	
	</html>`)
});

app.get("/info/sales",(req,res) =>{
	res.send(`<!DOCTYPE html>
	<html lang="es">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- <link rel="stylesheet" href="style.css"> -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
		<title>Sales</title>
	</head>
	
	<body>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
	
			body {
				font-family: 'Poppins', sans-serif;
				color: rgb(226, 226, 226);
				background: #e2e2e2;
			}
	
			a {
				text-decoration: none;
				color: #e2e2e2;
				transition: 0.2s ease-in-out;
			}
	
			a:hover {
				color: #fdfd96;
	
			}
	
			p {
				font-size: 16px;
				line-height: 20px;
			}
	
			h1,
			h2,
			h3,
			b {
				padding: 5px;
				color: #fdfd96;
			}
	
			.main {
				margin: auto;
				padding: 15px;
				display: grid;
				grid-template-columns: 1fr;
				width: 80%;
			}
	
			.container {
				padding: 30px;
				background: #191919;
				margin-top: 50px;
				border-radius: 5px;
				-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	
			}
	
			.team,
			.description,
			.api {
				margin: 15px;
				padding: 15px;
			}
	
			/* TABLE STYLE */
	
			table {
				background: #191919;
				font-size: 12px;
				margin: 45px;
				width: 90%;
				text-align: left;
				border-collapse: collapse;
			}
	
			th {
				font-size: 16px;
				font-weight: bold;
				padding: 8px;
				border-top: 4px solid #242323;
				border-bottom: 4px solid #242323;
				color: #fdfd96;
			}
	
			td {
				padding: 8px;
				border-bottom: 4px solid #242323;
				color: #e2e2e2;
				border-top: 1px solid transparent;
				transition: 0.2s ease-in-out;
			}
	
			tr:hover td {
				background: #242323;
				color: #fdfd96;
			}
		</style>
		<div class="main">
			<div class="container">
				<table class="waffle" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<th>location</th>
							<th>year</th>
							<th>sales-total</th>
							<th>sales-protected-housing</th>
							<th>sales-new</th>
							<th>sales-second-hand</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2019</td>
							<td class="s4">109.275</td>
							<td class="s4">5.806</td>
							<td class="s4">9.165</td>
							<td class="s4">98.636</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2019</td>
							<td class="s4">15.365</td>
							<td class="s4">369</td>
							<td class="s4">1.816</td>
							<td class="s4">13.459</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2019</td>
							<td class="s4">10.120</td>
							<td class="s4">693</td>
							<td class="s4">657</td>
							<td class="s4">9.333</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2019</td>
							<td class="s4">15.692</td>
							<td class="s4">111</td>
							<td class="s4">1.301</td>
							<td class="s4">14.388</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2019</td>
							<td class="s4">24.630</td>
							<td class="s4">945</td>
							<td class="s4">1.670</td>
							<td class="s4">22.886</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2019</td>
							<td class="s4">7.250</td>
							<td class="s4">240</td>
							<td class="s4">742</td>
							<td class="s4">6.435</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castilla-la mancha</th>
							<td class="s3">2019</td>
							<td class="s4">24.082</td>
							<td class="s4">907</td>
							<td class="s4">1.988</td>
							<td class="s4">21.882</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2019</td>
							<td class="s4">25.852</td>
							<td class="s4">1.130</td>
							<td class="s4">1.712</td>
							<td class="s4">23.825</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2019</td>
							<td class="s4">89.237</td>
							<td class="s4">1.647</td>
							<td class="s4">6.455</td>
							<td class="s4">82.341</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2019</td>
							<td class="s4">84.737</td>
							<td class="s4">4.097</td>
							<td class="s4">7.688</td>
							<td class="s4">76.815</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2019</td>
							<td class="s4">9.686</td>
							<td class="s4">765</td>
							<td class="s4">360</td>
							<td class="s4">9.213</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2019</td>
							<td class="s4">20.462</td>
							<td class="s4">487</td>
							<td class="s4">1.828</td>
							<td class="s4">18.560</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of madrid</th>
							<td class="s3">2019</td>
							<td class="s4">78.634</td>
							<td class="s4">3.628</td>
							<td class="s4">9.211</td>
							<td class="s4">68.036</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2019</td>
							<td class="s4">19.296</td>
							<td class="s4">536</td>
							<td class="s4">1.551</td>
							<td class="s4">17.723</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2019</td>
							<td class="s4">6.521</td>
							<td class="s4">323</td>
							<td class="s4">1.114</td>
							<td class="s4">5.271</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2019</td>
							<td class="s4">23.644</td>
							<td class="s4">1.367</td>
							<td class="s4">3.059</td>
							<td class="s4">19.870</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2019</td>
							<td class="s4">4.292</td>
							<td class="s4">279</td>
							<td class="s4">277</td>
							<td class="s4">3.991</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2019</td>
							<td class="s4">1.218</td>
							<td class="s4">71</td>
							<td class="s4">129</td>
							<td class="s4">1.043</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2018</td>
							<td class="s4">110.425</td>
							<td class="s4">5.575</td>
							<td class="s4">9.065</td>
							<td class="s4">100.435</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2018</td>
							<td class="s4">15.499</td>
							<td class="s4">409</td>
							<td class="s4">1.882</td>
							<td class="s4">13.515</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2018</td>
							<td class="s4">10.186</td>
							<td class="s4">707</td>
							<td class="s4">823</td>
							<td class="s4">9.194</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2018</td>
							<td class="s4">17.466</td>
							<td class="s4">122</td>
							<td class="s4">1.160</td>
							<td class="s4">16.302</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2018</td>
							<td class="s4">25.269</td>
							<td class="s4">525</td>
							<td class="s4">1.519</td>
							<td class="s4">23.703</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2018</td>
							<td class="s4">7.072</td>
							<td class="s4">222</td>
							<td class="s4">787</td>
							<td class="s4">6.226</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castilla-la mancha</th>
							<td class="s3">2018</td>
							<td class="s4">23.626</td>
							<td class="s4">1.071</td>
							<td class="s4">2.127</td>
							<td class="s4">21.222</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2018</td>
							<td class="s4">25.957</td>
							<td class="s4">1.059</td>
							<td class="s4">1.581</td>
							<td class="s4">24.071</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2018</td>
							<td class="s4">89.685</td>
							<td class="s4">1.731</td>
							<td class="s4">6.647</td>
							<td class="s4">82.596</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2018</td>
							<td class="s4">88.792</td>
							<td class="s4">4.128</td>
							<td class="s4">7.270</td>
							<td class="s4">81.061</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2018</td>
							<td class="s4">9.280</td>
							<td class="s4">813</td>
							<td class="s4">334</td>
							<td class="s4">8.800</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2018</td>
							<td class="s4">19.786</td>
							<td class="s4">527</td>
							<td class="s4">1.912</td>
							<td class="s4">17.805</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of madrid</th>
							<td class="s3">2018</td>
							<td class="s4">85.294</td>
							<td class="s4">3.940</td>
							<td class="s4">9.451</td>
							<td class="s4">74.574</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2018</td>
							<td class="s4">18.213</td>
							<td class="s4">508</td>
							<td class="s4">1.494</td>
							<td class="s4">16.656</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2018</td>
							<td class="s4">7.156</td>
							<td class="s4">596</td>
							<td class="s4">1.439</td>
							<td class="s4">5.367</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2018</td>
							<td class="s4">23.166</td>
							<td class="s4">1.409</td>
							<td class="s4">2.835</td>
							<td class="s4">19.781</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2018</td>
							<td class="s4">4.659</td>
							<td class="s4">304</td>
							<td class="s4">430</td>
							<td class="s4">4.139</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2018</td>
							<td class="s4">1.357</td>
							<td class="s4">252</td>
							<td class="s4">181</td>
							<td class="s4">963</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2017</td>
							<td class="s4">96.440</td>
							<td class="s4">4.703</td>
							<td class="s4">6.615</td>
							<td class="s4">89.004</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2017</td>
							<td class="s4">13.988</td>
							<td class="s4">573</td>
							<td class="s4">1.469</td>
							<td class="s4">12.291</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2017</td>
							<td class="s4">9.216</td>
							<td class="s4">739</td>
							<td class="s4">869</td>
							<td class="s4">8.133</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2017</td>
							<td class="s4">18.390</td>
							<td class="s4">127</td>
							<td class="s4">1.435</td>
							<td class="s4">16.947</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2017</td>
							<td class="s4">25.868</td>
							<td class="s4">572</td>
							<td class="s4">1.548</td>
							<td class="s4">24.207</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2017</td>
							<td class="s4">6.638</td>
							<td class="s4">223</td>
							<td class="s4">695</td>
							<td class="s4">5.874</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">castilla-la mancha</th>
							<td class="s3">2017</td>
							<td class="s4">20.642</td>
							<td class="s4">1.039</td>
							<td class="s4">2.684</td>
							<td class="s4">17.653</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2017</td>
							<td class="s4">22.890</td>
							<td class="s4">1.228</td>
							<td class="s4">1.461</td>
							<td class="s4">21.025</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2017</td>
							<td class="s4">85.567</td>
							<td class="s4">1.747</td>
							<td class="s4">5.729</td>
							<td class="s4">79.236</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2017</td>
							<td class="s4">79.132</td>
							<td class="s4">3.515</td>
							<td class="s4">7.171</td>
							<td class="s4">71.674</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2017</td>
							<td class="s4">8.090</td>
							<td class="s4">962</td>
							<td class="s4">302</td>
							<td class="s4">7.544</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2017</td>
							<td class="s4">17.555</td>
							<td class="s4">546</td>
							<td class="s4">1.888</td>
							<td class="s4">15.524</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">community of madrid</th>
							<td class="s3">2017</td>
							<td class="s4">80.613</td>
							<td class="s4">4.013</td>
							<td class="s4">7.755</td>
							<td class="s4">71.738</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2017</td>
							<td class="s4">15.447</td>
							<td class="s4">491</td>
							<td class="s4">1.372</td>
							<td class="s4">14.005</td>
						</tr>
						<tr style="height: 20px">
							<th class="community of navarre">2017</th>
							<td class="s3">2017</td>
							<td class="s4">6.040</td>
							<td class="s4">450</td>
							<td class="s4">1.132</td>
							<td class="s4">4.734</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2017</td>
							<td class="s4">20.909</td>
							<td class="s4">1.168</td>
							<td class="s4">2.325</td>
							<td class="s4">17.994</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2017</td>
							<td class="s4">3.748</td>
							<td class="s4">262</td>
							<td class="s4">258</td>
							<td class="s4">3.415</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2017</td>
							<td class="s4">1.088</td>
							<td class="s4">56</td>
							<td class="s4">207</td>
							<td class="s4">866</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2016</td>
							<td class="s4">83.508</td>
							<td class="s4">4.612</td>
							<td class="s4">6.315</td>
							<td class="s4">76.094</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2016</td>
							<td class="s4">11.688</td>
							<td class="s4">712</td>
							<td class="s4">1.356</td>
							<td class="s4">9.966</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2016</td>
							<td class="s4">7.602</td>
							<td class="s4">524</td>
							<td class="s4">605</td>
							<td class="s4">6.919</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2016</td>
							<td class="s4">15.882</td>
							<td class="s4">101</td>
							<td class="s4">1.350</td>
							<td class="s4">14.525</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2016</td>
							<td class="s4">22.283</td>
							<td class="s4">507</td>
							<td class="s4">1.419</td>
							<td class="s4">20.735</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2016</td>
							<td class="s4">5.250</td>
							<td class="s4">240</td>
							<td class="s4">626</td>
							<td class="s4">4.523</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">castilla-la mancha</th>
							<td class="s3">2016</td>
							<td class="s4">16.265</td>
							<td class="s4">871</td>
							<td class="s4">1.943</td>
							<td class="s4">14.049</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2016</td>
							<td class="s4">20.509</td>
							<td class="s4">1.156</td>
							<td class="s4">1.491</td>
							<td class="s4">18.612</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2016</td>
							<td class="s4">75.152</td>
							<td class="s4">1.378</td>
							<td class="s4">4.888</td>
							<td class="s4">69.837</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">valencian community</th>
							<td class="s3">2016</td>
							<td class="s4">67.820</td>
							<td class="s4">2.882</td>
							<td class="s4">6.535</td>
							<td class="s4">60.925</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2016</td>
							<td class="s4">7.197</td>
							<td class="s4">926</td>
							<td class="s4">303</td>
							<td class="s4">6.623</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2016</td>
							<td class="s4">15.604</td>
							<td class="s4">634</td>
							<td class="s4">2.133</td>
							<td class="s4">13.264</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of madrid</th>
							<td class="s3">2016</td>
							<td class="s4">67.366</td>
							<td class="s4">3.830</td>
							<td class="s4">6.104</td>
							<td class="s4">59.755</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2016</td>
							<td class="s4">13.638</td>
							<td class="s4">414</td>
							<td class="s4">1.702</td>
							<td class="s4">11.882</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2016</td>
							<td class="s4">4.946</td>
							<td class="s4">302</td>
							<td class="s4">850</td>
							<td class="s4">3.992</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2016</td>
							<td class="s4">18.730</td>
							<td class="s4">1.733</td>
							<td class="s4">2.532</td>
							<td class="s4">15.075</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2016</td>
							<td class="s4">3.255</td>
							<td class="s4">308</td>
							<td class="s4">232</td>
							<td class="s4">2.992</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2016</td>
							<td class="s4">1.043</td>
							<td class="s4">34</td>
							<td class="s4">180</td>
							<td class="s4">856</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2015</td>
							<td class="s4">76.743</td>
							<td class="s4">3.885</td>
							<td class="s4">8.238</td>
							<td class="s4">67.443</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2015</td>
							<td class="s4">11.317</td>
							<td class="s4">343</td>
							<td class="s4">1.466</td>
							<td class="s4">9.749</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2015</td>
							<td class="s4">6.516</td>
							<td class="s4">537</td>
							<td class="s4">554</td>
							<td class="s4">5.865</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2015</td>
							<td class="s4">12.952</td>
							<td class="s4">61</td>
							<td class="s4">1.336</td>
							<td class="s4">11.608</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2015</td>
							<td class="s4">19.846</td>
							<td class="s4">440</td>
							<td class="s4">1.850</td>
							<td class="s4">17.896</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2015</td>
							<td class="s4">4.660</td>
							<td class="s4">163</td>
							<td class="s4">672</td>
							<td class="s4">3.929</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castilla-la mancha</th>
							<td class="s3">2015</td>
							<td class="s4">14.288</td>
							<td class="s4">1.058</td>
							<td class="s4">1.624</td>
							<td class="s4">12.180</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2015</td>
							<td class="s4">18.306</td>
							<td class="s4">1.174</td>
							<td class="s4">1.525</td>
							<td class="s4">16.248</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2015</td>
							<td class="s4">61.108</td>
							<td class="s4">1.162</td>
							<td class="s4">4.747</td>
							<td class="s4">55.981</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2015</td>
							<td class="s4">59.605</td>
							<td class="s4">2.123</td>
							<td class="s4">6.760</td>
							<td class="s4">52.644</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2015</td>
							<td class="s4">6.323</td>
							<td class="s4">788</td>
							<td class="s4">450</td>
							<td class="s4">5.556</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2015</td>
							<td class="s4">14.633</td>
							<td class="s4">525</td>
							<td class="s4">2.663</td>
							<td class="s4">11.794</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">community of madrid</th>
							<td class="s3">2015</td>
							<td class="s4">57.431</td>
							<td class="s4">3.255</td>
							<td class="s4">5.244</td>
							<td class="s4">50.611</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2015</td>
							<td class="s4">12.788</td>
							<td class="s4">380</td>
							<td class="s4">1.404</td>
							<td class="s4">11.336</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2015</td>
							<td class="s4">4.533</td>
							<td class="s4">443</td>
							<td class="s4">644</td>
							<td class="s4">3.559</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2015</td>
							<td class="s4">16.568</td>
							<td class="s4">2.033</td>
							<td class="s4">2.365</td>
							<td class="s4">12.688</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2015</td>
							<td class="s4">3.124</td>
							<td class="s4">206</td>
							<td class="s4">321</td>
							<td class="s4">2.759</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2015</td>
							<td class="s4">972</td>
							<td class="s4">30</td>
							<td class="s4">209</td>
							<td class="s4">755</td>
						</tr>
					</tbody>
				</table>
	</div>`);
});

app.listen(port,() => {
	console.log(`Server ready lintening on port ${port}`);
})

