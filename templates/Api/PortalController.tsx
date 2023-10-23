import useSWR, { mutate } from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export function getBootCsr() {
    const profil = useSWR("https://cms.ciptadrasoft.com/ViewPortal/profilsite?siteId=95", fetcher);
    const produk = useSWR("https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K010&limit=&offset=&category=222&slug=&key=&parent=", fetcher);
    const solusi = useSWR("https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K005&limit=&offset=&category=&slug=&key=&contentId=", fetcher);

    const isLoading = profil.isLoading || produk.isLoading || solusi.isLoading;

    if (profil.error || produk.error || solusi.error) {
        throw new Error("Error while fetching boot data");
    }

    const result = {
        profil,
        produk,
        solusi,
        isLoading
    }
    return result;
}

export function home() {
    const slider = useSWR("https://cms.ciptadrasoft.com/ViewPortal/getSlider?siteId=105&status=ST01&kanalType=K010&groupId=&parent=&limit=3", fetcher);

    const artikel = useSWR("https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K003&limit=2&offset=&category=&slug=&key=&contentId=", fetcher);

    const artikel1 = useSWR("https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K003&limit=1&offset=&category=&slug=&key=&contentId=", fetcher);

    const modul_exp = useSWR("https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K010&limit=&offset=&category=141&slug=&key=&content_id=243", fetcher);

    const boot = getBootCsr();
    if (!boot.isLoading) {
        boot.isLoading = slider.isLoading || artikel.isLoading || artikel1.isLoading;
    }

    if (slider.error || artikel.error || artikel1.error || (modul_exp.error && modul_exp.error.length > 0)) {
        throw new Error('Error while fetching data ');
    }

    const returnData = { ...boot, slider, artikel, artikel1, modul_exp };
    return returnData;
}

// -- ARTIKEL
export function listArtikel() {
    const artikel = useSWR("https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K003&limit=&offset=&category=&slug=&key=", fetcher);
    const boot = getBootCsr();
    if (!boot.isLoading) {
        boot.isLoading = artikel.isLoading;
    }

    if (artikel.error) {
        throw new Error("Error while fetching artikel data");
    }

    const returnData = { ...boot, artikel };
    return returnData;
}

export function getDetailArtikel(slug: string) {
    const detailArtikel = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K003&limit=&offset=&category=&slug=${slug}&key=`, fetcher);

    const site = "https://dummy.smartcity.co.id/onebox-laravel/public/";

    const artikelSlide = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K003&limit=&offset=&category=&slug=&key=`, fetcher);

    const boot = getBootCsr();
    if (!boot.isLoading) {
        boot.isLoading = detailArtikel.isLoading || artikelSlide.isLoading;
    }

    if (detailArtikel.error || artikelSlide.error) {
        // throw new Error('Error while fetching data');
        setTimeout(() => {
            mutate(`https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K003&limit=&offset=&category=&slug=${slug}&key=`);
        }, 2000);
        console.log(detailArtikel.error);
    }

    const returnData = { ...boot, detailArtikel, site, artikelSlide };
    return returnData;
}

// KASUS
export function getDetailSolusi(slug: string) {
    const detailSolusi = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K005&limit=&offset=&category=&slug=${slug}&key=`, fetcher);

    const code = detailSolusi.data ? detailSolusi.data[0]?.Category.replace(/ /g, '%20') : '';
    const portotele = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/getExLink?siteId=105&code=${code}&groupId=&typeId=LM&limit=&offset=&slug=&parent=`, fetcher);

    const boot = getBootCsr();

    if (!boot.isLoading) {
        boot.isLoading = detailSolusi.isLoading || portotele.isLoading;
    }

    if (detailSolusi.error || (portotele.error && Object.keys(portotele.error).length !== 0)) {
        throw new Error('Error while fetching detail solusi');
    }

    const returnData = { ...boot, detailSolusi, portotele };
    return returnData;
}

// PRODUK
export function getDetailProduk(slug: string, contentid: string) {
    const detailProduk = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K010&limit=&offset=&category=&slug=${slug}&contentId=${contentid}&key=`, fetcher);

    const code = detailProduk.data ? detailProduk.data[0].sumber_informasi.replaceAll(/ /g, '%20') : '';
    const galeri = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/getExLink?siteId=105&code=${code}&groupId=&typeId=LM&limit=&offset=&slug=&parent=`, fetcher);

    const parents = useSWR(`https://cms.ciptadrasoft.com/ViewPortal/get_content?siteId=105&status=ST01&kanalType=K010&limit=&offset=&category=&slug=&parent=${contentid}&key=`, fetcher);

    const boot = getBootCsr();
    if (!boot.isLoading) {
        boot.isLoading = detailProduk.isLoading || galeri.isLoading || parents.isLoading;
    }

    // if(detailProduk.error || galeri.isLoading || parents.isLoading){
    //     throw new Error("Error while fetching data");
    // }

    const returnData = { ...boot, detailProduk, galeri, parents };
    return returnData;
}