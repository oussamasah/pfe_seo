import { Package } from '../../types/package';
import insight from "../../../public/insight.png"
const packageData: Package[] = [
  {
    name: 'Avocat - www.avocat-marseille.com',
    etat: "Active",
    offre: "Moment",
    type: "Fabrication",
    invoiceDate: `Jan 13,2023`,
    rankevolution: 'Hors 30',
    ranking: '+4',
    audit: "75%",
    affaire:"Bloquée"

  },
  {
    name: 'Standard Package',
    etat: "Active",
    offre: "Master",
    type: "Lancement",
    invoiceDate: `Jan 13,2023`,
    rankevolution: 'Top 10',
    ranking: '-1',
    audit: "70%",
    affaire:"Fabrication"
  },{
    name: 'Avocat - www.avocat-paris.com',
    etat: "Active",
    offre: "Master",
    type: "Lancement",
    invoiceDate: `Jan 13,2023`,
    rankevolution: 'Top 10',
    ranking: '+2',
    audit: "80%",
    affaire:"Actif / Suivi"

  },
  {
    name: 'Avocat - www.ostheopathe-paris.com',
    etat: "Active",
    offre: "Start",
    type: "Renouvelement",
    invoiceDate: `Jan 13,2023`,
    rankevolution: 'Top 5',
    ranking: '-3',
    audit: "50%",
    affaire:"Livraison"

  },
  {
    name: 'Avocat - www.avocat-marseille.com',
    etat: "Active",
    offre: "Moment",
    type: "Fabrication",
    invoiceDate: `Jan 13,2023`,
    rankevolution: 'Top 10',
    ranking: '+4',
    audit: "75%",
    affaire:"Bloquée"

  },
  {
    name: 'Standard Package',
    etat: "Active",
    offre: "Master",
    type: "Lancement",
    invoiceDate: `Jan 13,2023`,
    rankevolution: 'Top 30',
    ranking: '-1',
    audit: "70%",
    affaire:"Fabrication"
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto js-datatable">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Site
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Trafic
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Ranking
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Evolution
              </th>

              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Site Health
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Type du referancement
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Offre
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status d'affaire
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Etat
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Détails
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
            
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <img src={insight} />
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${ packageItem.rankevolution=="Hors 30"?"text-red-700":packageItem.rankevolution=="Top 30"?"text-red-500":packageItem.rankevolution=="Top 20"?"text-orange-600":packageItem.rankevolution=="Top 10"?"text-teal-600":"text-lime-600"}`}
                  >
                    {packageItem.rankevolution}
                   
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ${packageItem.ranking.includes("+") ? "text-success" : "text-danger"}`}
                  >
                    {packageItem.ranking}
                    {packageItem.ranking.includes("+") ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                    </svg>
                    }

                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full  py-1 px-3 text-sm font-medium `}
                  >
                    {packageItem.audit}


                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full  py-1 px-3 text-sm font-medium  ${packageItem.type == "Lancement" ? "bg-warning text-white" : packageItem.type == "Fabrication" ? "bg-cyan-500 text-white" : "bg-danger text-white"}`}
                  >
                    {packageItem.type}


                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full  py-1 px-3 text-sm font-medium  ${packageItem.offre == "Master" ? "bg-indigo-700 text-white" : packageItem.offre == "Moment" ? "bg-violet-800 text-white" : "bg-fuchsia-900 text-white"}`}
                  >
                    {packageItem.offre}


                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full  py-1 px-3 text-sm font-medium  ${packageItem.affaire == "Livraison" ? "bg-cyan-600 text-white" : packageItem.affaire == "Fabrication" ? "bg-violet-800 text-white" : "bg-teal-500 text-white"}`}
                  >
                    {packageItem.affaire}


                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full  py-1 px-3 text-sm font-medium  ${packageItem.etat == "Active" ? "bg-success text-white" : packageItem.type == "Fabrication" ? "bg-cyan-500 text-white" : "bg-danger text-white"}`}
                  >
                    {packageItem.etat}


                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">

                    <button className="hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>

                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
