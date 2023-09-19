import PropTypes from 'prop-types';
import Feature from '../feature/Feature';

const Price = ({option}) => {
    const {name, price, features}=option;
   
    return (
    
          <div className='bg-amber-200 p-6 flex flex-col
         rounded-md text-green-500'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
                </h2>
                <h4 className='text-4xl'>{name}</h4>
               <div className='pl-6 flex-grow'>
               {
                    features.map((feature,index) => 
                    <Feature key={index} feature={feature}>
                        
                    </Feature>)
                }
               </div>
               <button className='hover:bg-red-300 mt-12 w-full py-2 rounded-lg 
               bg-green-300  text-purple-500 font-bold'>Buy now</button>
        </div>
      
    );
};
Price.propTypes={
    option:PropTypes.object
}
export default Price;