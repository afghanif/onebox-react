import React from 'react'
import Link from 'next/link'

export default function ListKasusTemp({ solusi }: any) {
  return (
    <>
      <section className="contact-wrapper position-relative pt-2 d-lg-flex align-items-center">
        <div className="container">
          <div className="row mt-5 mb-5 align-items-center">
            <div className="col-lg-12">
              <div className="tt-el-caption">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Solusi</li>
                  </ol>
                </nav>
                <div className="titlee">
                  <h4 className="mb-0 text-primary" style={{ color: "#343f52 !important" }}>Solusi Omnichannel untuk membangun loyalitas pelanggan dalam satu layar</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manfaatprod-wrapper bg-light">
        <div className="container py-2 py-md-13">
          <div className="row gx-lg-8 gx-xl-12 gy-6 px-xl-5">

            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[6].slug_title}/${solusi[6].content_id}`} title="Telekomunikasi" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-headphone"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{solusi[6]?.Category}</h4>
                    <p>Handle pengaduan terhubung dengan data pelanggan,
                      billing serta otomasi work order.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[5]?.slug_title}/${solusi[5]?.content_id}`} title="Pemerintahan" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-building"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{solusi[5]?.Category}</h4>
                    <p>Integrasi dengan portal layanan publik untuk
                      memudahkan pengaduan dan aspirasi publik.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[0]?.slug_title}/${solusi[0]?.content_id}`} title="Rumah Sakit" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-clinic"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{solusi[0]?.['Category']}</h4>
                    <p>Kemudahan integrasi dengan data pasien, jadwal praktek dokter serta informasi produk dan layanan RS.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[3]?.slug_title}/${solusi[3]?.content_id}`} title="Fintech dan Asuransi" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-heart"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{solusi[3]?.Category}</h4>
                    <p>Integrasi data nasabah, survey, informasi simulasi
                      premi, interaksi & notifikasi via whatsapp business.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[2]?.slug_title}/${solusi[2]?.content_id}`} title="Retail" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-water"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{solusi[2]?.Category}</h4>
                    <p>Integrasi data pelanggan, eksternal system, dan
                      informasi billing via whatsapp bot.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[1]?.slug_title}/${solusi[1]?.content_id}`} title="Non-Profit Organization" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-cctv"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{solusi[1]?.Category}</h4>
                    <p>Sosialisasi program dimudahkan dengan whatsapp
                      business dan interaksi semua channel direspon dengan
                      cepat.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-solusi/${solusi[4]?.slug_title}/${solusi[4]?.content_id}`} title="Multilevel Marketing" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-buildings"></i>
                    </div>
                  </div>
                  <div>
                    <h3>{solusi[4]?.Category}</h3>
                    <p>Melayani pengaduan dan laporan pelanggan dari
                      berbagai channel.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
