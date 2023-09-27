import { Button } from '@/components/ui/Button'
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const services = [
  {
    heading: 'Venta y renta de maquinaria, equipo y herramienta para la construcción',
    description: 'Nos especializamos en proporcionar equipos y herramientas necesarios para proyectos de construcción, ofreciendo una amplia gama de maquinaria, que incluye excavadoras, grúas, retroexcavadoras, martillos neumáticos, hormigoneras y herramientas de construcción como sierras, taladros, y equipo de seguridad. Poniendo a disposición de nuestros clientes la opción de comprar o alquilar estos equipos según sus necesidades.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta y renta de maquinaria, equipo y herramienta industrial',
    description: 'Atendemos las necesidades de la industria, facilitando maquinaria y equipos especializados para aplicaciones industriales, como máquinas de soldar, tornos, fresadoras, compresores de aire, generadores eléctricos y herramientas de precisión. Ayudamos a las empresas a adquirir el equipo necesario para sus procesos de fabricación y producción.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta y renta de maquinaria, equipo y herramienta para jardinería',
    description: 'Suministramos herramientas y equipos necesarios para el mantenimiento de jardines y áreas verdes. Vendemos y rentamos cortadoras de césped, desbrozadoras, sopladoras de hojas, podadoras y herramientas de jardinería, junto con servicios de alquiler para aquellos que no necesitan el equipo de forma permanente. Nuestros principales clientes son paisajistas, jardineros y propietarios de jardines que buscan realzar la belleza de sus áreas verdes.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta de material para la construcción, eléctrico e industrial',
    description: 'Proveemos una variedad de materiales esenciales para la construcción, desde ladrillos, cemento y madera, hasta productos eléctricos como cables, interruptores y componentes industriales como tuberías y válvulas, que son recursos fundamentales para contratistas, constructores y empresas de mantenimiento.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta de accesorios y refacciones para automóviles',
    description: 'Ofrecemos una amplia gama de accesorios y piezas de repuesto para vehículos. Los productos incluyen filtros de aceite, frenos, baterías, llantas, aceites y una variedad de accesorios como estéreos, tapetes y luces personalizadas. Somos un referente confiable para propietarios de automóviles y mecánicos.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta de productos de cartón',
    description: 'Distribuimos productos de cartón, como cajas, embalajes y envases personalizados. Estos productos se utilizan en envíos, mudanzas y almacenamiento, y son esenciales para muchas empresas que necesitan empacar y transportar sus productos de manera segura.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta de insumos y consumibles para oficina',
    description: 'Proporcionamos todo lo necesario para abastecer una oficina. Ponemos a su alcance recursos como: papel, tinta, cartuchos de impresora, bolígrafos, carpetas y otros suministros esenciales, que son un recurso importante para empresas, instituciones educativas y trabajadores remotos.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta y renta de mobiliario y equipo para oficina',
    description: 'Ponemos a su alcance una amplia gama de mobiliario y equipos para entornos de oficina, incluyendo sillas ergonómicas, escritorios, fotocopiadoras, impresoras, proyectores y sistemas de conferencias, Ayudamos a las empresas a equipar sus espacios de trabajo de manera eficiente y cómoda.',
    image: '/images/mission.webp'
  },
  {
    heading: 'Venta de accesorios y productos de limpieza',
    description: 'Proveemos productos y accesorios para la limpieza y mantenimiento de hogares y empresas. Algunos de ellos son: detergentes, escobas, mopas, aspiradoras, productos químicos de limpieza y suministros como toallas de papel y bolsas de basura, indispensables para mantener espacios limpios y saludables.',
    image: '/images/mission.webp'
  }
] as const

export default function Home () {
  return (
    <>
      <section className='max-w-7xl mx-auto relative z-20'>
        <div className='h-2xl px-4 md:px-6 mx-auto pt-16 sm:pt-24 relative'>
          <div className='flex flex-col items-start sm:items-start gap-y-6 max-w-xl'>
            <div className='font-primary space-y-6'>
              <Balancer as='h1' className='leading-[1.15] text-[42px] sm:text-6xl font-semibold sm:leading-none'>
                {siteConfig.description}
              </Balancer>
              <Balancer as='p' className='text-sm sm:text-lg font-medium md:pr-32'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magni reprehenderit error, quo nulla quia asperiores doloremque iste.
              </Balancer>
            </div>
            <Button className='mt-2 sm:mt-4 font-medium' color='primary' size='lg'>
              Contáctanos
            </Button>
          </div>
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
            <Balancer as='p' className='text-sm sm:text-base text-muted-foreground'>
              Nuestra empresa está comprometida con la excelencia, la innovación y la satisfacción absoluta de nuestros clientes.
              Conoce la lista de productos de primera y descubra cómo ACO 74 puede marcar una diferencia en su empresa o negocio.
            </Balancer>
            <div className='pt-4'>
              <Image
                src='/images/solutions1.webp'
                alt='Nuestras soluciones'
                width={1260}
                height={860}
                className='w-full h-auto rounded-xl block md:hidden'
              />
            </div>
          </div>
          <div className='space-y-8 sm:space-y-24'>
            {services.map((service, key) => {
              const isPair = key % 2 === 0

              return (
                <article className={cn('flex md:flex-row md:items-center flex-col-reverse gap-y-6', (isPair && 'md:flex-row-reverse'))} key={key}>
                  <div className={cn('md:w-1/2 px-2 space-y-3 md:space-y-4 text-center md:text-left', (isPair ? 'md:pl-12 md:pr-4' : 'md:pr-12 md:pl-4'))}>
                    <Balancer as='h3' className='text-h3'>
                      {service.heading}
                    </Balancer>
                    <Balancer as='p' className='text-xs sm:text-sm text-muted-foreground'>
                      {service.description}
                    </Balancer>
                  </div>
                  <div className='md:w-1/2'>
                    <Image
                      src={service.image}
                      alt={service.heading}
                      width={1260}
                      height={860}
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
