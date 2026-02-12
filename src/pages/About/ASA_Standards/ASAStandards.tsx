

export default function ASAStandards() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero / Header Section */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl md:text-2xl font-semibold mb-2 opacity-90">Association of Subscription Agents and Intermediaries</h4>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">International Guidelines for Journal Subscriptions (IGJS)</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              This document has been developed to meet the needs of academic organisations in the Middle East putting substantial numbers of research and scholarly serials out to tender with a single vendor. Its purpose is to advise librarians and serials vendors of good practice in this area. A specific aim of this document is to highlight and thus hopefully reduce, the instances of the fraudulent supply of serials - especially the supply of subscriptions ordered from publishers at the personal rate and supplied to libraries at the institutional rate
            </p>

            <div className="space-y-8">
              
              {/* Period of Subscription & Supply */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Period of Subscription & Supply</h3>
                <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The period of subscription must be a calendar year, starting on the 1st January and ending on 31st December each year. The subscribing organization (the Client) must deliver the subscription orders to the Supplier (the person or company acting as a subscription agent to the Client) not later than November (at least one month, preferably two before the start of the subscription year), to enable time for the Supplier to place orders with the Publishers and for the Publishers to process and deliver the first issue of the new subscription year
                  </li>
                  <li className="pl-2">
                     The Supply Period will be 18 months, starting in January each year, until  30 June in the following subscription year to enable any late journals to be supplied within the contract and to minimize any problems with the postal service.
                  </li>
                  <li className="pl-2">
                     The Supply Period can be extended with the official approval of the Client. The Supplier will use their best endeavours to handle and supply any missing issues
                  </li>
                </ol>
              </div>

              {/* Subscription Procedures */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Subscription Procedures</h3>
                <ol start={4} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier must enter all subscriptions in the name of the Client to the Publishers (including scientific societies).
                  </li>
                  <li className="pl-2">
                    The Supplier must submit to the Client proof that subscriptions were implemented in the Clients name with the Publishers. This can be in the form of a copy pro-forma invoice or subscription code number. Any misuse of the client organization’s name must be avoided.
                  </li>
                  <li className="pl-2">
                    Consolidation services should supply the Client’s details to the publisher where required to enable access to the electronic component of any subscription.
                  </li>
                </ol>
              </div>

              {/* Institutional Subscription & Personal Subscription */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Institutional Subscription & Personal Subscription</h3>
                <ol start={7} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier will confirm to the Client that the subscription was ordered at the Publishers’ ‘Institutional Subscription Rate’ and not at the ‘Personal Subscription Rate’.
                  </li>
                  <li className="pl-2">
                    It is strictly forbidden to take out personal subscriptions on behalf of the Client organization at the Personal Subscription Rate. All subscriptions must be entered at the Institutional Subscription Rate
                  </li>
                  <li className="pl-2">
                    If illegal personal subscriptions are implemented then the Supplier and Client organization will be notified to the Publisher/s as performing a potentially illegal transaction. This information will be disseminated to:<br/><br/>
                    ASA: Association of Subscription Agents and intermediaries.<br/>
                    IPA: International Publishers Association<br/>
                    International authorities concerned with intellectual property protection.
                  </li>
                  <li className="pl-2">
                    All Suppliers who are members of the Association of Subscription Agents and Intermediaries are required to sign a declaration that they will provide the highest standards of professional ethics, and respect the subscription rates set by Publishers especially for institutional subscribers
                  </li>
                </ol>
              </div>

              {/* Journal Supply and Development */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Journal Supply and Development</h3>
                <ol start={11} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                     The Supplier must have a ‘plan of action’ to enable a minimum of 90% of any supply operation involving subscriptions to be delivered within the contracted period. The aim is always to supply 100%.
                  </li>
                  <li className="pl-2">
                    The Supplier must ensure that all journal prices are clearly shown on information provided to the Client
                  </li>
                  <li className="pl-2">
                    The Supplier must inform the Client of any changes to the required journals, especially:<br/>
                    <strong>Ceased journals.<br/>
                    Suspended journals.<br/>
                    Title changes.<br/>
                    ISSN changes.<br/>
                    Title mergers.<br/>
                    Frequency changes.</strong>
                  </li>
                </ol>
              </div>

              {/* Current Journals */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Journals</h3>
                <ol start={14} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    Current Journals are those with a starting subscription date outside the calendar year. If a Client organization is late with their ordering i.e. the order is received by the Supplier after November 30, the result may be the creation of many Current Journals which may run outside the calendar year i.e. from February to January or March to February etc depending on the Publishers policy with respect to those journals
                  </li>
                  <li className="pl-2">
                    The Supplier must inform the Client Organization of any such Current Journals which will run outside the calendar year. Within one week, the client organization must decide either to accept the non-calendar year subscription or cancel these Current Journals. The Supplier cannot be held responsible for such changes of subscription period when they arise from late subscription procedures by the Client Organization.
                  </li>
                </ol>
              </div>

              {/* Suspended Journals */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Suspended Journals</h3>
                <ol start={16} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier must inform the Client of any suspended journals with proof from the publisher and also refund the full subscription price of the suspended journals or that part of the subscription which will be unfulfilled
                  </li>
                </ol>
              </div>

              {/* Reports */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Reports</h3>
                <ol start={17} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                     The Supplier will provide the Client with a report every 3 months (or as agreed with the Client) for all subscriptions showing:<br/>
                    Subscriptions already ordered.<br/>
                    Claims for missing issues, action taken and the expected time to completion of such claims.<br/>
                    Additional information may also be shown as agreed between Client and Supplier.
                  </li>
                </ol>
              </div>

              {/* Free Supplements */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Free Supplements</h3>
                <ol start={18} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                     The Supplier will provide any free supplements to subscribed journals to the Client, or any free issues or newsletters.
                  </li>
                </ol>
              </div>

              {/* Electronic Access */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Electronic Access</h3>
                <ol start={19} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                     The Supplier must provide electronic access for the Client organization where the Publisher supplies free electronic access to their journals, or where the subscription is to an electronic journal. The Supplier must also supply the subscription code and number to enable the publisher and Client to set up electronic access
                  </li>
                </ol>
              </div>

              {/* Reporting Period */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Reporting Period</h3>
                <ol start={20} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier will agree with the Client the Reporting Period for reporting the status of subscriptions. These should generally be biweekly or monthly but other periods may be agreed between the parties involved.
                  </li>
                </ol>
              </div>

              {/* Communication */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Communication</h3>
                <ol start={21} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier must reply within one week to any official correspondence from the Client Organization.
                  </li>
                  <li className="pl-2">
                    The Supplier may arrange meetings with the Client Organization to provide updates and to solve any problems raised on a regular schedule eg bi-monthly
                  </li>
                  <li className="pl-2">
                    The Client shall make all claims for missing issues and/or access denials through the Supplier.
                  </li>
                </ol>
              </div>

              {/* Supplier Employees */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Supplier Employees</h3>
                <ol start={24} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier will submit information about the employees engaged on the Clients account to the Client. The employee's information must contain: Name, Job Title, Telephone, Fax and Email numbers and address. The Supplier will report any changes in the employees engaged on the Clients account.
                  </li>
                </ol>
              </div>

              {/* Renewal of Subscriptions */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Renewal of Subscriptions</h3>
                <ol start={25} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Supplier will contact the Client in September each year for the renewal operation so as to be sure that the subscriptions are made in due time, and to avoid any Current Journals.
                  </li>
                </ol>
              </div>

              {/* Advance Payment of Subscriptions */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Advance Payment of Subscriptions</h3>
                <ol start={26} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    Advance payment in full (100%) must be delivered from the Client to the Supplier in a timely manner to ensure no loss of continuity and the absence of Current Journals. The advance payment may be less than 100% by agreement between the Client Organization and Supplier.
                  </li>
                  <li className="pl-2">
                    The ASA (Association of Subscription Agents and Intermediaries) strongly recommend Client organizations pay the agreed advance payment promptly and in full, otherwise the Supplier may be unable to pay many publishers in time to open subscriptions for the Client. This can ‘open the door’ for an unscrupulous Supplier to supply what he likes and ignore those journals for which there is marginal profit in their supply. Prepayment by an agreed date by the Client to the Supplier prevents such problems from arising in the first place.
                  </li>
                </ol>
              </div>

              {/* Evaluation */}
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Evaluation</h3>
                <ol start={28} className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="pl-2">
                    The Client organization must evaluate, on an annual basis, the Supplier operation and service, and advise the Supplier in good time whether they wish to renew with the Supplier’s organization again,  or not.
                  </li>
                  <li className="pl-2">
                    The ASA does not advise renewing a contract with any supplier who delivers less than 80% of the subscriptions in the contract unless good reason can be shown for the non-supply such as ceased journals and problems due to late payments from the Client resulting in subscriptions required outside the contract period.
                  </li>
                </ol>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
