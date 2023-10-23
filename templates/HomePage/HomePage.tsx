import SliderTop from "./SliderTop";
import { useEffect } from "react";
import Link from "next/link";

const HomePage = ({ produk, slider, artikel, artikel1 }: any) => {

  useEffect(() => {
    // @ts-ignore
    const solusi1 = new Splide('#solusi1', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();
    // @ts-ignore
    const solusi2 = new Splide('#solusi2', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();
    // @ts-ignore
    const solusi3 = new Splide('#solusi3', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();
    // @ts-ignore
    const portofolio = new Splide('#portofolio', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();

    return () => {
      solusi1.destroy();
      solusi2.destroy();
      solusi3.destroy();
      portofolio.destroy();
    }
  }, []);

  return (
    <div>
      <section className="opening wrapper bg-light position-relative min-vh-60 d-lg-flex align-items-center">
        <SliderTop slider={slider} />
      </section>

      <section className="deskripsi-wrapper">
        <div className="container py-9 py-md-8 pb-md-8">

          <div className="col-lg-12">
            <p className="font-desc" style={{ color: "whites" }}>Kemudahan meningkatkan layanan pelanggan dari semua channel, mempercepat penyelesaian pengaduan, meningkatkan produktitas kerja, penjualan dengan operasional lebih mudah, cepat dan hemat, terintegrasi dengan task management, knowledge sistem dan data pelanggan</p>
            <div className="row">
              <div className="col-lg-6">
                <div className="col-lg-10">
                  <div className="card-modul">
                    <h1>Customer Service Omnichannel</h1>
                    <ul className="poin-modul1 cc-2">
                      <li><Link href={`/detail-produk/${produk[11].slug_title}/${produk[11].content_id}`} title="Contact Center"><i className="bx bx-headphone"></i>Contact Center</Link></li>
                      <li><Link href={`/detail-produk/${produk[9].slug_title}/${produk[9].content_id}`} title="Task Manajemen"><i className="bx bx-task"></i>Task Manajemen</Link></li>
                      <li><Link href={`/detail-produk/${produk[2].slug_title}/${produk[2].content_id}`} title="Chatbot"><i className="bx bx-bot"></i>Chatbot</Link></li>
                      <li><Link href={`/detail-produk/${produk[10].slug_title}/${produk[10].content_id}`} title="Customer Relationship"><i className="bx bx-link"></i>Customer Relationship</Link></li>
                      <li><Link href={`/detail-produk/${produk[5].slug_title}/${produk[5].content_id}`} title="Customer Portal/ Mobile"><i className="bx bx-globe"></i>Customer Portal/ Mobile</Link></li>
                      <li><Link href={`/detail-produk/${produk[7].slug_title}/${produk[7].content_id}`} title="API Social Media"><i className='bx bxl-instagram'></i>API Social Media</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="col-xl-11 col-xxl-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-modul">
                        <h1>Marketing & Sales</h1>
                        <ul className="poin-modul1">
                          <li><i className="bx bx-shape-square"></i><Link href={`/detail-produk/${produk[4].slug_title}/${produk[4].content_id}`} title="Prospek Manjemen">Prospek Manjemen</Link></li>
                          <li><i className="bx bx-broadcast"></i><Link href={`/detail-produk/${produk[3].slug_title}/${produk[3].content_id}`} title="Broadcast">Broadcast</Link></li>
                          <li><i className="bx bx-menu-alt-left"></i><Link href={`/detail-produk/${produk[0].slug_title}/${produk[0].content_id}`} title="Sistem Antrian">Sistem Antrian</Link></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card-modul">
                        <h1>Customer Feedback</h1>
                        <ul className="poin-modul1">
                          <li><i className="bx bx-conversation"></i><Link href={`/detail-produk/${produk[8].slug_title}/${produk[8].content_id}`} title="Customer Feedback">Customer Feedback</Link></li>
                          <li><i className="bx bx-desktop"></i><Link href={`/detail-produk/${produk[1].slug_title}/${produk[1].content_id}`} title="Media Monitoring">Media Monitoring</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="pt-12" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="tt-el-caption text-center mb-3">
                  <h3>Melayani lebih baik, bekerja lebih mudah, produktifitas meningkat , penjualan bertambah bersama <strong>Onebox</strong> </h3>
                </div>
              </div>
            </div>
            <div className="img-produk">
              <img src="/img/illustrations/screen-img.webp" alt="onebox" width="100%" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-wrapper mt-10 mb-12" id="demos">
        <div className="container">
          <div className="row mb-8">
            <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-9 mx-auto text-center">
              <div className="tt-el-caption">
                <h2 className="display-4 mb-3 text-center">Manfaat</h2>
                <p className="display-7">Solusi Omnichannel untuk membangun <span>loyalitas pelanggan </span>dalam satu layar</p>
              </div>
            </div>
            {/* <!-- /column --> */}
          </div>
          {/* <!-- /.row --> */}
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
            {/* <!-- /.project --> */}
          </div>
        </div>
      </section>

      <section className="product-featured">
        <div className="container">
          <ul className="nav nav-tabs nav-tabs-basic justify-content-center">
            <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" href="#tab3-1" title="Customer Experience"><i className="bx bx-desktop"></i><br />Customer Experience</Link> </li>
            <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" href="#tab3-2" title="Marketing & Sales"> <i className="bx bx-cart"></i><br />Marketing & Sales</Link> </li>
            <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" href="#tab3-3" title="Customer" style={{ marginRight: 0 }}> <i className="bx bx-conversation"></i><br />Customer Feedback</Link> </li>
          </ul>
        </div>
        {/* <!-- /.nav-tabs --> */}
        <div className="tab-content">
          <div className="tab-pane fade show active" id="tab3-1">
            <div className="solusi-wrapper1">
              <div className="container py-md-8">
                <div className="solusi-bg">
                  <div className="row d-flex justify-content-around">
                    <div className="col-lg-6 d-flex align-items-center">
                      <div id="solusi1" className="splide" role="group" aria-label="Splide Basic HTML Example">
                        <div className="splide__track">
                          <ul className="splide__list">
                            <li className="splide__slide">
                              <img src="/img/illustrations/gambar custex/custex1.svg" srcSet="/img/illustrations/gambar custex/ilustrasi 1.webp" alt="Customer Experience" width="100%" loading="lazy" />
                            </li>
                            <li className="splide__slide">
                              <img src="/img/illustrations/gambar custex/ilustrasi 2.webp" srcSet="/img/illustrations/gambar custex/ilustrasi 2.webp" alt="Customer Experience" width="100%" loading="lazy" />
                            </li>
                            <li className="splide__slide">
                              <img src="/img/illustrations/gambar custex/noSideMonitoring.webp" srcSet="/img/illustrations/gambar custex/ilustrasi 2.webp" alt="Customer Experience" width="100%" loading="lazy" />
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-xl-5 offset-lg-1 d-flex align-items-center">
                      <div className="card-manfaat mb-4">
                        <div className="desc-pilih">
                          <div className="tt-el-caption text-left">
                            <h3>Customer <strong>Experience</strong></h3>
                          </div>
                          <p className="mb-2">Meningkatkan layanan contact center lebih mudah dan cepat, melayani informasi dan pengaduan dari berbagai channel dalam satu screen dan didukung sumber daya informasi yang dibutuhkan pelanggan.
                          </p>

                          <ul className="poin-modul cc-2">
                            <li><i className="bx bx-headphone"></i><Link href={`/detail-produk/${produk[11].slug_title}/${produk[11].content_id}`} title="Contact Center">Contact Center</Link></li>
                            <li><i className="bx bx-task"></i><Link href={`/detail-produk/${produk[9].slug_title}/${produk[9].content_id}`}>Task Manajemen</Link></li>
                            <li><i className="bx bx-bot"></i><Link href={`/detail-produk/${produk[2].slug_title}/${produk[2].content_id}`} title="Chatbot">Chatbot</Link></li>
                            <li><i className="bx bx-link"></i><Link href={`/detail-produk/${produk[10].slug_title}/${produk[10].content_id}`} title="Customer Relationship">Customer Relationship</Link></li>
                            <li><i className="bx bx-globe"></i><Link href={`/detail-produk/${produk[5].slug_title}/${produk[5].content_id}`} title="Customer Portal/ Mobile">Customer Portal/ Mobile</Link></li>
                            <li><i className="bx bxl-instagram-alt"></i><Link href={`/detail-produk/${produk[7].slug_title}/${produk[7].content_id}`} title="API Social Media">API Social Media</Link></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                    {/* <!--/column --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.tab-pane --> */}
          <div className="tab-pane fade" id="tab3-2">
            <div className="container py-md-5">
              <div className="solusi-wrapper2">
                <div className="row d-flex justify-content-around">

                  <div className="col-lg-6 d-flex align-items-center">
                    <div id="solusi2" className="splide" role="group" aria-label="Splide Basic HTML Example">
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <img src="/img/illustrations/gambar marsel/prospect.webp" srcSet="/img/illustrations/gambar marsel/prospect.webp" alt="Marketing dan Sales" width="100%" loading="lazy" />
                          </li>
                          <li className="splide__slide">
                            <img src="/img/illustrations/gambar marsel/tg3-1.webp" srcSet="/img/illustrations/gambar marsel/tg3-1.webp" alt="Marketing dan Sales" width="100%" loading="lazy" />
                          </li>
                          <li className="splide__slide">
                            <img src="/img/illustrations/gambar marsel/tg3-2.webp" srcSet="/img/illustrations/gambar marsel/tg3-2.webp" alt="Marketing dan Sales" width="100%" loading="lazy" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7 col-xl-5 d-flex align-items-center">
                    <div className="card-manfaat mb-4">
                      <div className="desc-pilih">
                        <div className="tt-el-caption text-left">
                          <h3>Marketing & <strong>Sales</strong></h3>
                        </div>
                        <p className="mb-2">Berkomunikasi dengan prospek melalui banyak channel (Telephony, Whatsapp, Facebook, Twitter, Instagram dan channel lainnya), sales dapat membuat reminder janji, update status prospek, memasukan target dan nilai penjualan, serta semua kinerja agent penjualan lebih terpantau.</p>

                        <ul className="poin-modul cc-2">
                          <li><i className="bx bx-shape-square"></i><Link href={`/detail-produk/${produk[4].slug_title}/${produk[4].content_id}`} title="Prospek Manjemen">Prospek Manjemen</Link></li>
                          <li><i className="bx bx-broadcast"></i><Link href={`/detail-produk/${produk[3].slug_title}/${produk[3].content_id}`} title="Broadcast">Broadcast</Link></li>
                          <li><i className="bx bx-menu-alt-left"></i><Link href={`/detail-produk/${produk[0].slug_title}/${produk[0].content_id}`} title="Sistem Antrian">Sistem Antrian</Link></li>
                        </ul>
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          {/* <!--/.tab-pane --> */}
          <div className="tab-pane fade" id="tab3-3">
            <div className="solusi-wrapper1">
              <div className="container py-md-5">
                <div className="row d-flex justify-content-around">
                  <div className="col-lg-6 d-flex align-items-center">
                    <div id="solusi3" className="splide" role="group" aria-label="Splide Basic HTML Example">
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <img src="/img/illustrations/gambar marsel/prospect.webp" srcSet="/img/illustrations/gambar marsel/prospect.webp" alt="Marketing dan Sales" width="100%" loading="lazy" />
                          </li>
                          <li className="splide__slide">
                            <img src="/img/illustrations/gambar marsel/tg3-1.webp" srcSet="/img/illustrations/gambar marsel/tg3-1.webp" alt="Marketing dan Sales" width="100%" loading="lazy" />
                          </li>
                          <li className="splide__slide">
                            <img src="/img/illustrations/gambar marsel/tg3-2.webp" srcSet="/img/illustrations/gambar marsel/tg3-2.webp" alt="Marketing dan Sales" width="100%" loading="lazy" />
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  {/* <!--/column --> */}
                  <div className="col-lg-6 col-xl-5 offset-lg-1 d-flex align-items-center">
                    <div className="card-manfaat mb-4">
                      <div className="desc-pilih">
                        <div className="tt-el-caption text-left">
                          <h3>Customer <strong>Feedback</strong></h3>
                        </div>
                        <p className="mb-2">Mengukur tingkat kepuasan layanan dan melakukan survey layanan yang dilakukan melalui
                          broadcast melalui sosmed, email/wa, terkait apa yang perlu dilakukan perbaikan (melalui
                          website/aplikasi mobile, play store maupun google review).</p>

                        <ul className="poin-modul cc-2">
                          <li><i className="bx bx-conversation"></i><Link href={`/detail-produk/${produk[8].slug_title}/${produk[8].content_id}`} title="Customer Feedback">Customer Feedback</Link></li>
                          <li><i className="bx bx-desktop"></i><Link href={`/detail-produk/${produk[1].slug_title}/${produk[1].content_id}`} title="Media Monitoring">Media Monitoring</Link></li>
                        </ul>
                      </div>

                    </div>

                  </div>
                  {/* <!--/column --> */}
                </div>
              </div>
            </div>
          </div>

          {/* <!--/.tab-pane --> */}
        </div>
      </section>

      <section className="benefit-wrapper mt-10 pb-5" id="demos">
        <div className="container">
          <div className="row mb-8">
            <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-9 mx-auto text-center">
              <div className="tt-el-caption">
                <h4 className="display-7">Artikel</h4>
              </div>
            </div>
            {/* <!-- /column --> */}
          </div>
          <div className="benefit-sec">
            <div className="row service-group">
              {artikel1 && artikel1.map((item: any, key: number) => (
                <div className="col-md-6" key={key}>
                  <div className="blog-item big-item wow fadeInUp delay-0-2s">
                    <div className="blog-image">
                      <img src={`https://cms.ciptadrasoft.com/upload/${item.lampiran}`} alt="Artikel" loading="lazy" />
                    </div>
                    <div className="blog-content">
                      <span className="date"><span>25</span> Sept</span>
                      <div className="content">
                        <h4 className="h5-artikel pt-0"><Link href={`/detail-artikel/${item.slug_title}`} title="Artikel">{(item.title || '').replace(/(<([^>]+)>)/gi, '').substring(0, 40)}</Link></h4>
                        <small className="span"><i className="bx bx-user"></i> {item.Author}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tt-el-blog-carousel text-light">
                      <div className="owl-carousel">
                        <div className="owl-blog-item">
                          <div className="row">
                            {artikel && artikel.map((item: any, key: number) => (
                              <div className="col-lg-6" key={key}>
                                <div className="blog-item wow fadeInUp delay-0-4s">
                                  <div className="blog-image">
                                    <img src={`https://cms.ciptadrasoft.com/upload/${item.lampiran}`} alt="artikel" loading="lazy" />
                                  </div>
                                  <div className="blog-content">
                                    <span className="tanggal"><i className="bx bx-calendar"></i>{item.tgl_publish}</span>
                                    <div className="content">
                                      <h5 className="h5-artikel pt-0"><Link href="{{url('/detail-artikel').'/'.$item['slug_title']}}" title="Artikel">{(item.title || '').replace(/(<([^>]+)>)/gi, '').substring(0, 40)}</Link></h5>
                                      <p className="p-artikel">{(item.content || '').replace(/(<([^>]+)>)/gi, '').substring(0, 90)}</p>
                                      <Link href={`/detail-artikel/${item.slug_title}`} title="Selengkapnya" className="read-more">Selengkapnya <i className="uil uil-arrow-right"></i></Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <Link className="feature-button mt-5" href="/list-artikel" title="Artikel Lainnya" style={{ padding: "10px 25px" }}>Lihat Lainnya</Link>
          </div>
        </div>
      </section >

      <section className="portfolio-wrapper bg-light mt-44" id="portfolio">
        <div className="container py-14 py-md-5 pb-md-5 text-center">
          <div className="portfolio">
            <div className="row mb-5">
              <div className="tt-el-caption text-center">
                <h3>Telah dipercaya oleh <strong>berbagai perusahaan </strong></h3>
              </div>
            </div>

            <div className="client-wrapper">
              <div className="row justify-content-around">
                <div className="col-lg-10">
                  <div id="portofolio" className="splide" role="group" aria-label="Splide Basic HTML Example">
                    <div className="splide__track mt-5">
                      <ul className="splide__list">
                        <li className="splide__slide">
                          <div className="container">
                            <div className="row row-cols-4 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 row-cols-xxl-6 justify-content-center">
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c1.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c2.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c3.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c4.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c5.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c6.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c7.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c8.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c9.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c10.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c11.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c12.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c13.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c14.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c15.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c16.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c17.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c18.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="splide__slide">
                          <div className="container">
                            <div className="row row-cols-4 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 row-cols-xxl-5 justify-content-center">

                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c19.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c20.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c21.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c22.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c23.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c24.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c25.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c26.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="img">
                                  <img src="/img/client/c27.webp" alt="portofolio" loading="lazy" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 gariss mt-5">
                  <div className="swiper-container dots-closer mb-6" data-margin="30" data-dots="true">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <blockquote className="icon icon-top text-end">
                            <p>Melayani lebih baik, bekerja lebih cepat dan mudah</p>
                          </blockquote>
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <blockquote className="icon icon-top text-end">
                            <p>Feedback pelanggan, Peta masalah, dan layanan lebih terukur</p>
                          </blockquote>
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <blockquote className="icon icon-top text-end">
                            <p>Melayani semua channel dalam satu layar</p>
                          </blockquote>
                        </div>
                        {/* <!--/.swiper-slide --> */}
                      </div>
                      {/* <!--/.swiper-wrapper --> */}
                    </div>
                    {/* <!-- /.swiper --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default HomePage;
