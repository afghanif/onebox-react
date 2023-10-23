import Loading from "@/pages/Loading";
import { getDetailSolusi } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import DetailSolusiTemp from "@/templates/ListKasus/DetailSolusiTemp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { profil, produk, solusi, detailSolusi, portotele, isLoading } = getDetailSolusi(slug as string);
  
  if(isLoading){
    return <Loading />
  }

  const sendData = {
    profil: profil.data,
    produk: produk.data,
    solusi: solusi.data,
    detailSolusi: detailSolusi.data,
    portotele: portotele.data
  }

  return (
    <>
      <Head>
        <title>Onebox - Solusi</title>
      </Head>

      <Navbar {...sendData} />

      <DetailSolusiTemp {...sendData} />

      <Footer {...sendData} />
    </>
  )
}

export default Index;