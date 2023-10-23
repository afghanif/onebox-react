import Script from 'next/script'
import React from 'react'
import Link from 'next/link'

export default function PartnershipTemp() {
  return (
    <>
      {/* <!-- /header --> */}
      <section className="partner-wrapper bg-soft-primary">
        <div className="container pt-10 pb-7 pt-md-10 pb-md-10 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <h1 className="display-1 mb-3">Menjadi Partner</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                  <li className="breadcrumb-item"><a>Menjadi Partner</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /header --> */}

      {/* <!-- section --> */}
      <section className="partnerr-wrapper bg-light">
        <div className="container py-14 py-md-13">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="tt-el-caption text-left mb-3">
                <h3>Permintaan untuk <strong>Kemitraan Bisnis</strong> dengan Onebox</h3>
              </div>
              <img src="/img/illustrations/partnership2.webp" alt="partnership" className="foto-partnership" />
            </div>
            <div className="col-lg-5">
              <form className="contact-form needs-validation" id="theForm" method="post" action="/partner" noValidate>
                {/* <input type="hidden" name="token" value="{{$token}}"> */}
                <input type="hidden" name="subject" className="form-control" value="permintaan kemitraan" placeholder="permintaan kemitraan" />
                <div className="messages"></div>
                <div className="form-floating mb-4">
                  <input id="validationDefaultUsername" type="text" name="fullName" className="form-control" placeholder="budi" required />
                  <label htmlFor="validationDefaultUsername">Nama Anda</label>
                  <div className="valid-feedback">
                    Kelihatan baik!
                  </div>
                  <div className="invalid-feedback">
                    Masukan Nama Anda.
                  </div>
                </div>
                <div className="form-floating mb-4">
                  <input id="form_lastname" type="text" name="perusahaan" className="form-control" placeholder="Doe" required />
                  <label htmlFor="form_lastname">Nama Perusahaan</label>
                  <div className="valid-feedback">
                    Kelihatan baik!
                  </div>
                  <div className="invalid-feedback">
                    Masukan Nama Perusahaan Anda.
                  </div>
                </div>
                <div className="form-floating mb-4">
                  <input id="form_lastname" type="text" name="jabatan" className="form-control" placeholder="Doe" required />
                  <label htmlFor="form_lastname">Jabatan</label>
                  <div className="valid-feedback">
                    Kelihatan baik!
                  </div>
                  <div className="invalid-feedback">
                    Masukan Jabatan Anda.
                  </div>
                </div>
                <div className="form-select-wrapper mb-4">
                  <select className="form-select" id="form-select" name="category" required>
                    <option selected disabled value="">Jenis Perusahaan</option>
                    <option value="BPO (Business Process Outsourcing)">BPO (Business Process Outsourcing)</option>
                    <option value="Penyedia Jasa (Software, Hardware IT)">Penyedia Jasa (Software, Hardware IT)</option>
                    <option value="Komunitas">Komunitas</option>
                    <option value="Agensi">Agensi</option>
                    <option value="Jenis Perusahaan Lainnya">Jenis Perusahaan Lainnya</option>
                  </select>
                  <div className="valid-feedback">
                    Kelihatan baik!
                  </div>
                  <div className="invalid-feedback">
                    Tolong Masukan Kategori.
                  </div>
                </div>
                <div className="form-floating mb-4">
                  <input id="form_lastname" type="text" name="nohp" className="form-control" placeholder="Doe" required />
                  <label htmlFor="form_lastname">Nomor Telepon</label>
                  <div className="valid-feedback">
                    Kelihatan baik!
                  </div>
                  <div className="invalid-feedback">
                    Tolong Masukan Nomor Anda.
                  </div>
                </div>
                <div className="form-floating mb-4">
                  <input id="form_email" type="email" name="contact" className="form-control" placeholder="jane.doe@example.com" required />
                  <label htmlFor="form_email">Email *</label>
                  <div className="valid-feedback">
                    Kelihatan baik!
                  </div>
                  <div className="invalid-feedback">
                    Tolong Masukan Email Anda.
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-lg-start mb-4 mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200">
                  <button className="feature-button" type="submit">Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section >
      {/* <!-- /section --> */}

      <section className="partnerr-wrapper bg-light">
        <div className="container py-5 py-md-13">
          <div className="tt-el-caption text-center mb-10">
            <h3>Manfaat <strong>Bermitra</strong> dengan Onebox</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card-mitra">
                <img src="/img/illustrations/group.webp" alt="" />
                  <p>Meningkatkan kepuasan klien dengan akses ke teknologi terbaik</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-mitra">
                <img src="/img/illustrations/suitcase.webp" alt="" />
                  <p>Banyak profil pelanggan untuk perluas penawaran produk dan layanan</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-mitra">
                <img src="/img/illustrations/invoice.webp" alt="" />
                  <p>Menghasilkan pendapatan tambahan dan meningkatkan basis pertumbuhan penggunaa</p>
              </div>
            </div>

          </div>

          <div className="card-solusi mt-10">
            <h5>Siap untuk bermitra bersama Onebox?</h5>
            <p>Diskusikan dengan tim kami untuk memberikan solusi yang tepat untuk bisnis Anda</p>

            <div className="justify-content-center justify-content-lg-start mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200" data-disabled="true">
              <a className="feature-button" data-cue="slideInDown" data-group="page-title-buttons" data-delay="200" data-show="true" style={{ animationName: "slideInDown", animationDuration: "700ms", animationTimingFunction: "ease", animationDelay: "200ms", animationDirection: "normal", animationFillMode: "both"}}>Daftar Sekarang</a>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
