const MasonryActiveClassName = 'masonryActive';
class Masonry {
    constructor(element, opotions = {}){
        this.containerNode = element;
        this.childrenNodes = element.children;
        this.childrenData = Array.from(this.childrenNodes).
        map((chilNode)=>({
            childNode,
            origHeight:Number(childNode.dataset.height),
            origWidht:Number(childNode.dataset.width)

        }));
        this.settings ={
            gap:opotions.gap || 0,
            colums:opotions.colums ||3
        };
        this.setParametrs();
    }
 setParametrs(){
     const containerWidth = this.containerNode.offserWidth;
     const widthImage = (containerWidth - this.settings.gap*(this.settings.colums - 1))/this.settings.colums;
   this.childrenData = this.childrenData.map((child)=>({
       ...child,
       currentWidth: widthImage,
       currentHeight:Math.floor(widthImage * child.origHeight/child.
       origWidht)   
       
   }));
   console.log(this.childrenData);
   const heightColumns = new Array(this.settings.columns).fill(0);
   const sizeColumns= new Array(this.settings.columns).fill(0); 
   this.childrenData.forEach((child,i)=>{
       console.log(i% this.settings.colums);
       heightColumns[i % this.settings.colums] +=child.currentHeight+this.settings.gap;
        sizeColumns[i% this.settings.colums]+=1;
   
    });


   const minHeightColumn = heightColumns.reduce((acc,size)=>(size < acc)? size:acc);
   const diffImages = heightColumns.map((heightColumn, i)=>(heightColumn-minHeightColumn)/sizeColumns[i]);
    this.containerNode.style.width="${containerWidth}px";
}
}
console.log(MasonryActiveClassName)