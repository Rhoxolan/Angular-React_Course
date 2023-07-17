import cossack_rog from "./images/cossack_rog.jpeg";
import flowers_clock from "./images/flowers_clock.jpg";
import boat_station from "./images/Lodochnaya_stancia.jpg";
import old_town from "./images/Kryvyi_Rih_Old_Town_(cropped).jpg";
import kvartal_95 from "./images/kvartal_95.jpg";

export default function Photos() {
    return (
        <>
            <p>
                All photos of the Kryvyi Rih:
            </p>
            <img className="mb-3" src={flowers_clock} width='750px' alt="Krivyi Rih Flower Clock"></img>
            <img className="mb-3" src={cossack_rog} width='750px' alt="Krivyi Rih Cossack Rog Monument"></img>
            <img className="mb-3" src={boat_station} width='750px' alt="Krivyi Rih Boat Station"></img>
            <img className="mb-3" src={old_town} width='750px' alt="Krivyi Rih Old Town"></img>
            <img className="mb-3" src={kvartal_95} width='750px' alt="Krivyi Rih 95 kvartal"></img>
        </>
    );
}