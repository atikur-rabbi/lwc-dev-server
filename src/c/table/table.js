import { LightningElement , track} from 'lwc';

// data array with 1000 records for month and savings 
const data = [
    {month: 'Jan', savings: 100},
    {month: 'Feb', savings: 200},
    {month: 'Mar', savings: 300},
    {month: 'Apr', savings: 400},
    {month: 'May', savings: 500},
    {month: 'Jun', savings: 600},
    {month: 'Jul', savings: 700},
    {month: 'Aug', savings: 800},
    {month: 'Sep', savings: 900},
    {month: 'Oct', savings: 1000},
    {month: 'Nov', savings: 1100},
    {month: 'Dec', savings: 1200},
    {month: 'Jan', savings: 1300},
    {month: 'Feb', savings: 1400},
    {month: 'Mar', savings: 1500},
    {month: 'Apr', savings: 1600},
    {month: 'May', savings: 1700},
    {month: 'Jun', savings: 1800},
    {month: 'Jul', savings: 1900},
    {month: 'Aug', savings: 2000},
];



export default class Table extends LightningElement {

    // data array
    @track data = data;

    renderedCallback(){
        const table = this.template.querySelector(".datatable");
        const trElements = table.querySelectorAll("tr");

        // console.log("table");
        // console.log(table);
        // console.log("trElements");
        // console.log(trElements);
        // console.log(trElements.length);
        this.showTable(1);
    }

    showTable(pageNo){

        const table = this.template.querySelector(".datatable");
        const trElements = table.querySelectorAll("tr");
        const perpage = 12;

        for(let i = 0; i < trElements.length; i++){
            console.log(trElements[i]);
            if(i < (pageNo * perpage) && i >= ((pageNo - 1) * perpage)){
                console.log("show");
                trElements[i].style.display = "table-row";
            }else{
                console.log("hide");
                trElements[i].style.display = "none";
            }
        }
    }
}