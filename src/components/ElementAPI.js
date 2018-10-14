import elementJSON from '../PeriodicTableJSON.json';

const ELEMENTS = elementJSON.elements;

var ElementAPI = {
    getElementByPosition(x,y) {
        var element = ELEMENTS.splice(ELEMENTS.findIndex((element) => {
            return (element.xpos === x && element.ypos === y);
        }),1);
        
        return element[0] || false;
    }
}
export default ElementAPI;