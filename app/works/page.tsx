import Navbar from "../../components/Navbar"
import PageTransition from "../../components/PageTransition"
import PageHeader from "../../components/PageHeader"
import WorksGrid from "../../components/WorksGrid"


export default function Works() {
  return (
    <PageTransition>
      <Navbar />
      <PageHeader title="Our Works" />
      <WorksGrid />
    </PageTransition>
  )
}
