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
        <title>Onebox - Tac</title>
      </Head>
      <Navbar {...sendData} />

      <section id="about" style={{ paddingTop: "50px !important" }}>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Terms of Service </h1>

          <p>These terms of service (here in after known as &ldquo;Agreement&rdquo;), govern your acquisition and use of Onebox&rsquo; solutions, both for the trial and paid versions. By proceeding to sign up, register, or access Onebox&rsquo; solutions, you are agreeing to the terms of service stated in this Agreement.</p>

          <p style={{ fontWeight: "bold" }}>Definitions</p>

          <p>&middot; &ldquo;Onebox&rdquo; located at Jl. Pinang 9A, Margonda Raya, Depok, West Java, Indonesia 16424 including PT Ciptadra Softindo.</p>

          <p>&middot; The Customer and Onebox shall hereinafter be individually referred to as &quot;Party&quot; and collectively as &ldquo;Parties&quot;.</p>

          <p>&middot; &ldquo;Onebox Solution&rdquo; shall mean the set of client and server software applications licensed to the Customer by Onebox, as well as other services rendered to Customer by Onebox. This includes, but not limited to, Omnichannel Contact Center as well as the accelerator packages for enterprise messaging or online consultation solutions.</p>

          <p>&middot; A user is counted when he/she connects to Onebox&rsquo; servers by using Onebox Solution from his/her application, within a calendar month. A connection is required to do any types of communication between clients and servers. Without a connection, clients will not be able to send messages, listen for new messages, read/retrieve past messages, update user profile etc.</p>

          <p>&middot; &ldquo;Customer Data&rdquo; means data or content contained in the messages or data streams published by Customer or its users to the Onebox Solution.</p>

          <p>&middot; &quot;Uptime Percentage&quot; is calculated by subtracting from 100% the percentage of minutes during the month in which the Onebox Solution, as applicable, was in the state of &quot;Unavailable.&quot; Uptime Percentage measurements exclude downtime resulting directly or indirectly from any Onebox Exclusion (as defined below).</p>

          <p>&middot; &quot;Onebox Exclusions&quot; shall mean: Any unavailability, suspension or termination of Onebox Solution performance caused by factors outside of Onebox&rsquo; reasonable control. This includes force majeure events, scheduled maintenance or maintenance requested by the Customer, or the suspension and termination of the Customer&apos;s right to use Onebox Solution in accordance with the Order Form (collectively, the &quot;Onebox Exclusions&rdquo;).</p>

          <p>&middot; &ldquo;Order Form(s)&rdquo; means the form evidencing an order for Onebox Solution submitted online or in written or electronic form, specifying, among other things, the Effective Date, the applicable Fees, the billing period and others. Each such Order Form is automatically incorporated into and becomes a part of this Agreement.</p>

          <p>&middot; &quot;Unavailable&quot; means that Onebox servers servicing traffic either do not respond at all or respond erroneously with unexpected results.</p>

          <p>&middot; &ldquo;Intellectual Property Rights&rdquo; means all (i) copyrights (including, without limitation, the right to reproduce, distribute copies of, display and perform the copyrighted work and to prepare derivative works), copyright registrations and applications, trademark rights (including, without limitation, registrations and applications), patent rights, trade names, mask-work rights, trade secrets, moral rights, author&rsquo;s rights, privacy rights, publicity rights, algorithms, rights in packaging, goodwill and other proprietary rights, and all renewals and extensions thereof, regardless of whether any of such rights arise under the laws of the Singapore or any other state, country or jurisdiction; (ii) intangible legal rights or interests evidenced by or embodied in any idea, design, concept, technique, invention, discovery, enhancement or improvement, regardless of patentability, but including patents, patent applications, trade secrets, and know-how; and (iii) all derivatives of any of the foregoing.</p>

          <p>&middot; &ldquo;Trademarks&rdquo; means all common law or registered trademark, service mark, trade name and trade dress rights and similar or related rights arising under any of the laws of Singapore, Indonesia or any other country or jurisdiction, whether now existing or hereafter adopted or acquired.</p>

          <p style={{ fontWeight: "bold" }}>Licenses</p>

          <p style={{ fontWeight: "bold" }}>LICENSES TO ONEBOX SOLUTION</p>

          <p>Subject to the terms of this Agreement, Onebox grants to Customer and Customer accepts from Onebox a non-exclusive, non-transferable limited license and right to access the Onebox Solution.</p>

          <p style={{ fontWeight: "bold" }}>CUSTOMER DATA</p>

          <p>Customer understands that the technical processing and transmission of the Onebox Services, including any Customer Data provided by Customer, may involve (i) transmissions over various third party networks, and (ii) changes to conform and adapt to technical requirements of connecting networks or devices, and Customer consents to such transmission and changes.</p>

          <p>Customer and Onebox acknowledge that Customer Data may from time to time include personally identifiable information (&ldquo;Personal Data&rdquo;) to the extent Customer or End Users upload Personal Data through the Customer Service. Customer agrees that, as with all Customer Data, the uploading of Personal Data is exclusively within the control of Customer or End Users, as applicable. Any Personal Data uploaded as part of the Customer Data is subject to the terms of Onebox&apos; Privacy Policy, incorporated herein by reference and made part of this Agreement.</p>

          <p style={{ fontWeight: "bold" }}>USE OF TRADEMARKS</p>

          <p>Each party shall strictly comply with all standards with respect to the other party&rsquo;s marks which may be furnished by such party from time to time. Onebox may identify Customer by name, with or without use of the Customer&rsquo;s trademark, in general promotional lists of Onebox&apos; customers without Customer&rsquo;s prior consent.</p>

          <p style={{ fontWeight: "bold" }}>LICENSE RESTRICTIONS</p>

          <p>Customer shall not do any of the following: (i) distribute, sell, assign, transfer, or sublicense the Onebox Solution, or any part thereof, to any third party; (ii) except as specifically set forth in this Agreement, adapt, modify, translate, reverse engineer, decompile, disassemble, or create derivative works based on the Onebox Solution or any part thereof (iii) copy any of Onebox Solution, in whole or in part, without including appropriate copyright notices; and/or (iv) utilize Onebox&apos; sandbox environment for commercial use, use in an app store or app marketplace, or in a manner that is noncompliant with the restrictions set forth by Onebox.</p>

          <p>&middot; Delivery of Onebox Solution. Subject to the terms and conditions of this Agreement, Onebox shall provide to Customer the Onebox Solution together with support packages and their corresponding SLAs (where applicable) which Customer has signed up for.</p>

          <p>&middot; Suspension / Deactivation of an End User Account. Onebox reserves the right, but not the obligation, to suspend or deactivate the Customers&rsquo; account and access to Onebox Solution at any time for any reason, including:</p>

          <p>o The malicious use of Onebox Solution or the use of Onebox Solution to facilitate illegal activity;</p>

          <p>o If continued operation of the Customer Service threatens the stability or performance of the Onebox Services or Onebox Platform;</p>

          <p>o Failure to make timely payment to Onebox, despite reminders sent to Customer&rsquo;s registered email address.</p>

          <p>&middot; Availability. Onebox commits to an uptime of 99%. The Onebox Solution shall be usable 99% of the time (tracked on a monthly basis).</p>

          <p style={{ fontWeight: "bold" }}>Support To Clients</p>

          <p style={{ fontWeight: "bold" }}>FOR ENTERPRISE : PAID SUPPORT PACKAGES</p>

          <p>&middot; Details of the paid support packages and the corresponding SLA can be requested via support.onebox@ciptadrasoft.com.</p>

          <p style={{ fontWeight: "bold" }}>Fees &amp; Payment Terms</p>

          <p>&middot; Customer&rsquo;s subscription fee is based on Active Users (MAU) and additional services requested (such as Professional Services and Add-ons), as agreed upon by both parties.</p>

          <p>&middot; Services Fees. Services fees will be subjected to a 30-day terms of payment and/or other terms of payments pre-agreed by both parties. Any late payment may result in termination of services by Onebox.</p>

          <p>&middot; Subscription Fees. Subscription fees may be paid on a monthly or annual term of payment and shall remain fixed unless customer (i) exceed the Maximum User limit (pegged to each pricing tier), (ii) upgrade products or base packages, (iii) subscribe to additional features or products, including additional MAU, or (iv) other reasons which shall be specified in writing.</p>

          <p>&middot; Holding Period. For monthly or annual subscription fees, Customer is given 7 days to make the necessary payment, from the date of invoice. This period is the holding period. Once the holding period is over and no payment is received, Onebox reserves the right, but not obligation, to deactivate Customer&rsquo;s account.</p>

          <p>&middot; Reactivation. Customer may reactivate its account from its own admin dashboard and/ or by contacting Onebox&rsquo; technical support to reactivate its account. Reactivation is only allowed upon the settlement of any outstanding invoices.</p>

          <p>&middot; Onebox may increase or add new fees and charges for any existing solution/services that the Customer is using by giving at least 30 days&rsquo; prior notice to the Customer.</p>

          <p>&middot; All payment obligations are non-cancelable and all amounts paid are non-refundable, except as specifically provided for in this Agreement. All fees are due and payable in advance throughout the Subscription Term.</p>

          <p>&middot; All Subscription fees can only be paid through Bank Transfer.</p>

          <p style={{ fontWeight: "bold" }}>Term &amp; Termination</p>

          <p>&middot; This Agreement shall commence on the Effective Date and unless otherwise indicated on an Order Form, shall continue until on a month-to-month basis until terminated.</p>

          <p>&middot; No Refunds. Onebox does not provide refunds if Customer decides to terminate the agreement in the middle of the month (for monthly terms of payment) or within the period of 1 year (for annual terms of payment).</p>

          <p>&middot; Onebox may terminate this Agreement, without cause, upon providing Customer with thirty (30) days prior written notice. Notwithstanding the foregoing, Onebox reserves the right to fully or partially discontinue, at any time and from time to time, temporarily or permanently, any free, trial, or beta versions with or without notice.</p>

          <p>&middot; Upon expiration or termination of this Agreement, all licenses granted to the Onebox Solution shall expire. Onebox shall discontinue the provision of the Onebox Solution, and Customer shall immediately pay any outstanding invoices for services rendered through the date of termination.</p>

          <p style={{ fontWeight: "bold" }}>Confidentiality</p>

          <p>Unless otherwise agreed between the Parties in writing, strictest commercial confidence shall be maintained with respect to all information received/given, including but not limited to, fee arrangements, business and marketing strategies and decisions, unless explicitly required under law. Where so required to disclose such information, all parties shall ensure that all parties are aware of this where possible and reasonable to do so. For this purpose, the Parties shall enter into a Non-Disclosure Agreement if necessary.</p>

          <p>Upon expiration or termination of an Order Form for any reason or at the written request of either Party during the term of an Order Form, the other Party shall promptly return or destroy all the Confidential Information.</p>

          <p style={{ fontWeight: "bold" }}>Indemnity &amp; Dispute Resolution</p>

          <p>&middot; Customer agrees to indemnify, defend and hold harmless Onebox from any claims, demands or causes of action by any third party that relate to this Agreement.</p>

          <p>&middot; Any controversy, dispute or claim arising out of, or related to this Agreement by either party shall be settled by arbitration, in accordance with the rules, then applicable, of the Indonesia International Arbitration Centre; and the parties hereto agree that the decision or award thereby shall be final and shall be binding on all parties.</p>

          <p>&middot; Arbitration decisions shall be made by the board composed of three members, one chosen by each party hereto and a third chosen by the two previously selected</p>

          <p style={{ fontWeight: "bold" }}>General Terms</p>

          <p style={{ fontWeight: "bold" }}>ENTIRE AGREEMENT AND WAIVER</p>

          <p>This Agreement contains the entire Agreement between the parties here to and supersedes all prior and contemporaneous Agreements, negotiations and understandings between the parties hereto, relating to the subject matter hereof, and except as noted in this agreement. There are no other understandings, statements, promises, or inducements, oral or otherwise, contrary to the terms of this Agreement. No representations, warranties, covenants or conditions, express or implied, whether by statute or otherwise, other than as set forth herein have been made by any party hereto. No waiver of any term, provision, or condition of this Agreement, whether by conduct or otherwise, in any one or more instances, shall be deemed to be, or shall constitute, a waiver of any other provision hereof, whether or not similar, nor shall such waiver constitute a continuing waiver, and no waiver shall be binding unless executed in writing by the party making the waiver.</p>

          <p style={{ fontWeight: "bold" }}>PARTIES IN INTEREST</p>

          <p>Nothing in this Agreement whether express or implied, is intended to confer upon any person other than the parties hereto and their respective heirs, representatives, successors and permitted assigns, any rights or remedies under, or by reason of, this Agreement, nor is anything in this Agreement intended to relieve or discharge the liability of any other party hereto, nor shall any provision hereof give any entity any right of subrogation against, action over or against any party.</p>

          <p style={{ fontWeight: "bold" }}>ASSIGNMENT</p>

          <p>BOTH the Customer and Onebox shall not voluntarily or by operation of law assign or otherwise transfer the obligations incurred on its part pursuant to the terms of this Agreement without the prior written consent of the other party. Notwithstanding the foregoing, Onebox may assign or transfer this Agreement or any rights or obligations hereunder without Customer&rsquo;s consent to a third party acquirer of all, or substantially all, of the assets or business of Onebox, whether by sale, merger, or otherwise. Except as provided in this section, any attempts by either Party to assign any of its rights or delegate any of its duties hereunder without the prior written consent of the other Party shall be null and void.</p>

          <p style={{ fontWeight: "bold" }}>SEVERABILITY</p>

          <p>Should any part, term, or provision of this Agreement, or any documents required herein be declared invalid, void, or unenforceable, all remaining parts, terms and provisions hereof shall remain in full force and effect and shall in no way be invalidated, impaired or affected thereby.</p>

          <p style={{ fontWeight: "bold" }}>FORCE MAJEURE</p>

          <p>Any delay or failure in the performance by either Party hereunder shall be excused if and to the extent caused by the event of a Force Majeure. &quot;Event of Force Majeure&quot; means an event beyond the control of the either Party, which prevents a either Party from complying with any of its obligations under this Agreement, including but not limited to:</p>

          <p>&middot; act of God (such as, but not limited to, fires, explosions, earthquakes, drought, tidal waves and floods);</p>

          <p>&middot; war, hostilities (whether war be declared or not), invasion, act of foreign enemies, mobilisation, requisition, or embargo;</p>

          <p>&middot; rebellion, revolution, insurrection, or military or usurped power, or civil war;</p>

          <p>&middot; contamination by radio-activity from any nuclear fuel, or from any nuclear waste from the combustion of nuclear fuel, radio-active toxic explosive, or other hazardous properties of any explosive nuclear assembly or nuclear component of such assembly;</p>

          <p>&middot; riot, commotion, strikes, go slows, lock outs or disorder, unless solely restricted to employees of the Supplier or of his Subcontractors;</p>

          <p>&middot; acts or threats of terrorism;</p>

          <p>&middot; discontinuation or disruption of electricity supply and/or internet connection which is beyond either Party&rsquo;s control; or</p>

          <p>&middot; other unforeseeable circumstances beyond the control of the either Party, against which it would have been unreasonable for the affected party to take precautions and which the affected party cannot avoid even by using its best efforts.</p>
        </div>
      </section>

      <Footer {...sendData} />
    </>
  )
}

export default Index;