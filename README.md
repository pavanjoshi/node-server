# node-server

## To run it
`npm start` OR `node index.js`

## API 

### URL
`http://localhost:3000/api/add2cart`   `POST`

### Request
```
{
	"products": [
		{
			"code": "P0123456"
		},
		{
			"code": "P0123457"
		},
		{
			"code": "P0123458"
		}
	]
}
```

### Response
```
{
  "code": "00",
  "msg": "success",
  "data": {}
}
```
