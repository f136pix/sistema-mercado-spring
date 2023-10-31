function ListComponent() {
    const hoje = new Date()
    const dataFutura = new Date(hoje.getFullYear()+ 12, hoje.getMonth(), hoje.getDay())

    const afazeres = [{id: 1, descricao:"Arrumar Açougue", feito: false, dataAlvo: dataFutura},{id: 2, descricao:"Organizar Gondolas", feito: false, dataAlvo: hoje},{id: 3, descricao:"Arrumar Lampada", feito: false, dataAlvo: dataFutura}]

    return (
        <div className="ListaTarefasComponent container">
            <h1>Tarefas Pendentes</h1>
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Descricao</td>
                        <td>Completo</td>
                        <td>Data Final</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        afazeres.map(afazer => {
                            return(
                                <tr key={afazer.id}>
                                    <td>{afazer.id}</td>
                                    <td>{afazer.descricao}</td>
                                    <td>{afazer.feito.toString()}</td>
                                    <td>{afazer.dataAlvo.toDateString()}</td>
                                </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ListComponent