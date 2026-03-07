import ServicePage from '../ServicePage'
import content from '../../../../content/content.json'

export default function AdditionalServicesComponent() {
  return <ServicePage data={content.additional_services} />
}
