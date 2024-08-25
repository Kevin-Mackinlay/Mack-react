import { motion } from 'framer-motion';
import iphone14 from '../../assets/iphone14.png';

const servicesData = [
  {
    id: 1,
    image: iphone14,

    title: 'Iphone 14 Pro Max',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: iphone14,

    title: 'Iphone 14 Pro Max',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    image: iphone14,

    title: 'Iphone 14 Pro Max',
    subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* {header section} */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          High-Quality Camera <span className="text-primary">and Operating System</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          {' '}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quae expedita ducimus omnis illum ea cupiditate dicta natus possimus laudantium id, accusantium incidunt. Cumque dicta animi neque vel porro delectus!
        </motion.p>
      </div>
      {/* {card section} */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 ">
        {servicesData.map((service) => (
          <div key={service.id} className='text-center p-4 space-y-6 '>
            <img src={service.image} alt={service.image} className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
            <div className="space-y-2 ">
              <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
              <p className='text-darkGray '>{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
