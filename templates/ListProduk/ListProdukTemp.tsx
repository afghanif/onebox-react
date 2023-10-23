import React from 'react'
import Link from 'next/link'

export default function ListProdukTemp({produk}:any) {
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
                    <li className="breadcrumb-item active" aria-current="page">Produk</li>
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
              <Link href={`/detail-produk/${produk[11]?.slug_title}/${produk[11]?.content_id}`} title="Contact Center" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-headphone"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[11]?.sumber_informasi}</h4>
                    <p>Semua Channel layanan dalam satu layar, sehingga
                      lebih mudah, praktis, cepat dan terukur. </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[8]?.slug_title}/${produk[8]?.content_id}`} title="Customer Feedback" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-conversation"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[8]?.sumber_informasi}</h4>
                    <p>Mengukur tingkat kepuasan pelanggan untuk
                      optimalisasi layanan</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[9]?.slug_title}/${produk[9]?.content_id}`} title="Task Manajemen" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-task"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[9]?.sumber_informasi}</h4>
                    <p>Memonitor pekerjaan, kolaborasi unit terkait dan
                      terintegrasi dengan core system</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[10]?.slug_title}/${produk[10]?.content_id}`} title="Customer Relationship" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-link"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[10]?.sumber_informasi}</h4>
                    <p>Akuisisi prospek lebih hemat, mempertahankan dan
                      meningkatkan layanan pelanggan </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[5]?.slug_title}/${produk[5]?.content_id}`} title="Customer Portal" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-globe"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[5]?.sumber_informasi}</h4>
                    <p>Menjadi sumber informasi yang menimbulkan persepsi
                      calon customer</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[6]?.slug_title}/${produk[6]?.content_id}`} title="Customer Mobile" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-mobile-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[6]?.sumber_informasi}</h4>
                    <p>Memudahkan untuk informasi dan layanan kepada
                      customer melalui mobile</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[7]?.slug_title}/${produk[7]?.content_id}`} title="API Social Media" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bxl-instagram-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[7]?.sumber_informasi}</h4>
                    <p>Onebox sebagai penyedia API, dapatkan kemudahan
                      integrasi dengan sosial media populer </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[4]?.slug_title}/${produk[4]?.content_id}`} title="Prospek Manajemen" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-shape-square"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[4]?.sumber_informasi}</h4>
                    <p>Memonitor produktivitas dan aktifitas sales, proyeksi
                      penjualan, pipeline dan laporan penjualan</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[1]?.slug_title}/${produk[1]?.content_id}`} title="Media Monitoring" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-desktop"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[1]?.sumber_informasi}</h4>
                    <p>Mengumpulkan informasi dari berbagai sumber untuk
                      laporan sentimen dan issue yang trending </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[2]?.slug_title}/${produk[2]?.content_id}`} title="Chat Bot" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-bot"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[2]?.sumber_informasi}</h4>
                    <p>Dapat terintegrasi dengan database dan fungsi yang
                      berjalan untuk layanan pelanggan dan penjualan </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[3]?.slug_title}/${produk[3]?.content_id}`} title="Broadcast" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-broadcast"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[3]?.sumber_informasi}</h4>
                    <p>Kebutuhan pada billing, marketing, konfirmasi,
                      reminder, survey, sapa salam, motivasi dan lainnya</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href={`/detail-produk/${produk[0]?.slug_title}/${produk[0]?.content_id}`} title="Sistem Antrian" className=" hover">
                <div className="d-flex flex-row card-list">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-primary me-4">
                      <i className="bx bx-menu-alt-left"></i>
                    </div>
                  </div>
                  <div>
                    <h4>{produk[0]?.sumber_informasi}</h4>
                    <p>Memudahkan dan mempercepat antrian pelayanan,
                      database layanan (terintegrasi dengan contact
                      center)</p>
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
