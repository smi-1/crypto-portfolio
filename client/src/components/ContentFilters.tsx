
import list from "../assets/list.svg"
import grid from "../assets/grid-view-stroke-rounded.svg"
import searchIcon from "../assets/search-01-stroke-rounded.svg"
interface ContentFiltersProps {
    listView: boolean;
    setListView: (value: boolean) => void;
    search: string;
    setSearch: (value: string) => void;
}


export function ContentFilters({ listView, setListView, search, setSearch }: ContentFiltersProps) {
    console.log(searchIcon)
    return (
        <div className="content-filters">
            <div className="cf-left">

                <input 
                    style={{ backgroundImage: `url("${searchIcon}")`}}
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="search-bar"
                />
            </div>
            <div className="cf-right">
                <button
                    className={`filter filter-list ${listView ? "active" : ""}`}
                    onClick={() => setListView(true)}
                >
                 <img src={list} className="filter-src" alt="list" />   
                </button>
                <button
                    className={`filter filter-grid ${!listView ? "active" : ""}`}
                    onClick={() => setListView(false)}
                >
                    <img src={grid} className="filter-src" alt="list" />   
                </button>

            </div>
        </div>
    );
}