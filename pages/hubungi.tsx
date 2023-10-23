import { getBootCsr } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Loading from "./Loading";

const Index: NextPage = () => {
  const { profil: profilData, produk, solusi, isLoading } = getBootCsr();
  if (isLoading) {
    return <Loading />
  }

  const profil = profilData.data;
  const sendData = {
    profil: profil,
    produk: produk.data,
    solusi: solusi.data,
  }

  return (
    <>
      <Head>
        <title>Onebox - Hubungi</title>
      </Head>
      <Navbar {...sendData} />

      <section className="atas-wrapper bg-soft-primary">
        <div className="container pt-10 pb-7 pt-md-10 pb-md-10 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <h1 className="display-1 mb-3">Hubungi Kami</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-lex justify-content-center">
                  <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Hubungi Kami</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container py-14 py-md-6">
          <div className="row">
            <div className="col-md-10 col-xl-10 col-xxl-10 mx-auto">
              <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-9 mx-auto text-center">
                <div className="tt-el-caption mt-5 mb-2">
                  <h4 className="display-7">Lengkapi informasi di bawah, tim kami akan segera menghubungi untuk memberikan <span>solusi yang tepat untuk bisnis Anda</span></h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 cardsam">
                  <div className="contact">
                    <div className="info-box ">
                      <Link href="mailto:contact@interestedu.com" target="_blank" title="Email">
                        <i className="bx bx-envelope"></i>
                        <h3>Email</h3>
                        <p>{profil[0]?.Email}</p>
                      </Link>
                    </div>
                    <div className="info-box ">
                      <i className="bx bx-phone-call"></i>
                      <h3>Telepon</h3>
                      <p><Link href={`https://wa.me/${profil[0]?.Telp}?text=Halo Tim Onebox, Saya ingin mengajukan beberapa pertanyaan`} target="_blank" title="Telepon">{profil[0]?.Telp}</Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <form className="contact-form needs-validation" method="post" action="/" noValidate>
                    <div className="messages"></div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form">
                          <label htmlFor="fname">Nama</label>
                          <input type="text" id="fname" name="nama" placeholder="Nama Lengkap" />

                          <label htmlFor="lname">Email Resmi</label>
                          <input type="text" id="lname" name="email" placeholder="Email Kantor / Email Utama" />

                          <label htmlFor="fname">Subjek</label>
                          <input type="text" id="fname" name="subjek" placeholder="Subjek" />

                          <label htmlFor="lname">Isi</label>
                          <textarea placeholder="Contoh Format Pesan &#10;     1. Nama Perusahaan &#10;     2. Jabatan &#10;     3. No Hp/ wa &#10;     4. Jumlah Karyawan&#10;     5. Bagaimana anda menemukan info tentang kami? &#10;     6. Pesan &#10;" name="pesan"></textarea>


                          <div className="d-flex justify-content-center justify-content-lg-start mb-4 mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200">
                            <button className="feature-button" id="submit" type="submit">Kirim</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >

      <Footer {...sendData} />
    </>
  )
}

export default Index;