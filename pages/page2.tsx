import { getBootCsr } from '@/templates/Api/PortalController';
import Link from 'next/link';
import Loading from './Loading';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/templates/Components/Navbar';
import Footer from '@/templates/Components/Footer';

const Index: NextPage = () => {
  const { profil, produk, solusi, isLoading } = getBootCsr();

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Page2</title>
      </Head>
      <Navbar profil={profil.data} produk={produk.data} solusi={solusi.data} />
      
      <Footer profil={profil.data} produk={produk.data} solusi={solusi.data} />
    </>
  );
};

export default Index;
