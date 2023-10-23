import { getBootCsr } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Loading from "./Loading";
import ListKasusTemp from "@/templates/ListKasus/ListKasusTemp";

const Index: NextPage = () => {
  const { profil, produk, solusi, isLoading } = getBootCsr();

  if (isLoading) {
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

      <ListKasusTemp solusi={solusi.data} />

      <Footer {...sendData} />
    </>
  )
}

export default Index;