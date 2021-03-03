class DataTable{
    element;
    headers;
    items;
    copyItems;
    selected;
    pagination;
    numberOfEntries;
    headersButtons;

    constructor(selector, headersButtons){

        this.element = document.querySelector(selector);

        this.headers = [];
        this.items = [];
        this.pagination ={ total:0,
            noItemsperpage: 0,
            noPages: 0,
            actual: 0,
            pointer: 0,
            diff: 0,
            lastPageBeforeDots: 0,
            noButtonsBeforeDots: 4
        };

        this.selected = [];
        this.numberOfEntries = 5;
        this.headersButtons = headersButtons;

    }
    parse(){
        const headers = [...this.element.querySelector('thead tr').children];
        const trs = [...this.element.querySelector('tbody').children];
        
        headers.forEach(element=>{
            this.headers.push(element.textContent);
        });
            console.log(this.headers);
     
    }
}