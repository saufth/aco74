import { Button } from '@/components/ui/Button'
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const services = [
  {
    heading: 'Venta y renta de maquinaria, equipo y herramienta para la construcción',
    description: 'Nos especializamos en proporcionar equipos y herramientas necesarios para proyectos de construcción, ofreciendo una amplia gama de maquinaria, que incluye excavadoras, grúas, retroexcavadoras, martillos neumáticos, hormigoneras y herramientas de construcción como sierras, taladros, y equipo de seguridad. Poniendo a disposición de nuestros clientes la opción de comprar o alquilar estos equipos según sus necesidades.',
    image: {
      src: '/images/building-machinary.svg',
      width: 957.5881,
      height: 840
    }
  },
  {
    heading: 'Venta y renta de maquinaria, equipo y herramienta industrial',
    description: 'Atendemos las necesidades de la industria, facilitando maquinaria y equipos especializados para aplicaciones industriales, como máquinas de soldar, tornos, fresadoras, compresores de aire, generadores eléctricos y herramientas de precisión. Ayudamos a las empresas a adquirir el equipo necesario para sus procesos de fabricación y producción.',
    image: {
      src: '/images/industrial-equipment.svg',
      width: 1154.9366,
      height: 840
    }
  },
  {
    heading: 'Venta y renta de maquinaria, equipo y herramienta para jardinería',
    description: 'Suministramos herramientas y equipos necesarios para el mantenimiento de jardines y áreas verdes. Vendemos y rentamos cortadoras de césped, desbrozadoras, sopladoras de hojas, podadoras y herramientas de jardinería, junto con servicios de alquiler para aquellos que no necesitan el equipo de forma permanente. Nuestros principales clientes son paisajistas, jardineros y propietarios de jardines que buscan realzar la belleza de sus áreas verdes.',
    image: {
      src: '/images/gardening.svg',
      width: 1315.2426,
      height: 840
    }
  },
  {
    heading: 'Venta de material para la construcción, eléctrico e industrial',
    description: 'Proveemos una variedad de materiales esenciales para la construcción, desde ladrillos, cemento y madera, hasta productos eléctricos como cables, interruptores y componentes industriales como tuberías y válvulas, que son recursos fundamentales para contratistas, constructores y empresas de mantenimiento.',
    image: {
      src: '/images/building-material.svg',
      width: 1284.4058,
      height: 840
    }
  },
  {
    heading: 'Venta de accesorios y refacciones para automóviles',
    description: 'Ofrecemos una amplia gama de accesorios y piezas de repuesto para vehículos. Los productos incluyen filtros de aceite, frenos, baterías, llantas, aceites y una variedad de accesorios como estéreos, tapetes y luces personalizadas. Somos un referente confiable para propietarios de automóviles y mecánicos.',
    image: {
      src: '/images/autoparts.svg',
      width: 1054.241,
      height: 840
    }
  },
  {
    heading: 'Venta de productos de cartón',
    description: 'Distribuimos productos de cartón, como cajas, embalajes y envases personalizados. Estos productos se utilizan en envíos, mudanzas y almacenamiento, y son esenciales para muchas empresas que necesitan empacar y transportar sus productos de manera segura.',
    image: {
      src: '/images/cartoon.svg',
      width: 1299.8444,
      height: 840
    }
  },
  {
    heading: 'Venta de insumos y consumibles para oficina',
    description: 'Proporcionamos todo lo necesario para abastecer una oficina. Ponemos a su alcance recursos como: papel, tinta, cartuchos de impresora, bolígrafos, carpetas y otros suministros esenciales, que son un recurso importante para empresas, instituciones educativas y trabajadores remotos.',
    image: {
      src: '/images/stationery.svg',
      width: 1151.5215,
      height: 840
    }
  },
  {
    heading: 'Venta y renta de mobiliario y equipo para oficina',
    description: 'Ponemos a su alcance una amplia gama de mobiliario y equipos para entornos de oficina, incluyendo sillas ergonómicas, escritorios, fotocopiadoras, impresoras, proyectores y sistemas de conferencias, Ayudamos a las empresas a equipar sus espacios de trabajo de manera eficiente y cómoda.',
    image: {
      src: '/images/office.svg',
      width: 1073.366,
      height: 840
    }
  },
  {
    heading: 'Venta de accesorios y productos de limpieza',
    description: 'Proveemos productos y accesorios para la limpieza y mantenimiento de hogares y empresas. Algunos de ellos son: detergentes, escobas, mopas, aspiradoras, productos químicos de limpieza y suministros como toallas de papel y bolsas de basura, indispensables para mantener espacios limpios y saludables.',
    image: {
      src: '/images/cleaning.svg',
      width: 1073.366,
      height: 840
    }
  }
] as const

export default function Home () {
  return (
    <>
      <section className='max-w-7xl mx-auto lg:flex lg:items-center space-y-8 lg:space-y-0 lg:gap-x-8 py-12'>
        <div className='max-w-md px-4 lg:px-6 mx-auto z-10'>
          <div className='space-y-4 lg:space-y-6'>
            <div className='font-primary space-y-4 lg:space-y-6 text-center lg:text-left'>
              <Balancer as='h1' className='text-h1'>
                {siteConfig.description}
              </Balancer>
              <Balancer as='p' className='text-hp1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magni
                reprehenderit error, quo nulla quia asperiores doloremque iste.
              </Balancer>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <Button className='mt-2 lg:mt-4 font-medium' variant='solid' color='primary' size='lg'>
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <Image
            src='/images/hero.svg'
            alt='ACO74'
            className='relative w-full h-auto px-4 lg:pr-6 lg:pl-0'
            width={944.8395}
            height={840}
          />
        </div>
      </section>
      <section className='bg-muted'>
        <div className='max-w-7xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-8 md:space-y-16'>
          <div className='max-w-3xl mx-auto space-y-3 sm:space-y-4 text-center'>
            <Balancer as='h2' className='mx-auto'>
              <span className='text-h2'>
                Nuestras soluciones
              </span>
            </Balancer>
            <Balancer as='p' className='text-hp2'>
              Nuestra empresa está comprometida con la excelencia, la innovación y la satisfacción absoluta
              de nuestros clientes. Conozca la lista de productos de primera y descubra cómo ACO 74 puede
              marcar una diferencia en su empresa o negocio.
            </Balancer>
          </div>
          <div className='space-y-8 sm:space-y-24'>
            {services.map((service, key) => {
              const isPair = key % 2 === 0

              return (
                <article className={cn('flex lg:flex-row lg:items-center flex-col-reverse gap-6', (isPair && 'lg:flex-row-reverse'))} key={key}>
                  <div className={cn('lg:max-w-xl px-2 space-y-3 lg:space-y-4 text-center lg:text-left', (isPair ? 'lg:pl-12 lg:pr-4' : 'lg:pr-12 lg:pl-4'))}>
                    <Balancer as='h3' className='text-h3'>
                      {service.heading}
                    </Balancer>
                    <Balancer as='p' className='text-p'>
                      {service.description}
                    </Balancer>
                  </div>
                  <div className='w-full'>
                    <Image
                      src={service.image.src}
                      alt={service.heading}
                      width={service.image.width}
                      height={service.image.height}
                      className='w-full h-auto'
                    />
                  </div>
                </article>
              )
            })}
          </div>
          <div className='flex justify-center'>
            <Button className='w-full sm:w-auto mt-2 sm:mt-4 font-medium' color='primary' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
