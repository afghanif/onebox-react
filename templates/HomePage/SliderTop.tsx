import { useEffect } from "react";
const SliderTop = ({ slider }: any) => {
    useEffect(() => {
        // @ts-ignore
        const splide = new Splide('#slidertop', {
            perPage: 1,
            autoplay: true,
            pagination: true,
        }).mount();
        
        return () => {
            splide.destroy();
        };
    }, []);

    return (
        <div id="slidertop" className="splide" role="group" aria-label="Splide Basic HTML Example">
            <div className="splide__track mt-10">
                <ul className="splide__list">
                    {slider && slider.map((slide:any, index:number) => (
                        <li key={index} className="splide__slide">
                            <div className="container pt-3 pt-md-5">
                                <div className="row gx-2 gy-10 align-items-center">
                                    <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
                                        <h1 className="display-2 mb-0 mx-sm-n2 mx-md-0"><span style={{ color: "#3a9dc2" }}>{slide.Title}</span></h1>
                                        <p className="sub-judul-slider">{slide.Description}</p>
                                        <div className="d-flex justify-content-center justify-content-lg-start mb-4 mt-5" data-cues="slideInDown" data-group="page-title-buttons" data-delay="200">
                                            <a className="feature-button" href="/hubungi" title="Demo Aplikasi">Demo Aplikasi</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 ms-auto position-relative">
                                        <img className="" src={`https://cms.ciptadrasoft.com/upload/slider/${slide.File}`} alt="omnichannel" width="100%" loading="eager" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SliderTop;
