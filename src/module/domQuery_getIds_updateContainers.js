function getIds_withTemplateClass(className, dom_categoryNames) {
      const offers_WrapperX99 = document.getElementsByClassName(className);
      for(var i=0; i<offers_WrapperX99.length; i++){
        dom_categoryNames.push(offers_WrapperX99[i].getAttribute('id'));
      }
}

function update_dataForRender(dom_categoryNames, dataForRender) {
  for(var i=0; i<dom_categoryNames.length; i++){
    dataForRender.push([]);
  }
}

function update_finalHTML(dom_categoryNames, finalHTML) {
  for(var i=0; i<dom_categoryNames.length; i++){
    finalHTML.push([]);
  }
}

const domQuery_getIds_updateContainers = (className, dom_categoryNames, dataForRender, finalHTML) => {
  //console.log('domQuery_getIds_updateContainers running!');
  getIds_withTemplateClass(className, dom_categoryNames);
  update_dataForRender(dom_categoryNames, dataForRender);
  update_finalHTML(dom_categoryNames, finalHTML);
};

export default domQuery_getIds_updateContainers;
