import { getBootCsr } from "@/templates/Api/PortalController";
import Footer from "@/templates/Components/Footer";
import Navbar from "@/templates/Components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Loading from "./Loading";

const Index: NextPage = () => {
  const { profil, produk, solusi, isLoading } = getBootCsr();

  if (isLoading) {
    return <Loading />
  }

  const sendData = {
    profil: profil.data,
    produk: produk.data,
    solusi: solusi.data
  }

  return (
    <>
      <Head>
        <title>Onebox - Privacy</title>
      </Head>
      <Navbar {...sendData} />

      <section id="about" style={{ paddingTop: "50px !important" }}>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>

          <p style={{ textAlign: "center" }}>In Onebox, we ensure our technologies are safe for our users. We respect your privacy and are committed to protecting it.</p>

          <p style={{ fontWeight: "bold" }}>Welcome to Onebox,</p>

          <p>Onebox is a Solution-Technology that places its utmost priority on data security. We are committed to respecting user privacy and protection of every piece of information, especially Personal Data and Service Data (collectively, &ldquo;Data&rdquo;).</p>

          <p>The following privacy policy ( referred to as &ldquo;Privacy Policy&rdquo; ) describes how Onebox (hereinafter will be referred as &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo; and the like) will collect, use, and disclose the Data that we have obtained from end-users of our product and services (hereinafter will be referred to as &ldquo;you&rdquo;, &ldquo;your&rdquo;, and the like). These also apply to all Onebox products and services, including integrations and support (collectively, &ldquo;Services&ldquo; ), www.onebox.co.id and other Onebox sites (collectively, &ldquo;Websites&rdquo;) and other interactions you may have with our staff through various communication channels.</p>

          <p>By continuing to use or access our Website or Services, you accept the practices outlined in this Policy.</p>

          <p style={{ fontWeight: "bold" }}>Definitions</p>

          <p>&middot; &ldquo;Personal Data&rdquo; refers to any data (whether true or not) about an individual who can be identified (i) from that data; or (ii) from that data and other information to which we have or are likely to have access to, including data in our records.</p>

          <p>&middot; &ldquo;Service Data&rdquo; refers to any data that is created or provided by you prior to using our Products and Services, including but not limited to usage data such as number of messages sent, number of active users, messaging history, log, dates, device type, browser type and version, operating systems, geographic location, IP address, referral source, time spent in our Websites, and other messaging metadata. The Personal Data owned by other people shared by you also counts.</p>

          <p>&middot; &ldquo;Third Party&rdquo; refers to any individual or entity outside of us and our affiliates, including but not limited to Third Parties that provide services and products that support the provision of our Products and Services</p>

          <p style={{ fontWeight: "bold" }}>What information we collect</p>

          <p>For the purpose of using our Products and Services, we may collect your Data and other information ( &ldquo;Information&rdquo; ) in a variety of ways.</p>

          <p style={{ fontWeight: "bold" }}>1) PERSONAL DATA</p>

          <p>Prior to visiting our Sites and using our Products and Services, we may collect Personal Data provided by you including, but not limited to, your full name, e-mail address, mailing address, phone number, website address or other information. We may obtain your Personal Data from Third Parties and other authorized parties such as partners, vendors, agencies, and other integrated services.</p>

          <p>These Data are fully controlled by you and will be used and shared upon your permission.</p>

          <p style={{ fontWeight: "bold" }}>2) SERVICE DATA</p>

          <p>For the purpose of Product and Services operations, we may automatically record some Service Data such as location, IP address, browser type and versions, duration, websites you have visited just before or after visiting our Website, device type, language, Flash version, page title, date and time of visit. We may also record the number of active users, number of agents, medias, e-mail address, messaging history, logs and other Service Data during the usage of Services.</p>

          <p style={{ fontWeight: "bold" }}>How we use your data</p>

          <p>Data and Information provided by you to us will be used for the following purposes:</p>

          <p>&middot; to provide technical assistance to you or to complete the tasks you requested for. For example, when you request for help from our Solution and Support team, we will use your Personal and Service Data to provide assistance which is tailored to your needs;</p>

          <p>&middot; to monitor, maintain and improve our Services;</p>

          <p>&middot; to follow-up or communicate with you about your interest in using Onebox when you contact us to request for more information, sign-up for our events or send in your enquiries and so on;</p>

          <p>&middot; to share with you useful content which may be of interest to you and to update you about our latest Products and Services (&ldquo;Marketing&rdquo;);</p>

          <p>&middot; to manage and administer your Onebox account;</p>

          <p>&middot; to provide and administer our events community. We may provide blogs, community chat groups or even forums on our Website or Apps (collectively, &ldquo;Community Platforms&rdquo;). Any Personal Data you choose to submit in such Community Platforms may be read, collected, or used by others who visit these platforms, and may be used to send you unsolicited messages. It is not our responsibility to manage the Personal Data you decide to share with these Community Platforms;</p>

          <p>&middot; to link your Onebox account to third-party accounts such as WhatsApp Business, Instagram, Google, Github, Facebook, Telegram, Instagram, LINE, e-mail, and so on;</p>

          <p>&middot; to produce training data derived from the Service Data for research, development and business analysis purposes;</p>

          <p>&middot; For other purposes that we believe to be necessary or appropriate: (a) under applicable law, including laws outside your country of residence; (b) to comply with legal processes; (c) to respond to requests from public and government authorities, including public and government authorities outside your country of residence; (d) to enforce our terms and conditions; (e) to protect our operations or those of any of our Affiliates; (f) to protect our rights, privacy, safety or property, and/or that of our Affiliates, you or others; and (g) to allow us to pursue available remedies or limit the damages that we may sustain.</p>

          <p style={{ fontWeight: "bold" }}>NOTE</p>

          <p>The use of the Service Data is also governed by the Service Agreement you enter into with us in connection with the services you subscribed to or are engaging with us. In the event of any conflict arising between this Privacy Policy and the Service Agreement, the Service Agreement supersedes.</p>

          <p>Where is your data stored?</p>

          <p>Your data may be stored in our main server in Singapore or other servers located in any other country, depending on decisions made by us, our storage providers or you. We use third-party vendors and hosting partners, for example, Amazon Web Services (&ldquo;AWS&rdquo;), Alibaba Cloud, and others, to provide the necessary software, storage, and related technology required to run our Products and Services. Only reputable vendors which have strict and world-class security standards are chosen to be our vendors.</p>

          <p>For on-premise Services, you may choose your own server/hosting providers as well. In these circumstances, we do not hold responsibility over the data stored in these servers/hosting providers.</p>

          <p>All intellectual property rights relating to Onebox Products and Services are owned by Onebox and its Affiliates. You retain all rights to your data that you provide to us pursuant to your use of Onebox.</p>

          <p>Will we share the data we received?</p>

          <p>The answer is: &lsquo;Yes&rsquo;. It is possible for us to share data provided by you for the following recipients and situations:</p>

          <p>&middot; Sharing the Data to Third Parties who are directly involved in the provision of our Products and Services solely as necessary for them to support us in providing our Products and Services. The Third Parties here include partners and vendors;</p>

          <p>&middot; Third-Party hosting and/or service providers to help store the messages or data exchanged through our Products and Services;</p>

          <p>&middot; Third-party services, platforms, and/or tools such as analytics tool providers to understand how users interact with our Website and third-party credit card processing providers or payment gateways;</p>

          <p>&middot; As required by law, it may also be necessary to share information in order to investigate, prevent, or take action regarding suspected or actual illegal activities, including, without limitation, fraud, situations involving potential threats to the physical safety of any person, or as otherwise permitted or required by law;</p>

          <p>&middot; Under special circumstances, we may disclose personally identifiable information to our professional advisers such as auditors and lawyers or to comply with any laws, rules, guidelines and regulations imposed by any governmental authority or international standard bodies such as ISO;</p>

          <p>&middot; To any business partner, investor, assignee or transferee (actual or prospective) to facilitate business asset transactions (which may extend to any merger, acquisition or asset sale) involving us, under a relevant confidentiality agreement.</p>

          <p>NOTE</p>

          <p>Other than the above scenarios, we strictly do not share, rent, sell or disclose your Personal and Service Data to anyone.</p>

          <p>What options do you have?</p>

          <p>We do not require you to provide Personal Data when browsing the site although some pages and content may include options for submitting your Personal Data in order for you to fully access and use these website features or functionalities. You can opt out of receiving marketing messages from us by unsubscribing through the unsubscribe or opt-out link via email. We will comply with your request as soon as reasonably practicable. Please note that if you opt-out of receiving marketing-related emails from us, we may still send you important administrative messages.</p>

          <p>Accessing, correcting and deleting your information</p>

          <p>You may access, correct or delete the Personal Data you have provided us by using the tools within the Products and/or Services (for example, editing your profile information on the Products and Services ) or by contacting support.onebox@ciptadrasoft.com. Changes you make to your information on our Products and Services will take immediate effect on your network but data will be retained in secure storage for a limited period afterward as part of our standard data backup process.</p>

          <p>Children</p>

          <p>It is hard for us to distinguish the age of users who access and use the Website. If a person, according to applicable laws, is classified as a minor and has provided us with Personal Data or Service Data without parental or guardian consent, the parent or guardian should contact us to remove the relevant Personal Data or Service Data and unsubscribe the minor.</p>

          <p>If we learn that a user is under the age of 13 (thirteen), he/she may not register an account with us or use our Services and will take appropriate steps to remove the user&rsquo;s information from the database and restrict the user from future access to our Products and Services.</p>

          <p> Securing your data</p>

          <p>As a company which prioritizes information security, we are strongly committed to apply Good Security Practice. Appropriate organizational, technical, and administrative measures to protect Personal Data are applied within our organization, including security controls to prevent unauthorized access to our systems.</p>

          <p>For the purpose of privacy and security, your account is protected by a password. We strongly encourage you to prevent unauthorised access by taking precautionary measures such as implementing complex passwords and limiting access to your computer and browser by signing off after you have finished accessing your account.</p>

          <p>Contact</p>

          <p>While we take reasonable steps to maintain the security of your personal information, you should understand that there is always a level of risk assumed by sharing personal data online. If you have reason to believe that your interactions with our Websites, Products and Services are no longer secure, do immediately email us at support.onebox@ciptadrasoft.com.</p>

          <p>Changes to this privacy policy</p>

          <p>From time to time, we will update this Policy to reflect customer feedback, changes in our Products and Services, and to be consistent with applicable data privacy laws and regulations. When we post changes to this Privacy Policy, we will revise the &ldquo;Last Updated&rdquo; date at the bottom of the document. We will also notify you about changes in this Privacy Policy to ensure that you are aware of it.</p>

          <p>However, we suggest that you frequently check the date of this policy whenever you access our Products and Services and review this Privacy Policy on a regular basis to keep yourself updated of any changes.</p>

          <p>Last updated Nov 01, 2022</p>
        </div>
      </section>

      <Footer {...sendData} />
    </>
  )
}

export default Index;