const products = [
    {
        "categoria": "ositos",
        "nombre": "Ositos Cariñositos",
        "productos": [
            {
                "categoria": "ositos",
                "nombre": "Osos",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "osos.jpg",
                "id": 1
            },
            {
                "categoria": "ositos",
                "nombre": "Oso azul",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoAzul.jpg",
                "id": 2
            },
            {
                "categoria": "ositos",
                "nombre": "Oso café",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoCafe.jpg",
                "id": 3
            },
            {
                "categoria": "ositos",
                "nombre": "Oso morado",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoMorado.jpg",
                "id": 4
            },
            {
                "categoria": "ositos",
                "nombre": "Oso rosa",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoRosa.jpg",
                "id": 5
            },
            {
                "categoria": "ositos",
                "nombre": "Oso rosita",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoRosita.jpg",
                "id": 6
            },


        ]
    },
    {
        "categoria": "kawaii",
        "nombre": "Kawaii",
        "productos": [

        ]
    },
    {
        "categoria": "ceramica",
        "nombre": "Cerámica",
        "productos": [

            {
                "categoria": "ceramica",
                "nombre": "Alajero",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Alajero.jpg",
                "id": 7
            },
            {
                "categoria": "ceramica",
                "nombre": "Cajita pastel",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "CajitaPastel.jpg",
                "id": 8
            },
            {
                "categoria": "ceramica",
                "nombre": "Plato largo",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "PlatoLargo.jpg",
                "id": 9
            },
            {
                "categoria": "ceramica",
                "nombre": "Taza",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Taza.jpg",
                "id": 10
            },

        ]
    },
    {
        "categoria": "otros",
        "nombre": "Otros",
        "productos": [
            {
                "categoria": "otros",
                "nombre": "Pintura",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "id": 11
            },
            {
                "categoria": "otros",
                "nombre": "Pintura",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "id": 12
            }

        ]
    }
]

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getCategoria(categoriaPath) {
    let categoria = null;
    products.forEach(element => {
        if (element.categoria === categoriaPath) {
            categoria = element;
        }
    });
    return categoria;
}
let categoriaPath = getParameterByName('categoria');
let categoria = getCategoria(categoriaPath);

function pintarTitulo() {
    document.getElementById('titulo-h1').innerHTML = categoria.nombre;
}

function pintarProductos() {
    let html = "";
    categoria.productos.forEach(element => {
        let fila = '<div class="col-md-3"><br><a target="_target" href="/html/detalles-producto.html?id={id}"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p><a target="_target" href="/html/detalles-producto.html?id={id}"><p align="center"><button type="button" href="_target" class="btn-historial">Agregar al carrito</button></p></a></div>';
        fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        fila = fila.replace("{id}", element.id);

        console.log(fila);
        html += fila;
    })
    document.getElementById('fila-1').innerHTML = html;
}


pintarTitulo();
pintarProductos();
console.log(products)
console.log(categoria);