import { listArtikel } from "@/templates/Api/PortalController";
import ListArtikelTemp from "@/templates/ListArtikel/ListArtikelTemp";
import { NextPage } from "next";
import Head from "next/head";
import Loading from "./Loading";
import Navbar from "@/templates/Components/Navbar";
import Footer from "@/templates/Components/Footer";

const Index: NextPage = () => {
  const { profil, produk, solusi, isLoading, artikel } = listArtikel();
  if (isLoading) {
    return <Loading />
  }

  const sendData = {
    profil: profil.data,
    produk: produk.data,
    solusi: solusi.data,
    artikel: artikel.data
  }

  return (
    <>
      <Head>
        <title>Onebox - Artikel</title>
      </Head>
      <Navbar {...sendData} />
      <ListArtikelTemp {...sendData} />
      <Footer {...sendData} />
    </>
  )
}

export default Index;