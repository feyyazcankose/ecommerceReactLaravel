class FieldAdd{

        constructor(parent){
            this.parent=parent;
        }

      addOption(select,value,text){
        const x = document.createElement("OPTION");
        x.setAttribute("value",value);
        x.innerHTML=text;
        select.appendChild(x);
    
    
      }
      
    
     addSelect(name){
        const x = document.createElement("SELECT");
        x.classList.add("form-select");
        x.setAttribute("name",name);
    
        this.parent.appendChild(x);
        this.addOption(x,"text","Metin");
        this.addOption(x,"checkbox","Çoklu Seçim");
        this.addOption(x,"radio","Tekli Seçim");
        this.addOption(x,"select","Seçim Alanı");
    
    }
      
      addLabel(text){
        const x = document.createElement("LABEL");
        
        x.innerHTML=text;
        x.classList.add("form-label");
    
    
    
    
        this.parent.appendChild(x)
    }
    
     addInput(name){
          const x = document.createElement("INPUT");
            
          
          
          x.setAttribute("type", "text");
          x.setAttribute("name", name);
          x.setAttribute("value", "");
          x.classList.add("form-control");
    
    
    
    
         this.parent.appendChild(x)
      }
    
       addButton(acf){
        const x = document.createElement("BUTTON");
        x.setAttribute("onClick", "destroy('acf-"+acf+"')");
        x.setAttribute("type", "button");
        x.classList.add("btn","btn-danger","text-white","mt-1");
        x.innerHTML="Sil";
        this.parent.appendChild(x); 
      }

}

export default FieldAdd
