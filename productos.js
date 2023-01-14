const productos = [
    {id:1, nombre:"ZAPATILLAS NIKE DUNK LOW RETRO", descripcion:"Zapatillas Nike Dunk Low Retro De Basket Para Hombre Código: Dm0108-400", precio:51999, imagen:"img1.webp", categoria:"calzado"},
    {id:2, nombre:"ZAPATILLAS PUMA GRAVITON", descripcion:"Zapatillas Puma Graviton De Moda Unisex Código: 384287/17", precio:23999, imagen:"img2.webp", categoria:"calzado"},
    {id:3, nombre:"ZAPATILLAS NIKE AIR MAX 97", descripcion:"Zapatillas Nike Air Max 97 De Moda Para Hombre Código: Dm0027-001", precio:68999
    , imagen:"img3.webp", categoria:"calzado"},
    {id:4, nombre:"ZAPATILLAS NIKE AIR FORCE 1 07 LV8", descripcion:"Zapatillas Nike Air Force 1 07 Lv8 De Moda Para Hombre Código: Do9801-100", precio:45999, imagen:"img4.webp", categoria:"calzado"},
    {id:5, nombre:"ZAPATILLAS NIKE AIR VAPORMAX", descripcion:"Zapatillas Nike Air Vapormax De Moda Para Hombre Código: Dm0025-100", precio: 82799, imagen:"img5.webp"},
    {id:6, nombre:"ZAPATILLAS NEW BALANCE 574", descripcion:"Zapatillas New Balance 574 De Moda Para Hombre Código: Ml574Vt2", precio:36199, imagen:"img6.webp", categoria:"calzado"},
    {id:7, nombre:"ZAPATILLAS PUMA RS METRIC", descripcion:"Zapatillas Puma Rs Metric De Moda Para Hombre Código: 386169/01", precio:24999, imagen:"img7.webp", categoria:"calzado"},
    {id:8, nombre:"ZAPATILLAS NEW BALANCE 306 CEL", calorias:36049, descripcion:"Zapatillas New Balance 306 Cel De Para Código: Nm306Cel", precio:16789, imagen:"img8.webp", categoria:"calzado"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);