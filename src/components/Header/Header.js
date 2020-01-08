import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
    render() {
        return (
        <div class="view d-flex justify-content-center" id="intro">
            <div class="col-12 full-bg-img d-flex justify-content-center align-items-center" id="intro-text">
                <div class="div" id="intro-text_ctn">
                    <h1 class="text-center mb-5 animated fadeInUp">Narciochowa strona</h1>
                    <h6 class="font-weight-normal text-center animated fadeInUp">
                        <p>Kilka par nart i butów do sprzedania, większość w stanie dobrym lub bardzo dobrym, czasem nówki. Narty często serwisowane ręcznie. </p>
                        <p>Jeśli podoba Ci się jakiś model lub chcesz dopytac o inny, to śmiało.</p> 
                        <p>Jeśli potrzebujesz szpej typu kijki, kask i inne bajery, to też da się załatwić.</p>
                    </h6>
                    <div class="row d-flex align-items-center justify-content-center mt-5 animated fadeInUp">
                        <a href="#skis"><button type="button" class="btn btn-info mx-3">Narty</button></a>
                        <a href="#boots"><button type="button" class="btn btn-info mx-3">Buty</button></a>
                        <a href="#footer"><button type="button" class="btn btn-outline-light mx-3">Kontakt</button></a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;