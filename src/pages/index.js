import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TableComponent from "../components/table"
import Searchbar from "../components/searchbar"


const tableData = {
  Header: 'Table',
  columns: ['EndrollementNo', 'StudentName', 'Branch', 'ContactNumber'],
  rows: [{
    'EndrollementNo': '0511CS151018',
    'StudentName': 'Sonu',
    'Branch': 'CSE',
    'ContactNumber': '8756514208'
  },
  {
    'EndrollementNo': '0511ES151010',
    'StudentName': 'Aryan',
    'Branch': 'EC',
    'ContactNumber': '9956514200'

  },
  {
    'EndrollementNo': '0511EE151011',
    'StudentName': 'Sumit',
    'Branch': 'EE',
    'ContactNumber': '8156512201'
  },
  {
    'EndrollementNo': '0511ME151018',
    'StudentName': 'Kartic',
    'Branch': 'ME',
    'ContactNumber': '9956514110'
  }
  ]
};


const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{ maxWidth: `3px`, marginBottom: `1.45rem` }}>
      <Image />
     
    </div>
    
    <Searchbar />
    

    <TableComponent tableData={tableData} />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
