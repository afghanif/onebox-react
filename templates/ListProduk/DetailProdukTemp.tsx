import Link from 'next/link'
import React from 'react'

export default function DetailProdukTemp({ profil, detailProduk, galeri, parents }: any) {
  return (
    <>
      <section className="contact-wrapper position-relative min-vh-70 d-lg-flex align-items-center">
        <div className="container pt-3 pt-md-11">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 position-relative mt-0 order-lg-2">
              <div className="overlap-grid overlap-grid-2">
                <img src={`https://cms.ciptadrasoft.com/upload/${detailProduk[0]?.lampiran}`} alt="" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="margin-tab col-lg-6">
              <div className="tt-el-caption">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                    <li className="breadcrumb-item"><Link href="#" title="Produk">Produk</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{detailProduk[0]?.sumber_informasi.replace(/(<([^>]+)>)/gi, "")}</li>
                  </ol>
                </nav>
                <h1 className="display-2 m-0"><span style={{ color: "#3a9dc2" }}>{detailProduk[0]?.sumber_informasi.replace(/(<([^>]+)>)/gi, "")}</span></h1>
                <h1 className="display-2 mb-0 mx-sm-n2 mx-md-0">{detailProduk[0]?.title.replace(/(<([^>]+)>)/gi, "")}</h1>
              </div>
              {detailProduk[0]?.content.replace(/(<([^>]+)>)/gi, "")}
            </div>
          </div>
        </div>
      </section>

      {parents && parents.map((item: any, i: number) =>
        <section className="manfaatprod-wrapper bg-light" key={i}>
          <div className="container py-2 py-md-13">
            <div className="row justify-content-between">
              <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-9 mx-auto text-center">
                <div className="tt-el-caption text-center">
                  <h4 className="display-7 mb-3">Kanal Layanan yang terintegrasi</h4>
                  <h2 className="display-4 text-center mb-0">Kanal layanan yang dapat diintegrasikan Telepon, Email , Facebook, Twitter (X), Instagram, Whatsapp , Website, Youtube, Play Store, Google Review dan beberapa market place lainnya</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={`https://cms.ciptadrasoft.com/upload/${item.lampiran.replace(/(<([^>]+)>)/gi, "")}`} alt="integrasi" />
              </div>
              <div className="col-lg-5">
                <div className="ttt-el-caption text-left mb-3">
                  <h3>{item.title.replace(/(<([^>]+)>)/gi, "")}</h3>
                </div>
                <div className="manfaat-produk">
                  {item.content.replace(/(<([^>]+)>)/gi, "")}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="keyscreen-wrapper mt-8">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-11 col-xl-11 col-xxl-11 mx-auto">
              <div className="tt-el-caption text-center">
                <h4 className="display-7">Memudahkan dalam mengelola<span> interaksi pelanggan</span> di berbagai channel</h4>
              </div>
              <div className="row">
                {galeri && galeri.map((item: any, i: number) =>
                  <div className="col-lg-4 mb-3" key={i}>
                    <div className="lift rounded">
                      <figure className="overlay overlay-1 hover-scale rounded">
                        <Link href={`https://cms.ciptadrasoft.com/upload/externalLogo/${item.ImageMenu.replace(/(<([^>]+)>)/gi, "")}`} data-glightbox data-gallery="gallery-image"><img src={`https://cms.ciptadrasoft.com/upload/externalLogo/${item.ImageMenu.replace(/(<([^>]+)>)/gi, "")}`} srcSet={`https://cms.ciptadrasoft.com/upload/externalLogo/${item.ImageMenu.replace(/(<([^>]+)>)/gi, "")}`} alt="" /></Link>
                      </figure>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-prom wrapper" style={{ background: "#F2F4F7" }}>
        <div className="container py-md-2">
          <div className="row align-items-center">
            <div className="card-pad container py-md-2">
              <div className="card-solusi">
                <h5>Onebox : Contact Center Omnichanel</h5>
                <p>Diskusikan dengan tim kami untuk memberikan solusi yang tepat untuk bisnis Anda</p>

                <div className="justify-content-center justify-content-lg-start mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200">
                  <Link className="feature-button" href={`https://wa.me/${profil[0].telp}?text=Halo Tim Onebox, Saya ingin mengajukan beberapa pertanyaan` }target="_blank">Hubungi Whatsapp Kami</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
