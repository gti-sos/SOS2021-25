// var cool = require ("cool-ascii-faces");
var express = require ("express");
var path = require("path");

var app = express();
var port = 10000;

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

app.get("/public/jose.html",(req,res) =>{
	res.render(path.join(__dirname,"/public/jose.html"));
});

app.listen(port,() => {
	console.log(`Server ready lintening on port ${port}`);
})

