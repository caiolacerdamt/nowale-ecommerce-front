import {RevealWrapper} from 'next-reveal'
import ProductBox from './ProductBox';

export default function ProductsGrid({products,wishedProducts=[]}) {
    return (
      <div 
      className="grid grid-cols-2 gap-[20px] min-[768px]:grid-cols-4" 
      interval={100}>
        {products?.length > 0 && products.map((product,index) => (
          <RevealWrapper key={product._id} delay={index*50}>
            <ProductBox {...product}
                        wished={wishedProducts.includes(product._id)} />
          </RevealWrapper>
        ))}
      </div>
    );
  }