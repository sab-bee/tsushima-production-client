
import { useParts } from '../hooks/useParts';


const Footer = () => {
  const { parts, isLoading } = useParts(2)
  if (isLoading) return
  return (
    <div className='bg-indigo-50'>
      <div className='w-4/5 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 border-t p-12 gap-y-5'>
          <div>
            <h2 className='font-medium mb-5'>Resources</h2>
            <p>dribble</p>
            <p>figma</p>
            <p>themeforest</p>
          </div>
          <div>
            <h2 className='font-medium mb-5'>NEWS</h2>
            <p>Upcoming product</p>
            <p>Top sells</p>
            <p>Customers favourite</p>
          </div>
          <div>
            <h2 className='font-medium mb-5'>PARTNERS</h2>
            <p>Yami aluminium</p>
            <p>Newyork freak</p>
            <p>Panxo tech</p>
          </div>
          <div className='md:col-span-3 xl:col-span-2'>
            <h2 className='font-medium text-center mb-5'>FETURED PRODUCT</h2>
            <div className='space-y-8'>
              {
                parts.map((part) => < Featured key={part._id} part={part} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Featured({ part }) {
  const { name, description } = part
  return (<div>
    <div className='cols-span-2'>
      <p className='font-medium'>{name}</p>
      <p>{description}</p>
    </div>

  </div>)
}

export default Footer;