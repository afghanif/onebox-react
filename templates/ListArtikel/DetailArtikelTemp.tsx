import React from 'react'
import Link from 'next/link'

export default function DetailArtikelTemp({detailArtikel, profil, site, artikelSlide}: any) {
  return (
    <>
      <section className="detailb-wrapper bg-light">
        <div className="container py-14 py-md-12">
          <div className="row gx-lg-8 gx-xl-12">
            <div className="col-lg-8">
              <div className="blog single">
                <div className="card">
                  <h2 className="h1">{detailArtikel[0]?.title.replace(/(<([^>]+)>)/gi, "")}</h2>
                  <div className="aut">
                    <p className="author">Author</p>
                  </div>
                  <p className="date"> <i className="bx bx-calendar"></i> {detailArtikel[0].tgl_publish}</p>
                  <figure className="card-img-top"><img src={`https://cms.ciptadrasoft.com/upload/${detailArtikel[0]?.lampiran}`} alt="berita" /></figure>
                  <div className="card-body">
                    <div className="classic-view">
                      <article className="post">
                        <div className="post-content mb-5">
                          {detailArtikel[0]?.content.replace(/(<([^>]+)>)/gi, "")}
                        </div>
                        <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                          <div className="mb-0 mb-md-2">
                            <div className="dropdown share-dropdown btn-group">
                              <button className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="uil uil-share-alt"></i> Share </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" href={`https://api.whatsapp.com/send?text=${site}/detail-artikel/${detailArtikel[0]?.slug_title}`}
                                  title="Whatsapp"><i className="bx bxl-whatsapp"></i>Whatsapp</Link>
                                <Link className="dropdown-item" href={`https://twitter.com/share?text=${site}/detail-artikel/${detailArtikel[0]?.slug_title}`}
                                  title="Twitter"><i className="uil uil-twitter"></i>Twitter</Link>
                                <Link className="dropdown-item" href={`https://www.facebook.com/sharer/sharer.php?u=${site}/detail-artikel/${detailArtikel[0]?.slug_title}`}
                                  title="Facebook"><i className="uil uil-facebook-f"></i>Facebook</Link>
                                <Link className="dropdown-item" href={`https://www.instagram.com/sharer/sharer.php?u=${site}/detail-artikel/${detailArtikel[0]?.slug_title}`}
                                  title="Instagram"><i className="uil uil-instagram"></i>Instagram</Link>
                                <Link className="dropdown-item" href={`mailto:?Subject=${site}/detail-artikel/${detailArtikel[0]?.slug_title}`}><i
                                  className="uil uil-envelope" title="Email"></i>Email</Link>
                                <a className="dropdown-item"><button className="clipboard"><i className="bx bx-link"></i>Copy Link</button></a>
                                <Link className="dropdown-item" href={`http://www.linkedin.com/shareArticle?mini=true&url=${site}/detail-artikel/${detailArtikel[0]?.slug_title}`}
                                  title="linkedin"><i className="uil uil-linkedin"></i>Linkedin</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <hr />
                    <h3 className="mb-6">Mungkin kamu akan menyukai</h3>
                    <div className="swiper-container blog grid-view mb-5 swiper-container-0" data-margin="30" data-dots="true" data-items-md="2" data-items-xs="1">
                      <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                        <div className="swiper-wrapper" id="swiper-wrapper-874aed1497833da6" aria-live="off" style={{ cursor: "grab", transform: "translate3d(0px, 0px, 0px)" }}>
                          {artikelSlide && artikelSlide.map((item: any, i: number) =>
                            <div key={i} className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4" style={{ width: "283.5px", marginRight: "30px" }}>
                              <div className="blog-item wow fadeInUp delay-0-4s">
                                <figure className="card-img-top overlay overlay-1 hover-scale" style={{ height: "150px" }}><Link href={`/detail-artikel/${item.slug_title}`} title="artikel">
                                  <img src={`https://cms.ciptadrasoft.com/upload/${item.lampiran.replace(/(<([^>]+)>)/gi, "")}`} alt="berita" /><span className="bg"></span><span className="bg"></span></Link>
                                  <figcaption>
                                    <h5 className="from-top mb-0">Baca Selengkapnya</h5>
                                  </figcaption>
                                </figure>

                                <div className="blog-content">
                                  <span className="tanggal"><i className="bx bx-calendar"></i>{item.tgl_publish.replace(/(<([^>]+)>)/gi, "")}</span>
                                  <div className="content">
                                    <h5 className="h5-artikel pt-0"><Link href={`/detail-artikel/${item.slug_title}`} title="artikel">{item.title.replace(/(<([^>]+)>)/gi, "")}</Link></h5>
                                    <p className="p-artikel">
                                      {item.content.replace(/(<([^>]+)>)/gi, "").substr(0, 120)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                      </div>
                      <div className="swiper-controls">
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar mt-11 mt-lg-6">
              <div className="d-flex form-inputs">
                <input id="search" className="form-control w-100" type="text" placeholder="Cari Artikel" />
                <a id="btn-search"><i className="bx bx-search"></i></a>
              </div>
              <div className="widget mt-5">
                <h4 className="widget-title mb-3">Popular Posts</h4>
                <ul className="image-list">
                  {artikelSlide && artikelSlide.map((item: any, i: number) =>
                    <li key={i}>
                      <figure className="rounded"><Link href={`/detail-artikel/${item.slug_title}`} title="artikel"><img src={`https://cms.ciptadrasoft.com/upload/${item.lampiran.replace(/(<([^>]+)>)/gi, "")}`} alt="artikel" /></Link></figure>
                      <div className="post-content">
                        <h6 className="mb-1"> <Link className="link-dark" href={`/detail-artikel/${item.slug_title}`} title="Artikel">{item.title.replace(/(<([^>]+)>)/gi, "")}</Link> </h6>
                        <ul className="post-meta">
                          <li className="post-date"><i className="uil uil-calendar-alt"></i><span>{item.tgl_publish.replace(/(<([^>]+)>)/gi, "")}</span></li>
                        </ul>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <form className="contact-form needs-validation mt-5" method="post" action="/aksi" noValidate>
                <div className="messages"></div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form">
                      <label htmlFor="fname">Nama</label>
                      <input type="text" id="fname" name="nama" placeholder="Nama Lengkap" />

                      <label htmlFor="lname">Email Resmi</label>
                      <input type="text" id="lname" name="email" placeholder="Email Kantor / Email Utama" />

                      <label htmlFor="subjek">Subjek</label>
                      <input type="text" id="subjek" name="subjek" placeholder="Subjek" />

                      <label htmlFor="lname">Isi</label>
                      <textarea placeholder="Contoh Format Pesan &#10; 1. Nama Perusahaan &#10;     2. Jabatan &#10;     3. No Hp/ wa &#10;     4. Jumlah Karyawan&#10;     5. Bagaimana anda menemukan info tentang kami? &#10;     6. Pesan &#10;" name="pesan"></textarea>
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start mb-4 mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200">
                      <button className="feature-button" id="submit" type="submit">Kirim</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row align-items-center mt-10">
            <div className="card-pad container py-md-2">
              <div className="card-solusi">
                <h5>Onebox : Contact Center Omnichanel</h5>
                <p>Diskusikan dengan tim kami untuk memberikan solusi yang tepat untuk bisnis Anda</p>

                <div className="justify-content-center justify-content-lg-start mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200">
                  <Link className="feature-button" href={`https://wa.me/${profil[0]?.Telp}?text=Halo Tim Onebox, Saya ingin mengajukan beberapa pertanyaan`} target="_blank">Hubungi Whatsapp Kami</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
