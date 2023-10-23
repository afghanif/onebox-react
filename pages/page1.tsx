import { getBootCsr } from '@/templates/Api/PortalController';
import Link from 'next/link';
import Loading from './Loading';

const Page1 = () => {
  const { profil, produk, solusi, isLoading} = getBootCsr();

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h1>Page 1</h1>
      <Link href="/page2">Go to Page 2</Link>
      <pre>
        {JSON.stringify(profil.data)}
      </pre>
      <pre>
        {JSON.stringify(produk.data)}
      </pre>
      <pre>
        {JSON.stringify(solusi.data)}
      </pre>
    </div>
  );
};

export default Page1;
