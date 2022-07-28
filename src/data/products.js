const products = [
    {
        id: "c_t-shirt",
        name: "T-Shirt",
        category: "camisetas",
        foto_principal: "105h2MtwNk_tcHHnmoVTdEgjGhnRCl9Ff",
        colores_temp: "Blanco - Negro - Gris. Pregúntanos por disponibilidad.",
        price: 65000,
        description:
            "Camiseta básica de algodón pima, diseño exclusivo, cuello redondo y manga corta con logo bordado, unidades limitadas.",
        image: "https://i.postimg.cc/dV8jXLM6/c-t-shirt-P.jpg",
        xl: 5,
        l: 5,
        m: 5,
        s: 1,
        tallas: "{xl:5,xl:10,m:10,s:5}",
    },
    {
        id: "c_generation",
        name: "Generation",
        category: "camisetas",
        foto_principal: "1dzcgwqqIDE5c7p1_7cj352-WjQzAsIXM",
        colores_temp: "Blanco - Negro - Gris. Pregúntanos por disponibilidad.",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta , cuenta con un genial estampado exclusivo en su parte trasera y logotipo bordado en la parte delantera, unidades limitadas.",
        image: "https://i.postimg.cc/TPbpdHqJ/c-generation-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_oldschool",
        name: "OldSchool",
        category: "camisetas",
        foto_principal: "1LDaeglqfVB9wg_j-Lm6ZWqO6JEZ5-PbL",
        colores_temp: "Blanco - Negro - Gris. Pregúntanos por disponibilidad.",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta , cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        image: "https://i.postimg.cc/vT6D2qqK/c-old-School-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_vnk",
        name: "VNK",
        category: "camisetas",
        foto_principal: "1BLSVeWkJ_yM134-g6XMefzkW_5-j5gu6",
        colores_temp: "Blanco - Negro - Gris. Pregúntanos por disponibilidad.",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta , cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        image: "https://drive.google.com/uc?export=view&id=1BLSVeWkJ_yM134-g6XMefzkW_5-j5gu6",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_splash-x",
        name: "Splash X",
        category: "camisetas",
        foto_principal: "1uNiSVYL_56fEXT-jqRrmX8tsjLhbMc0P",
        colores_temp: "Blanco - Negro - Gris. Pregúntanos por disponibilidad.",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta , cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        image: "https://i.postimg.cc/mkvqj2k0/c-splash-x-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_special",
        name: "Special",
        category: "camisetas",
        foto_principal: "1Xr8rTHxgHrKpTp3oV2lNwRY7a5FpNWdy",
        colores_temp: "Navy - Negro. Pregúntanos por disponibilidad.",
        price: 80000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta , cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        image: "https://drive.google.com/uc?export=view&id=1Xr8rTHxgHrKpTp3oV2lNwRY7a5FpNWdy",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "g_iso",
        name: "Eagle",
        category: "gorras",
        foto_principal: "1eqbg8mI6XnB4fqRCgF5ci3_q9x7NkCzb",
        colores_temp: "Gris. Pregúntanos por disponibilidad.",
        price: 70000,
        description:
            "Gorra con logo bordado, diseño exclusivo y cuenta con hebilla metálica marcada con láser, unidades limitadas.",
        image: "https://drive.google.com/uc?export=view&id=1eqbg8mI6XnB4fqRCgF5ci3_q9x7NkCzb",
        xl: 0,
        l: 16,
        m: 0,
        s: 0,
        tallas: "",
    },
    {
        id: "g_vnk",
        name: "VNK",
        category: "gorras",
        foto_principal: "1Oz6IDnNMztRLl_DoDFgiFGGD0dEZ87yT",
        colores_temp: "Negro. Pregúntanos por disponibilidad.",
        price: 70000,
        description:
            "Gorra con bordado en alto relieve, diseño exclusivo y cuenta con hebilla metálica marcada con láser, unidades limitadas.",
        image: "https://drive.google.com/uc?export=view&id=1Oz6IDnNMztRLl_DoDFgiFGGD0dEZ87yT",
        xl: 0,
        l: 17,
        m: 0,
        s: 0,
        tallas: "",
    },
    {
        id: "c_openmind",
        name: "OPENMIND",
        category: "camisetas",
        foto_principal: "18MSYJczdrNtpg3fuoxWYXVoWXAZbFlka",
        colores_temp: "Negro - Blanco. Pregúntanos por disponibilidad.",
        price: 60000,
        description:
            "Camiseta tipo esqueleto de algodón pima con estampado estampado exclusivo en su parte delantera, unidades limitadas.",
        image: "https://drive.google.com/uc?export=view&id=18MSYJczdrNtpg3fuoxWYXVoWXAZbFlka",
        xl: 8,
        l: 15,
        m: 15,
        s: 7,
        tallas: "",
    },
    {
        id: "c_victory",
        name: "Victory",
        category: "camisetas",
        foto_principal: "10ZB_eaC2g9m3bXIjYPm_6G5JchBY3BQR",
        colores_temp: "Negro - Blanco. Pregúntanos por disponibilidad.",
        price: 60000,
        description:
            "Camiseta tipo esqueleto de algodón pima con estampado estampado exclusivo en su parte delantera, unidades limitadas.",
        image: "https://drive.google.com/uc?export=view&id=10ZB_eaC2g9m3bXIjYPm_6G5JchBY3BQR",
        xl: 8,
        l: 15,
        m: 15,
        s: 7,
        tallas: "}",
    },
];

export default products;
