import { useEffect, useState } from "react";
import { fetchVehicleData } from "../../Api/api";
import CamperCardList from "../../components/CamperCardsList/CamperCardsList";

const Catalog = () => {

    const [info, setInfo] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)

    useEffect(() => {
        async function data() {
        const response = await fetchVehicleData();
        setInfo(response);
        }
        data();
    }, [])

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4)
    }

    return (
        <div>
            <CamperCardList data={info.slice(0, visibleCount)} />
            {visibleCount < info.length && (
                <button onClick={loadMore}>Load more</button>
            )}
        </div>
    )
}
export default Catalog 