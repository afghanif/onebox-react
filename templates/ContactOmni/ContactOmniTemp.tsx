import React from 'react'
import Link from 'next/link'

export default function ContactOmniTemp() {
  return (
    <>
      <section className="contact-wrapper position-relative min-vh-70 d-lg-flex align-items-center">
        <div className="container pt-3 pt-md-11">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 position-relative mt-0 order-lg-2">
              <img src="/img/illustrations/gambar marsel/prospect.webp" alt="omnichannel" />
            </div>
            <div className="col-lg-6">
              <div className="tt-el-caption">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                    <li className="breadcrumb-item"><Link href="#" title="Produk">Produk</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact Center</li>
                  </ol>
                </nav>
                <h1 className="display-2 m-0"><span style={{ color: "#3a9dc2" }}>Contact Center</span></h1>
                <h1 className="display-2 mb-0 mx-sm-n2 mx-md-0 mt-1">Solusi Layanan Publik Omnichannel</h1>
              </div>
              <p className="mb-4">Satu solusi untuk melayani informasi dan pengaduan publik dari semua channel berup telepon, Whatsapp, Media Sosial, Play Store, Google Review dan channel lainnya dalam satu layar platform yang terintegrasi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="manfaatprod-wrapper bg-light">
        <div className="container py-2 py-md-13">
          <div className="row justify-content-between">
            <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-9 mx-auto text-center">
              <div className="tt-el-caption text-center mb-1">
                <h2 className="display-4 text-center mb-0">Optimalkan produktivitas dengan interaksi yang cepat dan mudah. Onebox
                  memungkinkan dalam mempersonalisasi pengalaman pelanggan, membangun
                  loyalitas, dan pendapatan.</h2>
              </div>
            </div>

            <section className="benefit-wrapper mt-10 mb-12" id="demos">
              <div className="container">
                <div className="row mb-8">
                  <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-9 mx-auto text-center">
                    <div className="tt-el-caption">
                      <h2 className="display-4 mb-3 text-center">Manfaat</h2>
                      <h4 className="display-7">Solusi Omnichannel untuk membangun <span>loyalitas pelanggan </span>dalam satu layar</h4>
                    </div>
                  </div>
                </div>
                <div className="benefit-sec">
                  <div className="row service-group">
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/service.webp" alt="layanan" data-width="37px" loading="lazy" />
                        </div>
                        <p>
                          Melayani <strong>lebih baik</strong>, bekerja <strong>lebih cepat </strong>dan mudah
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/feedback.webp" alt="feedback" data-width="40px" loading="lazy" />
                        </div>
                        <p>
                          Feedback pelanggan, Peta masalah, dan layanan <strong>lebih terukur</strong>
                        </p>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/layar.webp" alt="kanal" data-width="50px" loading="lazy" />
                        </div>
                        <p>
                          Melayani semua kanal dalam <strong>satu layar</strong>
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/kinerja.webp" alt="kinerja" data-width="50px" loading="lazy" />
                        </div>
                        <p>
                          Kinerja agen, unit layanan lebih terukur untuk <strong>meningkatkan produktivitas</strong>
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/diluar.webp" alt="operasional" data-width="50px" loading="lazy" />
                        </div>
                        <p>
                          Operasional layanan <strong>lebih hemat </strong>dan dapat <strong>bekerja diluar kantor</strong>
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/profil=0p-pp.webp" alt="profile" data-width="50px" loading="lazy" />
                        </div>
                        <p>
                          Lebih mengenali <strong>profile </strong>dan <strong>riwayat pelanggan</strong>
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/integrasi.webp" alt="integrasi" data-width="50px" loading="lazy" />
                        </div>
                        <p>
                          <strong>Terintegrasi</strong> dengan knowledge, profile pelanggan, dan task manajemen
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                      <div className="tt-el-service">
                        <div className="icon-layanan">
                          <img src="/img/icons/branding.webp" alt="branding" data-width="50px" loading="lazy" />
                        </div>
                        <p>
                          Membantu <strong>bisnis bertumbuh </strong>dalam layanan, branding dan penjualan
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className="foto-produk mb-10">
              <div className="container">
                <div className="row">
                  <div className="img-produk">
                    <img src="/img/illustrations/screen-img.webp" alt="onebox" style={{ width: "100%" }} loading="lazy" />
                  </div>
                </div>
              </div>
            </section>

            <section className="dashboard mt-10" style={{ backgroundColor: "#469bbb17", padding: "40px 20px" }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="/img/illustrations/gambar marsel/prospect.webp" alt="integrasi" />
                  </div>
                  <div className="col-lg-5">
                    <div className="ttt-el-caption text-left mb-3">
                      <h3>Manfaat Produk</h3>
                    </div>
                    <div className="manfaat-produk">
                      <div className="d-flex flex-row mb-3">
                        <div>
                          <span className="icon btn btn-circle btn-soft-primary disabled me-2"><span className="number fs-18">1</span></span>
                        </div>
                        <div>
                          <p className="mb-0">Meningkatkan tingkat layanan (response time dan resolution time)</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <div>
                          <span className="icon btn btn-circle btn-soft-primary disabled me-2"><span className="number fs-18">2</span></span>
                        </div>
                        <div>
                          <p className="mb-0">Melihat aktivitas dan produktivitas agent</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <div>
                          <span className="icon btn btn-circle btn-soft-primary disabled me-2"><span className="number fs-18">3</span></span>
                        </div>
                        <div>
                          <p className="mb-0">Pemetaan dan penyelesaian masalah berdasarkan kanal, kategori masalah, produk,unit kerja, dan wilayah</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="dashboard mt-10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="ttt-el-caption text-left mb-3">
                      <h3>Manfaat Produk</h3>
                    </div>
                    <div className="manfaat-produk">
                      <div className="d-flex flex-row mb-3">
                        <div>
                          <span className="icon btn btn-circle btn-soft-primary disabled me-2"><span className="number fs-18">1</span></span>
                        </div>
                        <div>
                          <p className="mb-0">Menangani ticket dari berbagai channel dalam satu screen</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <div>
                          <span className="icon btn btn-circle btn-soft-primary disabled me-2"><span className="number fs-18">2</span></span>
                        </div>
                        <div>
                          <p className="mb-0">Terintegrasi dengan data pelanggan, core system, informasi produk dan layanan lainnya</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row mb-3">
                        <div>
                          <span className="icon btn btn-circle btn-soft-primary disabled me-2"><span className="number fs-18">3</span></span>
                        </div>
                        <div>
                          <p className="mb-0">Kemudahan eskalasi, kolaborasi dengan unit lain dalam melakukan penyelesaian layanan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src="/img/illustrations/gambar marsel/prospect.webp" alt="integrasi" />
                  </div>

                </div>
              </div>
            </section>
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
                  <Link className="feature-button" href="https://wa.me/081617262533?text=Halo Tim Onebox, Saya ingin mengajukan beberapa pertanyaan" target="_blank" title="Hubungi Onebox">Hubungi Whatsapp Kami</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
