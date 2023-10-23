import Loading from "@/pages/Loading";
import { getDetailProduk } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import DetailProdukTemp from "@/templates/ListProduk/DetailProdukTemp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

const Index: NextPage = () => {
  const router = useRouter()
  const { slug, contentid } = router.query as { slug: string, contentid: string };

  const { profil, produk, solusi, detailProduk, galeri, parents, isLoading } = getDetailProduk(slug, contentid);
  
  if(isLoading){
    return <Loading />
  }

  const sendData = {
    profil: profil.data,
    produk: produk.data,
    solusi: solusi.data,
    detailProduk: detailProduk.data,
    galeri: galeri.data,
    parents: parents.data,
  }

  return (
    <>
      <Head>
        <title>Onebox - Solusi</title>
      </Head>

      <Navbar {...sendData} />

      <DetailProdukTemp {...sendData} />

      <Footer {...sendData} />
    </>
  )
}

export default Index;