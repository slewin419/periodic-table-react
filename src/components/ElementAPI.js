import elementJSON from '../PeriodicTableJSON.json';

const ELEMENTS = elementJSON.elements;

var ElementAPI = {
    getElementByPosition(x,y) {
        let index = ELEMENTS.findIndex((element) => {
            return (element.xpos === x && element.ypos === y);
        });        

        //let element = ELEMENTS.splice(index, 1);
        
        return (index !== -1) ? ELEMENTS[index] : false;
    }
}
export default ElementAPI;