import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ profil, produk, solusi }: any) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    return (
        <>
            <header className="wrapper bg-soft-primary">
                <nav className={`center-nav navbar navbar-expand-lg navbar-light ${isScrolled ? 'navbar-clone fixed navbar-stick' : 'navbar-unstick'}`} style={{ backgroundColor: "white" }}>
                    <div className="container flex-lg-row flex-nowrap align-items-center">
                        <div className="navbar-brand w-100">
                            <Link href="/">
                                <img src="/img/logo/logo1.webp" srcSet="/img/logo/logo1.webp" style={{ width: "160px" }} alt="Logo" />
                            </Link>
                        </div>
                        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                            <div className="offcanvas-header d-lg-none">
                                <img src="/img/logo/logo1.webp" srcSet="/img/logo/logo1.webp" style={{ width: "160px" }} alt="Logo" />
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Produk</Link>
                                        <ul className="dropdown-menu mega-menu">
                                            <li className="mega-menu-content">
                                                <div className="row gx-0 gx-lg-3 ">
                                                    <div className="col-md-5">
                                                        <div className="img-mega-menu">
                                                            <ul className="list-unstyled mb-2">
                                                                <li>
                                                                    <div className="produk-nav">
                                                                        <div className="img">
                                                                            <i className="bx bx-headphone"></i>
                                                                        </div>
                                                                        <div className="desc">
                                                                            <h4 className="mb-0 text-primary" style={{ color: "#343f52 !important" }}>Customer Service Omnichannel</h4>
                                                                            <hr className="hr-title mb-1 mt-1" />
                                                                            <h3 className="mb-0 mt-0">Semua Channel layanan dalam satu layar, sehingga lebih mudah, praktis, cepat dan terukur. </h3>
                                                                            <ul className="poin-modul2 cc-2">
                                                                                <li><Link href="/contact-omni"><i className="bx bx-headphone"></i>Contact Center</Link></li>
                                                                                <li><Link href={`/detail-produk/${produk[9]?.slug_title}/${produk[9]?.content_id}`}><i className="bx bx-task"></i>Task Manajemen</Link></li>
                                                                                <li><Link href={`/detail-produk/${produk[2]?.slug_title}/${produk[2]?.content_id}`}><i className="bx bx-bot"></i>Chatbot</Link></li>
                                                                                <li><Link href={`/detail-produk/${produk[10]?.slug_title}/${produk[10]?.content_id}`}><i className="bx bx-link"></i>Customer Relationship</Link></li>
                                                                                <li><Link href={`/detail-produk/${produk[5]?.slug_title}/${produk[5]?.content_id}`}><i className="bx bx-globe"></i>Customer Portal/ Mobile</Link></li>
                                                                                <li><Link href={`/detail-produk/${produk[7]?.slug_title}/${produk[7]?.content_id}`}><i className="bx bxl-instagram-alt"></i>API Social Media</Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <img className="w-75 p-2 d-block m-auto mb-3" src="/img/illustrations/mega-menu.webp" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="row gx-0 gx-lg-3">
                                                            <div className="col-lg-4">
                                                                <Link className="dropdown-item" href={`/detail-produk/${produk[8]?.slug_title}/${produk[8]?.content_id}`}>
                                                                    <div className="produk-nav">
                                                                        <div className="img">
                                                                            <i className="bx bx-conversation"></i>
                                                                        </div>
                                                                        <div className="desc">
                                                                            <h3>Customer Feedback</h3>
                                                                            <p>Mengukur tingkat kepuasan pelanggan untuk optimalisasi layanan</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <Link className="dropdown-item" href={`/detail-produk/${produk[0]?.slug_title}/${produk[0]?.content_id}`}>
                                                                    <div className="produk-nav">
                                                                        <div className="img">
                                                                            <i className="bx bx-menu-alt-left"></i>
                                                                        </div>
                                                                        <div className="desc">
                                                                            <h3>Sistem Antrian</h3>
                                                                            <p>Memudahkan dan mempercepat antrian pelayanan,
                                                                                database layanan (terintegrasi dengan contact
                                                                                center)
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <Link className="dropdown-item" href={`/detail-produk/${produk[3]?.slug_title}/${produk[3]?.content_id}`}>
                                                                    <div className="produk-nav">
                                                                        <div className="img">
                                                                            <i className="bx bx-broadcast"></i>
                                                                        </div>
                                                                        <div className="desc">
                                                                            <h3>Broadcast</h3>
                                                                            <p>Kebutuhan pada billing, marketing, konfirmasi,
                                                                                reminder, survey, sapa salam, motivasi dan lainnya
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-lg-6">
                                                                <Link className="dropdown-item" href={`/detail-produk/${produk[3]?.slug_title}/${produk[3]?.content_id}`}>
                                                                    <div className="produk-nav">
                                                                        <div className="img">
                                                                            <i className="bx bx-broadcast"></i>
                                                                        </div>
                                                                        <div className="desc">
                                                                            <h3>Prospek Manajemen</h3>
                                                                            <p>Kebutuhan pada billing, marketing, konfirmasi,
                                                                                reminder, survey, sapa salam, motivasi dan lainnya
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <Link className="dropdown-item" href={`/detail-produk/${produk[1]?.slug_title}/${produk[1]?.content_id}`}>
                                                                    <div className="produk-nav">
                                                                        <div className="img">
                                                                            <i className="bx bx-desktop"></i>
                                                                        </div>
                                                                        <div className="desc">
                                                                            <h3>Media Monitoring</h3>
                                                                            <p>Mengumpulkan informasi dari berbagai sumber untuk
                                                                                laporan sentimen dan issue yang trending </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mt-10">
                                                            <div className="btn-produk">
                                                                <Link href="/list-produk" className="btn btn-sm rounded bg-soft-aqua text-center w-100" style={{ color: "#424c5e" }}>Lihat Semua Produk <i className='bx bx-right-arrow-alt bx-fade-right'></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!--/.mega-menu-content--> */}
                                        </ul>
                                        {/* <!--/.dropdown-menu --> */}
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" href="/#portfolio">Portofolio</Link></li>
                                    <li className="nav-item dropdown dropdown-mega">
                                        <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Studi Kasus</Link>
                                        <ul className="dropdown-menu mega-menu">
                                            <li className="mega-menu-content">
                                                <div className="row gx-0 gx-lg-3">
                                                    <div className="col-lg-4">
                                                        <ul className="list-unstyled">
                                                            <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[6]?.slug_title}/${solusi[6]?.content_id}`}>
                                                                <div className="produk-nav">
                                                                    <div className="img">
                                                                        <i className="bx bx-headphone"></i>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <h3>Telekomunikasi</h3>
                                                                        <p>Handle pengaduan terhubung dengan data pelanggan,
                                                                            billing serta otomasi work order.</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            </li>
                                                            <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[5]?.slug_title}/${solusi[5]?.content_id}`}>
                                                                <div className="produk-nav">
                                                                    <div className="img">
                                                                        <i className="bx bx-building"></i>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <h3>Pemerintahan</h3>
                                                                        <p>Integrasi dengan portal layanan publik untuk
                                                                            memudahkan pengaduan dan aspirasi publik.</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            </li>

                                                            <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[0]?.slug_title}/${solusi[0]?.content_id}`}>
                                                                <div className="produk-nav">
                                                                    <div className="img">
                                                                        <i className="bx bx-clinic"></i>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <h3>Rumah Sakit</h3>
                                                                        <p>Kemudahan integrasi dengan data pasien, jadwal praktek dokter serta informasi produk dan layanan RS.</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            </li>


                                                        </ul>
                                                    </div>
                                                    {/* <!--/column --> */}
                                                    <div className="col-lg-8">
                                                        <div className="row gx-0 gx-lg-3">
                                                            <div className="col-lg-6">
                                                                <ul className="list-unstyled">
                                                                    <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[3]?.slug_title}/${solusi[3]?.content_id}`}>
                                                                        <div className="produk-nav">
                                                                            <div className="img">
                                                                                <i className="bx bx-heart"></i>
                                                                            </div>
                                                                            <div className="desc">
                                                                                <h3>Fintech Dan Asuransi</h3>
                                                                                <p>Integrasi data nasabah, survey, informasi simulasi
                                                                                    premi, interaksi & notifikasi via whatsapp business.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                    </li>
                                                                    <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[2]?.slug_title}/${solusi[2]?.content_id}`}>
                                                                        <div className="produk-nav">
                                                                            <div className="img">
                                                                                <i className="bx bx-water"></i>
                                                                            </div>
                                                                            <div className="desc">
                                                                                <h3>Retail</h3>
                                                                                <p>Integrasi data pelanggan, eksternal system, dan
                                                                                    informasi billing via whatsapp bot.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <ul className="list-unstyled">
                                                                    <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[1]?.slug_title}/${solusi[1]?.content_id}`}>
                                                                        <div className="produk-nav">
                                                                            <div className="img">
                                                                                <i className="bx bx-cctv"></i>
                                                                            </div>
                                                                            <div className="desc">
                                                                                <h3>Non-Profit Organization</h3>
                                                                                <p>Sosialisasi program dimudahkan dengan whatsapp
                                                                                    business dan interaksi semua channel direspon dengan
                                                                                    cepat.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                    </li>


                                                                    <li><Link className="dropdown-item" href={`/detail-solusi/${solusi[4]?.slug_title}/${solusi[4]?.content_id}`}>
                                                                        <div className="produk-nav">
                                                                            <div className="img">
                                                                                <i className="bx bx-buildings"></i>
                                                                            </div>
                                                                            <div className="desc">
                                                                                <h3>Multilevel Marketing</h3>
                                                                                <p>Melayani pengaduan dan laporan pelanggan dari
                                                                                    berbagai channel.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mt-10">
                                                            <div className="btn-produk">
                                                                <Link href="/list-kasus" className="btn btn-sm rounded bg-soft-aqua text-center w-100" style={{ color: "#424c5e" }}>Lihat Semua Studi Kasus <i className='bx bx-right-arrow-alt bx-fade-right'></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--/.row --> */}
                                            </li>
                                            {/* <!--/.mega-menu-content--> */}
                                        </ul>
                                        {/* <!--/.dropdown-menu --> */}
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" href="/list-artikel">Artikel</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/partnership">Menjadi Partner</Link></li>
                                </ul>
                                {/* <!-- /.navbar-nav --> */}
                                {/* <!-- /.offcanvas-footer --> */}
                            </div>
                            {/* <!-- /.offcanvas-body --> */}
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                        <div className="navbar-other w-100 d-flex ms-auto">
                            <ul className="navbar-nav flex-row align-items-center ms-auto">
                                <li className="nav-item d-none d-md-block">
                                    <Link className="feature-button" href="/hubungi" style={{ padding: "10px 25px" }}>Hubungi Kami</Link>
                                </li>
                                <li className="nav-item d-lg-none">
                                    <button className="hamburger offcanvas-nav-btn"><span></span></button>
                                </li>
                            </ul>
                            {/* <!-- /.navbar-nav --> */}
                        </div>
                        {/* <!-- /.navbar-other --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </nav >
                {/* <!-- /.navbar --> */}
            </header >

            <Link href={`https://wa.me/${profil[0]?.Telp}?text=Halo Tim Onebox, Saya ingin mengajukan beberapa pertanyaan`} className="float" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </Link>
        </>
    )
}