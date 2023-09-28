import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'

const aboutUs = [
  {
    heading: 'Misión',
    description: 'Optimizar el departamento de compras de nuestros clientes, logrando el equilibrio entre  la mejor calidad, al mejor precio, en el menor tiempo. Accediendo a toda la variedad que los mercados internacionales ofrecen  a través de los distintos aliados y proveedores.',
    Icon: () => <Icons.Mission className='fill-primary w-10 sm:w-12 h-auto' />,
    image: '/images/mission.webp'
  },
  {
    heading: 'Visión',
    description: 'Buscamos ser la alternativa más resolutiva para los departamentos de compras en latinoamérica, siendo el eslabón estratégico de nuestros clientes en búsqueda de que logren  sus objetivos empresariales, convirtiéndonos en la referencia especializada con mayor prestigio en eficiencia y calidad.',
    Icon: () => <Icons.Vision className='fill-primary w-10 sm:w-12 h-auto' />,
    image: '/images/vision.webp'
  }
] as const

const values = [
  {
    heading: 'Calidad Suprema',
    description: 'Tenemos un compromiso inquebrantable con la búsqueda de la mejor calidad posible en los productos.',
    Icon: () => <Icons.Quality className='w-auto h-full' />
  },
  {
    heading: 'Eficiencia',
    description: 'Nos enfocamos en la eficiencia operativa para lograr compras más rápidas y rentables, sin sacrificar la calidad.',
    Icon: () => <Icons.Efficiency className='w-auto h-full' />
  },
  {
    heading: 'Precios Competitivos',
    description: 'Garantizamos que los productos y servicios ofrecidos representan la mejor relación calidad-precio en el mercado.',
    Icon: () => <Icons.Pricing className='w-auto h-full' />
  },
  {
    heading: 'Transparencia',
    description: 'Mantenemos una comunicación abierta y honesta con los clientes, aliados comerciales y empleados en todo momento.',
    Icon: () => <Icons.Transparency className='w-auto h-full' />
  },
  {
    heading: 'Alianzas Estratégicas',
    description: 'Fomentamos relaciones sólidas con aliados comerciales y proveedores para ampliar la variedad de productos disponibles.',
    Icon: () => <Icons.Alliance className='w-auto h-full' />
  },
  {
    heading: 'Innovación Tecnológica',
    description: 'Utilizamos herramientas tecnológicas de vanguardia para mejorar los procesos de compra y brindar un mejor servicio a los clientes.',
    Icon: () => <Icons.Innovation className='w-auto h-full' />
  },
  {
    heading: 'Orientación al Cliente',
    description: 'Colocamos siempre las necesidades y expectativas del cliente en el centro de todas las decisiones y acciones.',
    Icon: () => <Icons.Orientation className='w-auto h-full' />
  },
  {
    heading: 'Desarrollo de Talento',
    description: 'Invertimos en el desarrollo y crecimiento de los empleados, reconociendo que son un activo fundamental para el éxito de la empresa.',
    Icon: () => <Icons.Talent className='w-auto h-full' />
  },
  {
    heading: 'Responsabilidad Social',
    description: 'Estamos comprometidos con prácticas comerciales éticas y sostenibles que benefician a la comunidad y al medio ambiente.',
    Icon: () => <Icons.Responsability className='w-auto h-full' />
  },
  {
    heading: 'Flexibilidad',
    description: 'Nos adaptamos constantemente a las cambiantes condiciones del mercado y las necesidades de los clientes.',
    Icon: () => <Icons.Flexibility className='w-auto h-full' />
  },
  {
    heading: 'Aprendizaje Continuo',
    description: 'Fomentamos una cultura de aprendizaje y mejora continua en toda la organización.',
    Icon: () => <Icons.Learning className='w-auto h-full' />
  },
  {
    heading: 'Colaboración',
    description: 'Trabajamos en estrecha colaboración con los departamentos de compras de los clientes para comprender sus necesidades y superar desafíos juntos.',
    Icon: () => <Icons.Collaboration className='w-auto h-full' />
  }
] as const

export default function About () {
  return (
    <>
      <section className='max-w-7xl mx-auto lg:flex lg:items-center space-y-8 lg:space-y-0 py-12 lg:py-0'>
        <div className='max-w-md px-4 lg:px-6 mx-auto z-10 lg:pt-0 lg:pb-24'>
          <div className='space-y-4 lg:space-y-6'>
            <div className='font-primary space-y-4 lg:space-y-6 text-center lg:text-left'>
              <Balancer as='h1' className='text-h1'>
                Lorem ipsum dolor, sit amet consectetur
              </Balancer>
              <Balancer as='p' className='text-hp1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magni reprehenderit error, quo nulla quia asperiores doloremque iste.
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
            alt='ACO74 hero image'
            className='relative w-full h-auto px-4 lg:pr-6 lg:pt-8 lg:pb-24'
            width={915.8208}
            height={840}
          />
        </div>
      </section>
      <section className='bg-muted'>
        <div className='max-w-7xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-8 md:space-y-16'>
          <div className='text-center space-y-3 sm:space-y-6'>
            <Balancer as='h2' className='mx-auto'>
              <span className='text-h2'>
                Acerca de nosotros
              </span>
            </Balancer>
            <Balancer as='p' className='text-hp2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, deleniti maiores ut
              porro nesciunt quibusdam, laudantium quos necessitatibus quod veniam, culpa distinctio
              consequuntur modi et praesentium voluptates beatae tenetur eligendi.
            </Balancer>
          </div>
          <div className='space-y-8 md:space-y-12'>
            <article className='space-y-8 md:flex md:gap-x-24 md:items-center md:space-y-0'>
              <div className='md:w-2/3'>
                <Image
                  src='/images/building-machinary.svg'
                  alt='Nosotros'
                  width={1260}
                  height={860}
                  className='w-full h-auto rounded-xl'
                />
              </div>
              <div className='md:w-1/3 space-y-3 md:space-y-8'>
                {aboutUs.map((about, key) => {
                  return (
                    <div className='space-y-3 md:space-y-4 text-center md:text-left' key={key}>
                      <Balancer as='h3' className='text-h3'>
                        {about.heading}
                      </Balancer>
                      <Balancer as='p' className='text-p'>
                        {about.description}
                      </Balancer>
                    </div>
                  )
                })}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className='overflow-hidden border-y'>
        <div className='max-w-7xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-12 sm:space-y-16'>
          <div className='text-center space-y-3 sm:space-y-6'>
            <Balancer as='h2' className='mx-auto'>
              <span className='text-h2'>
                Nuestros valores
              </span>
            </Balancer>
            <Balancer as='p' className='text-hp2 sm:px-16'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, laborum quidem! Tempora,
              porro voluptas excepturi, nulla mollitia ex ut voluptatibus eveniet minus hic corrupti! Dicta,
              illo? Laborum nulla tenetur expedita.
            </Balancer>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 px-4 sm:px-0'>
            {values.map((value, key) => (
              <div className='flex flex-col items-center gap-y-2 text-center' key={key}>
                <div className='w-fit h-10 sm:h-12'>
                  <value.Icon />
                </div>
                <Balancer as='h3' className='text-h3'>
                  {value.heading}
                </Balancer>
                <Balancer as='p' className='text-p'>
                  {value.description}
                </Balancer>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-muted'>
        <div className='max-w-3xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-4 sm:space-y-6'>
          <div className='text-center space-y-3 sm:space-y-6'>
            <Balancer as='h2' className='mx-auto'>
              <span className='text-h2'>
                Nuestra historia
              </span>
            </Balancer>
          </div>
          <Balancer as='div' className='text-hp2 text-center space-y-4 sm:space-y-6 px-6'>
            <p>
              Hace 3 años, surgió una empresa comercializadora de productos tangibles llamada "ACO 74". Su enfoque era
              simple pero efectivo: proporcionar a clientes locales, productos de alta calidad a precios competitivos.
            </p>
            <p>
              Al principio se centraron en establecer relaciones sólidas con proveedores confiables que compartieran su
              compromiso con productos de primera calidad, y esto les permitió atraer a más clientes y expandir su negocio.
            </p>
            <p>
              Con el tiempo, la reputación de "ACO 74" creció en la comunidad local y más allá. La empresa amplió su oferta
              de productos para incluir una variedad de insumos esenciales en empresas de diversos giros.
            </p>
            <p>
              Actualmente, la empresa continúa siendo una comercializadora que atiende a una amplia gama de clientes en su región.
              Su historia es un recordatorio de que el compromiso con la calidad y la transparencia en los negocios puede llevar
              al éxito sostenible en el mundo de los productos tangibles.
            </p>
          </Balancer>
        </div>
      </section>
    </>
  )
}
