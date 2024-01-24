export const getAllTickets = () => {
    return fetch(`http://127.0.0.1:8088/serviceTickets?_embed=employeeTickets`).then((res) => res.json())
}