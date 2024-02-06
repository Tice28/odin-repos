export default function removeContentChild(){
    const content = document.getElementById("content");

    if(content.hasChildNodes()){
        const contentChild = content.removeChild(content.firstChild);
    }
}