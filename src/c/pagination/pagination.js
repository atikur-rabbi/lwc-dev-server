import { LightningElement , api} from 'lwc';

const demopagination = [
    {id:1, value:1, class:"pagination-btn active"},
    {id:2, value:2, class:"pagination-btn"}
];
export default class Table2 extends LightningElement {
    @api pageCount;
    @api currentPage;
    allPages = demopagination;

    get copyPageCount() {
        if(this.pageCount || this.currentPage)
        {
            // console.log('pageCount: ', this.pageCount);
            this.generatePagination();
        }

        // this.copyPageCount();
    }

    constructor(event) {
        super();
        // this.pagination();
        // this.renderData();
    }

    connectedCallback() {
        this.renderData();
        this.copyPageCount();
    }

    renderedCallback() {
        // this.renderData();
    }

    renderData() {
        if (this.pageCount == "") {
            
        } else {
            // console.log('tableData: ', this.tableData);
            this.generatePagination();
        }
    }

    generatePagination() {
        console.log('Show page data: ', this.allPages);
        this.allPages = getArray(this.pageCount, this.currentPage );
        console.log('Show page count: ', this.pageCount);
        console.log('Show page data: ', this.allPages);
    }

}

export function getArray(n, start = 1) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        if (i+1 == start) 
            newArray.push(  {id:i, value:i+1, class:"pagination-btn active"} );
        else
            newArray.push(  {id:i, value:i+1, class:"pagination-btn"} );
    }
    return newArray;
}