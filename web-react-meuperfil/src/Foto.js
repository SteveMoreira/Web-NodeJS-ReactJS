import React, { Component } from 'react';
import './Foto.css';

class Foto extends Component {
    render() {
        let img =
        'https://avatars.githubusercontent.com/u/88863342?v=4';

       

        return (
            <img src={img} width={230} height={190} />
                       
        );
    }
}
export default Foto;