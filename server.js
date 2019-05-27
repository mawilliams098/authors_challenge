const express = require('express')
const app = express()
const port = 3000

books = {
	'1984': 'GeorgeOrwell'
}

app.get('/:title', (req, res) => {
	const ans = books[req.params.title]
	res.send(ans)
});

// part two will have a bunch of different routs... so more app.get()s
//app.get('/getGeocode:address', (req, res) => {
	//access google api with req.params.address 
	// axios.get(google api url.then(
	// 	res.send(response from google)
	// ))
// }

app.listen(port, () => console.log(`Authors app listening on port ${port}!`))
