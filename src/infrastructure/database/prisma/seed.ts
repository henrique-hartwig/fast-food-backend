import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const productCategories = await prisma.productCategory.createMany({
    data: [
      { name: 'Lanche', description: 'Os nossos deliciosos lanches para matar sua fome!' },
      { name: 'Acompanhamento', description: 'Incríveis acompanhamentos que não podem faltar!' },
      { name: 'Bebida', description: 'Refrescantes bebidas para matar sua sede!' },
      { name: 'Sobremesa', description: 'Saborosas sobremesas para matar sua vontade!' },
    ],
  })

  console.log('Categorias de produtos criadas:', productCategories)

  const products = await prisma.product.createMany({
    data: [
      { name: 'X-Tudo', description: 'O clássico que você precisa!', price: 19.99 },
      { name: 'X-Burger', description: 'O clássico que você precisa!', price: 19.99 },
      { name: 'X-Salada', description: 'O clássico que você precisa!', price: 19.99 },
      { name: 'X-Bacon', description: 'O clássico que você precisa!', price: 19.99 },
      { name: 'X-Egg', description: 'O clássico que você precisa!', price: 19.99 },
    ],
  })

  console.log('Produtos criados:', products)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })