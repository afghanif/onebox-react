import Link from "next/link";

export default function Footer({ profil, produk, solusi }: any) {
    return (
        <div>
            <footer className="footer-wrapper">
                <div className="container py-13 py-md-10">
                    <div className="row gy-6 gy-lg-0">
                        <div className="col-md-4 col-lg-5">
                            <div className="widget">
                                <img className="mb-3" src="/img/logo/logo2.svg" alt="Logo" style={{ width: "200px" }} />
                                <h3 className="mb-3" style={{ color: "white", fontSize: "25px", fontWeight: "700" }}>PT. Ciptadra Softindo</h3>
                                <ul>
                                    <li>

                                        <div className="icon">
                                            <i className="bx bx-globe"></i>
                                        </div>
                                        <Link href="https://ciptadrasoft.com/" style={{ color: "#888888 !important" }} title="Website" >
                                            www.ciptadrasoft.com
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="bx bx-map"></i>
                                        </div>
                                        {profil && profil[0].Alamat}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="bx bx-envelope"></i>
                                        </div>
                                        {profil && profil[0].Email}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="bx bx-phone-call"></i>
                                        </div>
                                        <Link href={`tel:${profil && profil[0].Telp}`} title="Nomor Telepon"> {profil && profil[0].Telp}</Link>
                                    </li>
                                </ul>
                                <nav className="nav social mt-12">
                                    <Link href={profil && profil[0].Facebook} title="Facebook"><img src="/img/icons/facebook.png" style={{ width: "0.9rem" }} alt="" /></Link>
                                    <Link href={profil && profil[0].Twitter} title="Twitter" ><i className="uil-twitter-alt" style={{ color: "#009fc3" }}></i></Link>
                                    <Link href={profil && profil[0].Instagram} title="Instagram"><i className="bx bxl-instagram" style={{ color: "#009fc3" }}></i></Link>
                                    <Link href="https://www.linkedin.com/showcase/onebox-crm/" title="LinkedIn"><i className="bx bxl-linkedin-square" style={{ color: "#009fc3" }}></i></Link>
                                </nav>
                                {/* <!-- /.social --> */}
                            </div>
                            {/* // <!-- /.widget --> */}
                        </div>
                        {/* // <!-- /column --> */}
                        <div className="col-md-4 col-lg-7">
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <div className="widget-2">
                                        <h4 className="widget-title  mb-3" style={{ color: "white" }}>Produk</h4>
                                        <ul className="list-unstyled text-reset mb-0">
                                            <li><Link href={`/detail-produk/${produk[11]?.slug_title}/${produk[11].content_id}`} title="Contact Center">Contact Center</Link></li>
                                            <li><Link href={`/detail-produk/${produk[8]?.slug_title}/${produk[8].content_id}`} title="Customer Feedback">Customer Feedback</Link></li>
                                            <li><Link href={`/detail-produk/${produk[9]?.slug_title}/${produk[9].content_id}`} title="Task Management">Task Management</Link></li>
                                            <li><Link href={`/detail-produk/${produk[10]?.slug_title}/${produk[10].content_id}`} title="Customer Relationship">Customer Relationship</Link></li>
                                            <li><Link href={`/detail-produk/${produk[5]?.slug_title}/${produk[5].content_id}`} title="Customer Portal">Customer Portal</Link></li>
                                            <li><Link href={`/detail-produk/${produk[6]?.slug_title}/${produk[6].content_id}`} title="Customer Mobile">Customer Mobile</Link></li>
                                            <li><Link href={`/detail-produk/${produk[7]?.slug_title}/${produk[7].content_id}`} title="API Social Media">API Social Media</Link></li>
                                            <li><Link href={`/detail-produk/${produk[4]?.slug_title}/${produk[4].content_id}`} title="Prospect Management">Prospect Management</Link></li>
                                            <li><Link href={`/detail-produk/${produk[1]?.slug_title}/${produk[1].content_id}`} title="Media Monitoring">Media Monitoring</Link></li>
                                            <li><Link href={`/detail-produk/${produk[2]?.slug_title}/${produk[2].content_id}`} title="Chatbot">Chatbot</Link></li>
                                            <li><Link href={`/detail-produk/${produk[3]?.slug_title}/${produk[3].content_id}`} title="Broadcast">Broadcast</Link></li>
                                            <li><Link href={`/detail-produk/${produk[0]?.slug_title}/${produk[0].content_id}`} title="Sistem Antrian">Sistem Antrian</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="widget-2">
                                        <h4 className="widget-title  mb-3" style={{ color: "white" }}>Studi Kasus</h4>
                                        <ul className="list-unstyled text-reset mb-0">
                                            <li><Link href={`/detail-solusi/${solusi[6]?.slug_title}/${solusi[6].content_id}`} title="Telekomunikasi" >Telekomunikasi</Link></li>
                                            <li><Link href={`/detail-solusi/${solusi[5]?.slug_title}/${solusi[5].content_id}`} title="Pemerintahan">Pemerintahan</Link></li>
                                            <li><Link href={`/detail-solusi/${solusi[4]?.slug_title}/${solusi[4].content_id}`} title="Multilevel Multitasking">Multilevel Multitasking</Link></li>
                                            <li><Link href={`/detail-solusi/${solusi[2]?.slug_title}/${solusi[2].content_id}`} title="Retail">Retail</Link></li>
                                            <li><Link href={`/detail-solusi/${solusi[1]?.slug_title}/${solusi[1].content_id}`} title="Organisasi Non-Profit ">Organisasi Non-Profit</Link></li>
                                            <li><Link href={`/detail-solusi/${solusi[0]?.slug_title}/${solusi[0].content_id}`} title="Rumah Sakit">Rumah Sakit</Link></li>
                                            <li><Link href={`/detail-solusi/${solusi[3]?.slug_title}/${solusi[3].content_id}`} title="Fintech dan Asuransi">Fintech dan Asuransi</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="widget-2">
                                        <h4 className="widget-title  mb-3" style={{ color: "white" }}>Perusahaan</h4>
                                        <ul className="list-unstyled text-reset mb-0">
                                            <li><Link href="/partnership">Menjadi Partner</Link></li>
                                            <li><Link href="/Privacy">Keamanan dan Privasi</Link></li>
                                            <li><Link href="/Tac">Syarat dan Ketentuan</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // <!-- /column --> */}
                    </div>
                    {/* // <!--/.row --> */}
                </div>

                <div className="footer-bottomm">
                    <div className="container py-13 py-md-0">
                        <div className="row">
                            <div className="footer-bottom">
                                <div className="col-lg-4">
                                    <div className="logo">
                                        <img src="/img/logo-ciptadra-white.png" srcSet="/img/logo-ciptadra-white.png" alt="Logo" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="copyright">
                                        Copyright © 2022 Onebox CRM
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="web">
                                        <i className="bx bxs-globe"></i>www.ciptadrasoft.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}