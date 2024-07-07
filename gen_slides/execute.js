/**
 * THis module provide function to manage execution of script in slide
 * 
 */

/**
 * Delete iFrame to not execute it
 * Note: we need to add iFrame to quarto take source file 
 * @param {string} idIframe id of div contain iFrame in slide 
 */
function ExecuteInit(idIframe){
  // Get div contain iFrame
  const iFrame = document.getElementById(idIframe);
  // Empty div / delete iframe => not execute
  iFrame.innerHTML = `<div id="${idIframe}></div>"`;
}

/**
 * we include iFrame with script in slide
 * @param {string} idBt id of button to execute script
 * @param {string} idIframe id of div contain iFrame
 * @param {string} src where is html to add in iFrame
 * @param {number[]} dim iFrame's width height
 */
function ExecuteIframe(idBt, idIframe, src, dim){
  // get execute button
  const iFrame = document.getElementById(idIframe);
  // Get div contain iFrame
  const bt = document.getElementById(idBt);
  // delete button
  bt.remove();
  // Add iFrame
  iFrame.innerHTML=`
    <iframe id="${idIframe}"
      src="${src}" 
      width="${dim[0]}"
      height="${dim[1]}">
    </iframe>`;
}