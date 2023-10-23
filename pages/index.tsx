import { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/templates/HomePage/HomePage";
import { home } from "@/templates/Api/PortalController";
import Loading from "./Loading";
import Navbar from "@/templates/Components/Navbar";
import Footer from "@/templates/Components/Footer";

const Index: NextPage = () => {
  const { profil, produk, solusi, slider, artikel, artikel1, modul_exp, isLoading } = home();

  if(isLoading){
    return <Loading />
  }

  const sendData = {
    profil: profil.data,
    produk: produk.data,
    solusi: solusi.data,
    slider: slider.data,
    artikel: artikel.data,
    artikel1: artikel1.data,
    modul_exp: modul_exp.data,
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Navbar {...sendData} />
      <HomePage {...sendData} />
      <Footer {...sendData} />
    </>
  );
};

export default Index;