class Prices extends React.Component{
    state = {
        currency: 'EUR',
        currencies: ['USD', 'GBP', 'EUR']
    }

    render(){
        let { currencies, currency } = this.state;
        let prop = currencies.find(item => item == currency);
        let obj = this.props.bpi[prop];
        return (
            <div>
               <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {obj.description} : 
                        <span className="badge badge-primary">
                            {obj.code}
                        </span>
                        <strong>
                            {obj.rate}
                        </strong>
                    </li>
               </ul>
               <br/>
               <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
                    {
                        currencies.map(curr => (<option value={curr}>{curr}</option>))
                    }
               </select>
            </div>
        )
    }
}

export default Prices