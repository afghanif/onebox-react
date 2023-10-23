import Script from "next/script";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Link from "next/link";

const ListArtikelTemp = (props: any) => {
  const { profil, produk, solusi, artikel } = props;
  const profileSite = { profil, produk, solusi };

  return (
    <>
      <section className="atas-wrapper bg-soft-primary">
        <div className="container pt-10 pb-7 pt-md-10 pb-md-10 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
              <h1 className="display-1 mb-3">Artikel</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link href="/" title="Beranda">Beranda</Link></li>
                  <li className="breadcrumb-item"><a title="Artikel">Artikel</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="berita d-lg-flex align-items-centerd-lg-flex align-items-center">
        <div className="container pt-3 pt-md-11">
          <div className="d-flex form-inputs">
            <input id="search" className="form-control" type="text" placeholder="Cari Artikel" />
            <a id="btn-search"><i className="bx bx-search"></i></a>
          </div>
          <div className="row">
            {artikel && artikel.map((item: any, index: number) => (
              <div className="col-lg-3 p-4" key={index}>
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <figure className="card-img-top overlay overlay-1 hover-scale" style={{ height: "100%" }}>
                    <Link href={`/detail-artikel/${item.slug_title}`} title="Artikel">
                      <img src={`https://cms.ciptadrasoft.com/upload/${item.lampiran}`} alt="" />
                      <span className="bgv"></span><span className="bg"></span></Link>
                    <figcaption>
                      <h5 className="from-top mb-0">Baca Selengkapnya</h5>
                    </figcaption>
                  </figure>

                  <div className="blog-content">
                    <span className="tanggal"><i className="bx bx-calendar"></i>{item.tgl_publish}</span>
                    <div className="content">
                      <h5 className="h5-artikel pt-0">
                        <Link href={`/detail-artikel/${item.slug_title}`} title="Artikel">{item.title.replace(/(<([^>]+)>)/gi, '').substring(0, 40)}</Link>
                      </h5>
                      <p className="p-artikel">
                        {item.content.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <nav className="d-flex justify-content-center" aria-label="pagination">
            <ul className="pagination">
              @if ($page == '1')
              @else
              <?php $link_prev = ($page > 1) ? $page - 1 : 1; ?>
              <li className="page-item disabled">
                <Link className="page-link" href="?page={{$link_prev}}" aria-label="Previous">
                  <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
                </Link>
              </li>
              @endif
              @if($jumlah_page > 1)
              @for ($i = $start_number; $i <= $end_number; $i++) <?php $link_active = ($page == $i) ? 'active' : ''; ?> <li className="page-item {{$link_active}}">
                <Link className="page-link" href="?page={{$i}}" title="Halaman">{{ $i }}</Link></li>
                @endfor
                @endif
                @if($page == $jumlah_page)
                @else
                <?php $link_next = ($page < $jumlah_page) ? $page + 1 : $jumlah_page; ?>
                <li className="page-item">
                  <Link className="page-link" aria-label="Next">
                    <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
                  </Link>
                </li>
                @endif
            </ul>
            <!-- /.pagination -->
          </nav> */}
        </div>
      </section>
    </>
  );
};

export default ListArtikelTemp;
