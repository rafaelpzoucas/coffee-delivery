import { ProductCard } from "./ProductCard"

export const coffees = [
    {
        id: 1,
        image: "americano.png",
        name: "Café Americano",
        tags: ["tradicional"],
        description: "Café forte e encorpado",
        price: 3.50
    },
    {
        id: 2,
        image: "arabe.png",
        name: "Café Árabe",
        tags: ["tradicional"],
        description: "Café forte com especiarias árabes",
        price: 4.00
    },
    {
        id: 3,
        image: "cafecomleite.png",
        name: "Café com Leite",
        tags: ["com leite"],
        description: "Café suave com leite quente",
        price: 4.50
    },
    {
        id: 4,
        image: "cafegelado.png",
        name: "Café Gelado",
        tags: ["gelado"],
        description: "Café refrescante com gelo",
        price: 5.00
    },
    {
        id: 5,
        image: "capuccino.png",
        name: "Capuccino",
        tags: ["com leite"],
        description: "Café suave com espuma de leite",
        price: 5.50
    },
    {
        id: 6,
        image: "chocolatequente.png",
        name: "Chocolate Quente",
        tags: ["com leite", "especial"],
        description: "Chocolate quente cremoso",
        price: 4.50
    },
    {
        id: 7,
        image: "cubano.png",
        name: "Café Cubano",
        tags: ["tradicional"],
        description: "Café forte com açúcar mascavo",
        price: 4.00
    },
    {
        id: 8,
        image: "expressocremoso.png",
        name: "Expresso Cremoso",
        tags: ["tradicional"],
        description: "Café curto com espuma cremosa",
        price: 3.00
    },
    {
        id: 9,
        image: "expresso.png",
        name: "Expresso",
        tags: ["tradicional"],
        description: "Café curto e intenso",
        price: 2.50
    },
    {
        id: 10,
        image: "havaiano.png",
        name: "Café Havaiano",
        tags: ["com leite"],
        description: "Café com leite de coco e aroma de baunilha",
        price: 5.50
    },
    {
        id: 11,
        image: "irlandes.png",
        name: "Café Irlandês",
        tags: ["com leite", "alcoólico"],
        description: "Café com whiskey irlandês e chantilly",
        price: 7.50
    },
    {
        id: 12,
        image: "latte.png",
        name: "Latte",
        tags: ["com leite"],
        description: "Café com leite vaporizado e espuma",
        price: 5.00
    },
    {
        id: 13,
        image: "macchiato.png",
        name: "Macchiato",
        tags: ["com leite"],
        description: "Café curto com uma pequena quantidade de leite vaporizado",
        price: 3.50
        },
    {
        id: 14,
        image: "mochaccino.png",
        name: "Mochaccino",
        tags: ["com leite", "tradicional"],
        description: "Café com leite, chocolate em pó e chantilly",
        price: 6.00
    }
]

export function OurCoffees() {
      
    return(
        <div className="flex flex-col items-center w-full pb-16 px-4">
            <div className="w-full max-w-[1120px] ">
                <header>
                    <h1 className="text-4xl font-display">Nossos cafés</h1>
                </header>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-14">
                    {
                        coffees.map(coffee => {
                            return(
                                <ProductCard 
                                    key={coffee.id}
                                    image={coffee.image} 
                                    name={coffee.name} 
                                    description={coffee.description} 
                                    price={coffee.price}
                                    tags={coffee.tags} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}