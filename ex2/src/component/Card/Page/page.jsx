import { Card } from "../Card";

export function Page(prop) {
    return (
        <div class="offer">
            <div class="offer-section">
                <h2 class="offer-section__title">{offer.title}</h2>
                <p class="offer-section__description">{offer.desc}</p>
                <div class="box">
                    <ul class="offer-box">
                        {prop.offer.map()
                        <li <Card />
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}