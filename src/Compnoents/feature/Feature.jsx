import { AiFillCheckSquare} from 'react-icons/ai';
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div className=''>
           <p className='flex items-center '>
             <AiFillCheckSquare className='text-rose-300 mr-2 '>
                </AiFillCheckSquare>{feature}</p>
            
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.object
}
export default Feature;