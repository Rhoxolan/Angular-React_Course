import cossack_rog from "./images/cossack_rog.jpeg";
import flowers_clock from "./images/flowers_clock.jpg";

export default function Attractions() {
    return (
        <>
            <p>
                Other popular attractions of the Kryviy Rih:
            </p>
            <p>
                <div>
                    The Flower Clock:
                </div>
                <img src={flowers_clock} width='750px' alt="Krivyi Rih Flower Clock"></img>
                <div>
                    The Cossak Rog monument:
                </div>
                <img src={cossack_rog} width='750px' alt="Krivyi Rih Cossack Rog Monument"></img>

            </p>
        </>
    );
}