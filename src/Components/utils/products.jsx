
const products = [
    {
        id: '1',
        title: 'Producto 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, doloremque',
        price: 752,
        stock: 9,
        category: 'remeras',
        pictureUrl: 'https://web-static.wrike.com/blog/content/uploads/2015/12/errores-fatales-en-el-lanzamiento-de-un-producto.jpg?av=c15b07c7167f3b187a8ec309e3d76964'
    },
    {
        id: '2',
        title: 'Producto 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, doloremque',
        price: 378,
        stock: 8,
        category: 'pantalones',
        pictureUrl: 'https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png'
    },
    {
        id: '3',
        title: 'Producto 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, doloremque',
        price: 151,
        stock: 20,
        category: 'camisas',
        pictureUrl: 'https://blog.up.edu.mx/hubfs/Por%20qu%C3%A9%20el%20producto%20es%20lo%20m%C3%A1s%20importante%20para%20una%20estrategia%20comercial%20exitosa.png'
    }
];

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    })
};


