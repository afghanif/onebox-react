import { getDetailArtikel } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import DetailArtikelTemp from "@/templates/ListArtikel/DetailArtikelTemp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Loading from "../Loading";

const Index: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const { profil, produk, solusi, isLoading, detailArtikel, site, artikelSlide } = getDetailArtikel(slug);

  if(isLoading){
    return <Loading />
  }

  const sendData = {
    profil: profil.data, 
    produk: produk.data, 
    solusi: solusi.data,
    detailArtikel: detailArtikel.data,
    site,
    artikelSlide: artikelSlide.data,
  }

  return (
    <>
      <Head>
        <title>Onebox - Artikel</title>
      </Head>

      <Navbar {...sendData} />

      <DetailArtikelTemp {...sendData} />

      <Footer {...sendData} />
    </>
  )
}

export default Index;