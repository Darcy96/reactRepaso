import { Component } from "react";
import { Card } from 'primereact/card';

class CardPrime extends Component {

    render() {
        const { title, subtitle, body, imagen } = this.props;

        const headerCard = (
            <img alt="Card" src={imagen ? imagen : "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"} />
        );

        return (
            <Card
                header={headerCard}
                className="cardStyles"
                title={title ? title : "Aqui estará el titulo"}
                subTitle={subtitle ? subtitle : "Aqui va el subtitulo"}>

                {body ? body : "Aqui va el contenido"}

            </Card>
        )
    }

}

export default CardPrime;

