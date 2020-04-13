const http = require('http');
const rutas= require('./router');
// let ruta= rutas.opciones('/mas-votadas');
// console.log(ruta);

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// Route System
	res.end(rutas.opciones(req.url));
	// ¿?
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));

