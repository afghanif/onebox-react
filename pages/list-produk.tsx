import { getBootCsr } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import ListProdukTemp from "@/templates/ListProduk/ListProdukTemp";
import { NextPage } from "next";
import Head from "next/head";
import Loading from "./Loading";

const Index: NextPage = () => {
  const { profil, produk, solusi, isLoading} = getBootCsr();

  if(isLoading){
    return <Loading />
  }

  const sendData = {
    profil: profil.data, 
    produk: produk.data, 
    solusi: solusi.data
  }

  return (
    <>
      <Head>
        <title>Onebox - Produk Omnichanel</title>
      </Head>
      <Navbar {...sendData} />

      <ListProdukTemp produk={produk.data} />

      <Footer {...sendData} />
    </>
  )
}

export default Index;