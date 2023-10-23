import React from 'react'
import Link from 'next/link'

export default function DetailSolusiTemp({ profil, detailSolusi, portotele }: any) {
  return (
    <>
      <section className="contact-wrapper position-relative min-vh-70 d-lg-flex align-items-center">
        <div className="container pt-3 pt-md-11">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 position-relative mt-0 order-lg-2">
              <div className="overlap-grid overlap-grid-2">
                <img src={`https://cms.ciptadrasoft.com/upload/${detailSolusi[0]?.lampiran}`} alt="" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="margin-tab col-lg-6">
              <div className="tt-el-caption">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                    <li className="breadcrumb-item"><Link href="#" title="Studi Kasus">Studi Kasus</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{detailSolusi[0]?.Category.replace(/(<([^>]+)>)/gi, "")}</li>
                  </ol>
                </nav>
                <h1 className="display-2 m-0"><span style={{ color: "#3a9dc2" }}>{detailSolusi[0]?.Category.replace(/(<([^>]+)>)/gi, "")}</span></h1>
                <h1 className="display-2 mb-0 mx-sm-n2 mx-md-0">{detailSolusi[0]?.title.replace(/(<([^>]+)>)/gi, "")}</h1>
              </div>
              {detailSolusi[0]?.content.replace(/(<([^>]+)>)/gi, "")}
            </div>
          </div>
        </div>
      </section>

      <section className="untung-wrapper bg-light position-relative d-lg-flex align-items-center mt-10">
        <div className="container">
          <div className="tt-el-caption text-center">
            <h4 className="display-7">Portofolio Studi Kasus<span> Onebox</span>
            </h4>
          </div>
          <div className="row">
            {portotele && portotele.map((item: any, i: number) =>
              <div className="col-lg-3 mb-3 portof" key={i}>
                <figure className="overlay overlay-1 hover-scale rounded">
                  <Link href={`https://cms.ciptadrasoft.com/upload/externalLogo/${item.ImageMenu.replace(/(<([^>]+)>)/gi, "")}`} data-glightbox data-gallery="gallery-image"><img src={`https://cms.ciptadrasoft.com/upload/externalLogo/${item.ImageMenu.replace(/(<([^>]+)>)/gi, "")}`} srcSet={`https://cms.ciptadrasoft.com/upload/externalLogo/${item.ImageMenu.replace(/(<([^>]+)>)/gi, "")}`} alt="" /></Link>
                </figure>
              </div>
            )}
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
                  <Link className="feature-button" href={`https://wa.me/${profil[0]?.telp}?text=Halo Tim Onebox, Saya ingin mengajukan beberapa pertanyaan`} target="_blank">Hubungi Whatsapp Kami</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
