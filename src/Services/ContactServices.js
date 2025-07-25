const contacts = [
    {
        id: 1,
        name: "Pepe",
        description: "Solo vives una vez, pero no te olvides de mí",
        avatar: "https://cdn.pixabay.com/photo/2023/01/07/09/20/ai-generated-7702855_1280.jpg",
        lastConnection: "15:23",
        connectionStatus: "offline",
        messages: [
            {
            emisor: "Yo",
            hora: "23:10",
            id: 1,
            texto: "Hola Juan",
            status: "visto",
            },
            {
            emisor: "Otro",
            hora: "23:11",
            id: 2,
            texto: "Hola, que tal?",
            status: "visto",
            },
            {
            emisor: "Yo",
            hora: "23:12",
            id: 3,
            texto: "Excelente, y tu?",
            status: "visto",
            }
        ]
    },
    {
        id: 2,
        name: "Juan",
        description: "Hace frío",
        avatar: "https://img.freepik.com/premium-photo/baby-kawaii-cartoon-dragon-vector-illustration_750724-6476.jpg?w=2000",
        lastConnection: "now",
        connectionStatus: "online",
        messages: [
            {
            emisor: "Yo",
            hora: "23:10",
            id: 1,
            texto: "Hola",
            status: "visto",
            },
            {
            emisor: "Otro",
            hora: "23:11",
            id: 2,
            texto: "Hola, que tal?",
            status: "visto",
            },
            {
            emisor: "Yo",
            hora: "23:12",
            id: 3,
            texto: "Todo esta bien?",
            status: "visto",
            }
        ]
    },
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
    return null
}