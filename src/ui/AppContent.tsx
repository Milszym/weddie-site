import { Contact } from "./landing/contact/Contact"
import { DomainInstructions } from "./landing/domainInstructions/DomainInstructions"
import { RockingAunt } from "./landing/rockingAunt/RockingAunt"
import { SiteOffers } from "./landing/siteOffers/SiteOffers"
import { Title } from "./landing/title/Title"
import { UncleOnAWedding } from "./landing/unlceOnAWedding/UncledOnAWedding"

export const AppContent = () => {
    return <>
        <Title />
        <SiteOffers />
        <UncleOnAWedding />
        <RockingAunt />
        <DomainInstructions/>
        <Contact/>
    </>
}