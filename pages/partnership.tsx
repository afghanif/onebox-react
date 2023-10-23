import { getBootCsr } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import PartnershipTemp from "@/templates/Partnership/PartnershipTemp";
import { NextPage } from "next";
import Head from "next/head";
import Loading from "./Loading";

const Index: NextPage = (props: any) => {
  const { profil, produk, solusi, isLoading } = getBootCsr();
  if (isLoading) {
    return <Loading />
  }
  
  const sendData = {
    profil: profil.data,
    produk: produk.data,
    solusi: solusi.data,
  }

  return (
    <>
      <Head>
        <title>Onebox - Menjadi Partner</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <Navbar {...sendData} />
      <PartnershipTemp />
      <Footer {...sendData} />
    </>
  )
}

export default Index;