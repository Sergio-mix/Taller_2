class DataTable {
  element;
  headers;
  items;
  copyItems;
  selected;
  pagination;
  numberOfEntries;
  headersButtons;

  constructor(selector, headersButtons) {
    this.element = document.querySelector(selector);

    this.headers = [];
    this.items = [];
    this.pagination = {
      total: 0,
      noItemsperpage: 0,
      noPages: 0,
      actual: 0,
      pointer: 0,
      diff: 0,
      lastPageBeforeDots: 0,
      noButtonsBeforeDots: 4,
    };

    this.selected = [];
    this.numberOfEntries = 5;
    this.headersButtons = headersButtons;
  }
  parse() {
    const headers = [...this.element.querySelector("thead tr").children];
    const trs = [...this.element.querySelector("tbody").children];

    headers.forEach((element) => {
      this.headers.push(element.textContent);
    });

 console.log(this.headers);
    trs.forEach((tr) => {
      const cells = [...tr.children];

      const item = {
        id: this.generateUUID(),
        values: []
      };
      cells.forEach((cell) => {
        if (cell.children.length > 0) {
 
          const searchElement = [...cell.children][0];
          const search =searchElement.getAttribute('class');
          if(search!=null){
            item.values.push(`<span class='${search}'></span>`);
         
  
        } }else{
          item.values.push(cell.textContent);
        }
      });
      this.items.push(item);
    });
    console.log(this.items);
   
  }
  generateUUID() {
    return (Date.now() * Math.floor(Math.random() * 100000)).toString();
  }
  
  renderSearch(){
    this.element.querySelector('.search-input').addEventListener('input',e =>{const query =e.target.value.trim().toLowerCase();
    
      if(query == ''){
        this.copyItems =[this.items];
        this.pagination(this.copyItems.length, this.numberOfEntries);
        this.renderRows();
        this.renderPagesButtons();
        return;
      }
    this.search( query);

    this.pagination(this.copyItems.length, this.numberOfEntries);
        this.renderRows();
        this.renderPagesButtons();
    
    });
  }
  search(query){
    let res =[];

    this.copyItems=[... this.items]
    for(let i=0; i<this.copyItems.length;i++){
      const {id,values} = this.copyItems[i];
      const row = values;
for(let j=0; j<row.length;j++){
  const cell = row[j];
  if(cell.toLowerCase().indexOf(query)>= 0){
    res.push(this.copyItems[i]);
    break;

  }

}
    }
    this.copyItems= [... res];

  }
}
