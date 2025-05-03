export interface FaqItem {
    title: string
    description: string
}

export interface FaqSection {
    faqItems: FaqItem[]
    name: string
}

export const ceremonyFaqItems: FaqItem[] = [
    {
        title: 'Na którą godzinę jest ceremonia?',
        description: 'Ceremonia odbędzie się o godzinie 16:30'
    } as FaqItem,
    {
        title: 'Czy jest zorganizowany dojazd i powrót?',
        description: 'Niestety nie. Dojazd i powrót we własnym zakresie. Jeżeli potrzebujesz transportu, daj nam znać, spróbujemy skontaktowac Cię z innymi goścmi, którzy mają miejsca w samochodzie 😉'
    } as FaqItem,
    {
        title: 'Czy na ceremonii będą krzesełka?',
        description: 'Prawdopodobnie będą, aczkolwiek w ograniczonej ilości! Prosimy o zostawienie dwóch pierwszych rzędów dla rodziny Pary Młodej. Co do reszty krzesełek obowiązuje zasada kto pierwszy ten lepszy.'
    } as FaqItem,
    {
        title: 'Czy na miejscu jest parking?',
        description: 'Tak, na terenie Zielonej Bramy jest kilka darmowych parkingów, na pewno znajdziecie dla siebie miejsce!'
    } as FaqItem,
    {
        title: 'Kiedy składamy życzenia?',
        description: 'Życzenia będą składane po ceremonii również na świeżym powietrzu. Konferansjer ogłosi kiedy.'
    } as FaqItem,
    {
        title: 'Czy chcecie dostać kwiaty?',
        description: 'Nie, jeżeli chcecie nam zrobić prezent to zamiast kwiatów chętnie przyjmiemy książki, które uznajecie za warte przeczytania 😊'
    } as FaqItem,
]

export const weddingFaqItems: FaqItem[] = [
    {
        title: 'Czy będzie menu vegańskie?',
        description: 'Oczywiście, ale potrzebujemy informacje o chęci skorzystania z tej opcji, więc koniecznie daj nam o tym znać!'
    } as FaqItem,
    {
        title: 'Czy obok sali jest przestrzeń dla gości na świeżym powietrzu?',
        description: 'Tak, dookoła sali weselnej jest pełno terenów zielonych z których śmiało możecie korzystać, żeby zaczerpnąć świeżego powietrza.'
    } as FaqItem,
    {
        title: 'Jaka będzie muzyka?',
        description: 'Spodziewaj się wszystkiego po trochu, aczkolwiek Disco Polo u nas nie poleci.'
    } as FaqItem,
    {
        title: 'Czy można gdzieś zobaczyć menu weselne?',
        description: 'Jeszcze nie, ale już niedługo pojawi się na stronie!'
    } as FaqItem,
    {
        title: 'Czy jest gdzieś rozpiska stolików?',
        description: 'Jeszcze nie, ale już niedługo pojawi się na stronie!'
    } as FaqItem,
    {
        title: 'Czy jest gdzieś harmonogram wydarzenia?',
        description: 'Jeszcze nie, ale już niedługo pojawi się na stronie!'
    } as FaqItem,
]

export const accomodationFaqItems: FaqItem[] = [
    {
        title: 'Czy jest możliwosc noclegu?',
        description: 'Oczywiście, ale potrzebujemy informacje o chęci skorzystania z tej opcji, więc koniecznie daj nam o tym znać! Liczba miejsc ograniczona.'
    } as FaqItem,
    {
        title: 'Gdzie jest nocleg?',
        description: 'Nocleg jest w jednym z trzech budynków na terenie Zielonej Bramy. Poinformujemy o rozkładzie pokojów bliżej terminu wesela.'
    } as FaqItem,
    {
        title: 'Przyjechałem, co teraz?',
        description: 'Jeżeli zgłosiłeś chęć skorzystania z noclegu, w dniu wesela (lub trochę wcześniej) powinieneś dostać SMSa z nazwą budynku, numerem pokoju oraz kodem. Udaj się do odpowiedniego budynku i wpisz kod do drzwi wejściowych, następnie znajdź pokój i użyj tego samego kodu do drzwi pokoju.'
    } as FaqItem,
    {
        title: 'Czy dla gości nocujących przewidziane jest śniadanie?',
        description: 'Tak, w niedzielę 13 lipca goście mają zagwarantowane śniadanie. Odbędzie się ono na sali restauracyjnej w Białym Dworku. Po wejściu do dworku kierujcie się na lewo.'
    } as FaqItem,
    {
        title: 'Czy na miejscu jest parking?',
        description: 'Tak, na terenie Zielonej Bramy jest kilka darmowych parkingów, na pewno znajdziecie dla siebie miejsce!'
    } as FaqItem,
    {
        title: 'O której zaczyna i kończy się doba hotelowa?',
        description: 'Doba hotelowa zaczyna się o 15:00 a kończy o 12:00. Jeżeli chcesz przyjechać szybciej, daj nam znać, postaramy się to zorganizować 😊'
    } as FaqItem,
]

export const faqSections = [
    {
        faqItems: ceremonyFaqItems,
        name: "Ceremonia"
    } as FaqSection,
    {
        faqItems: weddingFaqItems,
        name: "Wesele"
    } as FaqSection,
    {
        faqItems: accomodationFaqItems,
        name: "Nocleg"
    } as FaqSection
]