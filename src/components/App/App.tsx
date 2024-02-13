import { useEffect } from 'react';

import Loader from 'components/Loader';
import { GithubCorner, GithubStarButton } from 'components/Github';
import Recruiter from 'components/Recruiter';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Cart from 'components/Cart';

import { useProducts } from 'contexts/products-context';

import * as S from './style';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container data-cy="grid">
      {isFetching && <Loader />}
      <GithubCorner />
      <Recruiter />
      <S.TwoColumnGrid data-cy="grid2">
        <S.Side>
          <Filter />
          <GithubStarButton />
        </S.Side>
        <S.Main data-cy="grid3">
          <S.MainHeader>
            <p><span className='count' data-cy="counter">{products?.length}</span> Product(s) found</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
    </S.Container>
  );
}

export default App;
