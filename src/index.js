import "@/scss/index.scss";
import { Header, Toolbar, Table, Formula, Excel } from "@/components";

const ENTRY_POINT_SELECTOR = "#app";

const excel = new Excel(ENTRY_POINT_SELECTOR, {
	components: [Header, Toolbar, Formula, Table]
});

excel.render();
